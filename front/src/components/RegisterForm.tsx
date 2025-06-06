"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateRegisterForm } from "@/helpers/validate";
import { register } from "@/helpers/auth.helpers";
import { useRouter } from "next/navigation";


const RegisterForm = () => {
  const router= useRouter();
   
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold text-center mb-6 text-blue-950">Registro de usuario</h1>
      <Formik
        initialValues={{ email: "", password: "", name: "", phone: "", address: "" }}
        validate={validateRegisterForm}
        onSubmit={ async (values) => {
          await register(values)
          router.push("/login")
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-blue-950 font-semibold">Nombre y Apellido</label>
              <Field
                type="text"
                name="name"
                placeholder="Nombre y Apellido"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-blue-950 font-semibold">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="ejemplo@mail.com"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-blue-950 font-semibold">Contraseña</label>
              <Field
                type="password"
                name="password"
                placeholder="********"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-blue-950 font-semibold">Teléfono</label>
              <Field
                type="text"
                name="phone"
                placeholder="114541747"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-blue-950 font-semibold">Dirección</label>
              <Field
                type="text"
                name="address"
                placeholder="Calle x n° x"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).length > 0}
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;

/*"use client";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateRegisterForm } from '@/helpers/validate';

const RegisterForm = () => {
  return (
    <div>
     <h1>Iniciar sesión</h1>
     <Formik
       initialValues={{ email: "", password: "", name: "", phone: "", address: "" }}
       validate={validateRegisterForm}
       onSubmit={(values) => {
         console.log(values, "Submit exitoso")
        }}
     >
       {({ isSubmitting, errors }) => (
         <Form>
           <label>Nombre: </label> 
           <Field type="text" name="name" placeholder="Nombre y Apellido"/>
           <ErrorMessage name="name" component="div" />
           <label>Email: </label> 
           <Field type="email" name="email" placeholder="ejemplo@mail.com"/>
           <ErrorMessage name="email" component="div" />
           <label>Password: </label> 
           <Field type="password" name="password" placeholder="****" />
           <ErrorMessage name="password" component="div" />
           <label>Telefono: </label> 
           <Field type="text" name="phone" placeholder="114541747"/>
           <ErrorMessage name="phone" component="div" />
           <label>Dirección: </label> 
           <Field type="text" name="address" placeholder="calle x n° x"/>
           <ErrorMessage name="address" component="div" />
           
           <button type="submit" disabled={isSubmitting ? true: 
            errors.email || errors.password || errors.address || errors.name || errors.phone ? true : false}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default RegisterForm;


import { useState } from "react";
import { toast } from "sonner";


const RegisterForm =() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }
    console.log("Submit exitoso"); 
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Nuevo usuario</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="address"
          placeholder="dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="phone"
          placeholder="telefono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-950 text-white p-2 rounded cursor-pointer">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default RegisterForm; */