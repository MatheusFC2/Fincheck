import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty("Nome é obrigatorio"),
  email: z
    .string()
    .nonempty("E-mail é obrigatorio")
    .email("Informe um E-mail valido"),
  password: z
    .string()
    .nonempty("Senha é obrigatorio")
    .min(8, "Senha deve conter pelo menos 8 dígitos"),
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    register,
    handleSubmit: hookFormHandlerSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandlerSubmit((data) => {
    console.log(data);
  });

  return {
    handleSubmit,
    register,
    errors,
  };
}
