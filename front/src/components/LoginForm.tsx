"use client";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { login } from "@/helpers/auth.helpers";
import { validateLoginForm } from "@/helpers/validate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  
  const router=useRouter();
  const { setUserData} = useAuth();
  const { setCart } = useCart();

    
  return (
   <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg ">
     <h1 className="text-xl font-bold text-center mb-6 text-blue-950 ">Iniciar sesión</h1>
     <Formik
       initialValues={{ email: "", password: "" }}
       validate={validateLoginForm}
       onSubmit={ async (values) => {
        const response= await login(values)
        const {token, user} = response;
        setUserData({token, user});
        if (user?.email) {
          const savedCart = localStorage.getItem("cart_" + user.email);
          if (savedCart) {
          setCart(JSON.parse(savedCart));
          }
        }

        router.push("/"); 
       }}
      >
       {({ isSubmitting, errors }) => (
        <Form className="space-y-4">
         <div>
           <label className="block text-blue-950  font-semibold">Email</label>
           <Field
             type="email"
             name="email"
             placeholder="ejemplo@mail.com"
             className="w-full p-2 border rounded"
           />
           <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
         </div>
         <div>
           <label className="block text-blue-950  font-semibold">Contraseña</label>
           <Field
             type="password"
             name="password"
             placeholder="****"
             className="w-full p-2 border rounded"
           />
           <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>
          <button
             type="submit"
             disabled={isSubmitting || Object.keys(errors).length > 0}
             className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            >Iniciar sesión
          </button>
        </Form>
        )}
     </Formik>
    </div>
  );
};

export default LoginForm;

