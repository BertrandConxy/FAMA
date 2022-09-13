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
  const { register, handleSubmit, formState:{ errors } } = useForm<FormValues>();

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
          {...register("fullName", { required: true })}
          placeholder="Enter your Full name"
        />
        {errors.fullName && "First name is required"}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Enter your Email"
        />
        {errors.email && "Email is required"}
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Enter your Password"
        />
        {errors.password && "Passqord is required and must be at least 6 characters long"}

        <input type="submit" value="Sign up" />
      </form>
    </>
  );
};

export default SignUp;
