"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { FormData } from "@/app/interfaces";
import { loginService } from "@/service/authServices";
import useUserDataStore from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const LoginForm = () => {

    const router = useRouter();
    const { setUserData, userData } = useUserDataStore();
    const { handleSubmit,
      control,
      formState: { errors },
    } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    });

    const onSubmit = async (data: FormData) => {
     try {
      const response = await loginService(data);
       setUserData(response);
       {toast.success("Usuario logueado correctamente")}
      router.push("/dashboard"); 
      
     } catch (error) {
      {toast.error("Email o password incorrectos")};
     }
     };

    useEffect(() => {
     if (userData) {
      router.push("/dashboard"); 
      }
     }, [userData, router]);

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-12 flex flex-col items-center justify-center w-full gap-5"
      >
        <h1>Login</h1>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Email es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email no valido",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="email"
              label="Email"
              className="w-1/2"
              placeholder="cook@example.com"
            />
          )}
        />
        {errors.email && (
          <span className="text-red-700">{errors.email.message}</span>
        )}
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Password es requerida",
            },
            minLength: {
              value: 8,
              message: "Password debe tener al menos 8 caracteres",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              message:
                "Password debe tener al menos una mayúscula, una minúscula, un número y un carácter especial",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="Password"
              className="w-1/2"
            />
          )}
        />
        {errors.password && (
          <span className="text-red-700">{errors.password.message}</span>
        )}

        <Button color="secondary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;





