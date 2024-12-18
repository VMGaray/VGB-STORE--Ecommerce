"use client";
import { ChangeEvent, FormEvent, useState, useEffect} from "react";
import { validateEmail, validatePassword } from "@/helpers/validation";

const LoginForm = () => {

    const initialData = {email:"", password:""}

    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);
    const [touched, setTouched] = useState({ email:false, password:false})
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submit");
     }; 

    const handleChange = (e:ChangeEvent<HTMLInputElement> ) => {
      setData({...data,  [e.target.name]:e.target.value});
    };

    const handleBlur = (e:ChangeEvent<HTMLInputElement> ) => {
      setTouched({...touched,  [e.target.name]: true});
    };

    
    const canSubmit = () => {
        return !validateEmail(data.email) && !validatePassword(data.password);
        }

    useEffect(() => {
      validateEmail(data.email);
      setErrors({ 
        email: validateEmail(data.email), 
        password: validatePassword(data.password)
    });
   }, [data]);

  return (
    <form className="max-w-sm mx-auto flex flex-col gap-5" 
      onSubmit={(e) => handleSubmit(e)}>

      <div>
        <label className="block mb-2 text-sm font-medium">Usuario</label>
        <input
          type="text"
          className={`bg-quaternary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                      ${errors.email !== "" && touched.email ? "bg-red-100" : ""}`}
          placeholder="name@email.com"
          name="email"
          onChange={(e) => handleChange(e)} 
          value={data.email}
          onBlur={(e) => handleBlur(e)}
        />
        {touched.email && <p className="text-red-700">{errors.email}</p>}

      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input 
          type="password"
          className="bg-quaternary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                    
          placeholder="password"
          name="password"
          onChange={(e) => handleChange(e)} 
          value={data.password}
          onBlur={(e) => handleBlur(e)}
        />
       {touched.password && <p className="text-red-700">{errors.password}</p>}
      </div>

      <button type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:text-gray-500"
        disabled={!canSubmit()}>
        
        Enviar</button>
    </form>
      
  )

}
export default LoginForm;
