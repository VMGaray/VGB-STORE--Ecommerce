"use client";
import { validateLoginForm } from "@/helpers/validate";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg ">
      <h1 className="text-xl font-bold text-center mb-6 text-blue-950 ">Iniciar sesión</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validateLoginForm}
        onSubmit={(values) => {
          console.log(values, "Seción iniciada correctamente");
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
            >
              Iniciar sesión
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

/*"use client";
import { validateLoginForm }from '@/helpers/validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const LoginForm = () => {
  return (
    <div>
     <h1>Iniciar sesión</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={validateLoginForm}
       onSubmit={(values) => {
         console.log(values, "Submit exitoso")
        }}
     >
       {({ isSubmitting, errors }) => (
         <Form>
           <label>Email: </label> 
           <Field type="email" name="email" placeholder="ejemplo@mail.com"/>
           <ErrorMessage name="email" component="div" />
           <label>Password: </label> 
           <Field type="password" name="password" placeholder="****" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting ? true: errors.email || errors.password ? true : false}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default LoginForm


/*
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }
    console.log("Submit exitoso"); 
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
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
        <button type="submit" className="w-full bg-blue-950 text-white p-2 rounded cursor-pointer">
          Acceder
        </button>
      </form>
    </div>
  );
}

export default LoginForm;*/