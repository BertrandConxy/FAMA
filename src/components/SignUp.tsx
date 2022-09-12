import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  fullName: string;
  email: string;
  password: string;
};

const saveToLocalStorage = (name: string, data: FormValues) => {
  const stringData = localStorage.getItem(name);
  const storeArray: FormValues[] =
    localStorage[name] && stringData ? JSON.parse(stringData) : [];
  storeArray.push(data);
  localStorage.setItem(name, JSON.stringify(storeArray));
};

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data, e) => {
    saveToLocalStorage('users', data);
    e?.target.reset();
  };
  return (
    <>
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("fullName")}
          placeholder="Enter your Full name"
        />
        <input
          type="email"
          {...register("email")}
          placeholder="Enter your Email"
        />
        <input
          type="password"
          {...register("password")}
          placeholder="Enter your Password"
        />

        <input type="submit" value="Sign up" />
      </form>
    </>
  );
};

export default SignUp;
