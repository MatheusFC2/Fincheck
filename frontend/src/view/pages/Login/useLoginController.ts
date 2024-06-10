import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SigninParams } from "../../../app/services/authService/signin";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../../app/services/authService";
import toast from "react-hot-toast";

const schema = z.object({
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

export function useLoginController() {
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const handleSubmit = handleFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch {
      toast.error("Credenciais inválidas!");
    }
  });
  return {
    handleSubmit,
    register,
    errors,
    isLoading,
  };
}
