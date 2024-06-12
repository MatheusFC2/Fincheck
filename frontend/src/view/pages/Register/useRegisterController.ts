import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../../../app/services/authService";
import { useMutation } from "@tanstack/react-query";
import { SignupParams } from "../../../app/services/authService/signup";
import toast from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth";

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

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandlerSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
    } catch {
      toast.error("Ocorreu um erro ao criar a sua conta!");
    }
    console.log(data);
  });

  return {
    handleSubmit,
    register,
    errors,
    isLoading,
  };
}
