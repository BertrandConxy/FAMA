import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const logInAuth = (user: FormValues) => {
  const stringData = localStorage.getItem("users");
  const users: FormValues[] = stringData ? JSON.parse(stringData) : [];
  users.forEach((data) => {
    if (data.email === user.email && data.password === user.password) {
      alert("Signned in successfully");
      localStorage.setItem("currentUser", JSON.stringify(data));
    } else {
      alert("invalid password or Email");
    }
  });
};

const LogIn: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    logInAuth(data);
  };
  return (
    <>
      <h2>Log in Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Enter your Email"
        />
        {errors.email && "Email is required"}
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Enter your Password"
        />
        {errors.password && "First name is required"}

        <input type="submit" value="Log in" />
      </form>
    </>
  );
};

export default LogIn;
