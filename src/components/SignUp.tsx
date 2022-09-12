import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// interface SignUpProps {

// }

type FormValues = {
  fullName: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
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
