"use client"

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useForm, Controller } from 'react-hook-form';
import { RegisterFormType } from "@/app/interfaces";
import { registerUser } from "@/service/authServices";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useUserDataStore from "@/store";
import { toast } from "sonner";

const RegisterForm = () => {
  
    const router = useRouter()
    const { userData } = useUserDataStore();

  const { 
    handleSubmit,
    control,
    formState: { errors } } = useForm<RegisterFormType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: ""
    },
    mode: "onBlur"
  });

  useEffect(()=> {
        if(userData) {
          router.push("/dashboard");
        }
      }, []);

  const onSubmit = async (data: RegisterFormType) => {
    const res = await registerUser(data); 
    if (res) {toast.success("Usuario registrado correctamente")};
    router.push("/login")
    console.log(data);
  }

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 h-[100vh]">
      
      <form onSubmit={handleSubmit(onSubmit)} className="mx-12 flex flex-col items-center justify-center w-full gap-5">
       
        <h1>Registro</h1>

        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Nombre es requerido",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Nombre"
              className="w-1/2"
              placeholder='Victoria Garay'
            />
          )}
        />
        {errors.name && (
          <span className="text-red-700">{errors.name.message}</span>
        )}

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
              message: "Email no válido",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="email"
              label="Email"
              className="w-1/2"
              placeholder='example@mail.com'
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
              message: "Password es requerida"
            },
            minLength: {
              value: 8,
              message: "Password debe tener al menos 8 caracteres",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              message: "Password debe tener al menos una mayúscula, una minúscula, un número y un carácter especial"
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

        <Controller
          name="address"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Dirección es requerida",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Dirección"
              className="w-1/2"
              placeholder='123 Calle Falsa'
            />
          )}
        />
        {errors.address && (
          <span className="text-red-700">{errors.address.message}</span>
        )}

        <Controller
          name="phone"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Teléfono es requerido",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Teléfono no válido",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Teléfono"
              className="w-1/2"
              placeholder='+1234567890'
            />
          )}
        />
        {errors.phone && (
          <span className="text-red-700">{errors.phone.message}</span>
        )}

        <Button color="secondary" type="submit">Registrar</Button>
      </form>
    </div>
  );
}

export default RegisterForm;
