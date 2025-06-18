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
       }}>
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
            >Registrarse
          </button>
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;

