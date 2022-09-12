import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";


type FormValues = {
  email: string;
  password: string;
};

const logInAuth = (user: FormValues) => {

    const stringData = localStorage.getItem('users')
    const users: FormValues[] = (stringData) ? JSON.parse(stringData) : [];
    console.log(users);
    users.forEach((data)=> {
          if((data.email === user.email) && (data.password === user.password)) {
              alert('Signned in successfully')
              localStorage.setItem('currentUser', JSON.stringify(data))
              console.log('sucess')
          } else {
              console.log('invalid')
          }
    });
}

const LogIn: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // console.log(data)
    logInAuth(data)
  };
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
