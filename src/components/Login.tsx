import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// interface LogInProps {

// }

type FormValues = {
  email: string;
  password: string;
};

const LogIn: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <>
      <h2>Log in Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <input type="submit" value="Log in" />
      </form>
    </>
  );
};

export default LogIn;
