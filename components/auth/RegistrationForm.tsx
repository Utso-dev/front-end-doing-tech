"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import CustomButton from "../common/CustomButton";
import FormField from "./FormField";

type RegistrationFormValues = {
  name: string;
  email: string;
  password: string;
};

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>();

  const onSubmit = (data: RegistrationFormValues) => {
    console.log(data);
  };
  return (
    <div>
      {" "}
      <div className="flex h-full flex-col">
        <p className="text-lg text-secondaryColor">Create an Account</p>
        <h1 className="mt-1 text-4xl font-semibold leading-[120%] text-descriptionColor md:text-[44px]">
          Welcome to ByteSpace
        </h1>

        <form
          className="md:mt-10 mt-6 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <FormField
            label="Name"
            type="text"
            placeholder="Jamie Davis"
            autoComplete="name"
            error={errors.name?.message}
            {...register("name", { required: "Name is required" })}
          />
          <FormField
            label="Email"
            type="email"
            placeholder="designer@example.com"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          <FormField
            label="Password"
            type="password"
            placeholder="********"
            autoComplete="new-password"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <div className="flex justify-end">
            <CustomButton title=" Sign In " type="submit" />
          </div>
        </form>

        <p className="mt-auto pt-16 lg:pt-30 lg:pb-4 text-center text-grayColor">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-secondaryColor hover:underborderColor"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
