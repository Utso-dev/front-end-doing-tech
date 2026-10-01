"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import CustomButton from "../common/CustomButton";
import FormField from "./FormField";

type Errors = Partial<Record<"email" | "password", string>>;

function LoginForm() {
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.email.value, e.currentTarget.password.value);
  };
  return (
    <div>
      {" "}
      <div className="flex h-full flex-col">
        <p className="text-lg text-secondaryColor">Sign In</p>
        <h1 className="mt-1 text-4xl font-semibold leading-[120%] text-descriptionColor md:text-[44px]">
          Welcome Back
        </h1>

        <form
          className="md:mt-10 mt-6 space-y-6"
          onSubmit={onSubmit}
          noValidate
        >
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="designer@example.com"
            autoComplete="email"
            error={errors.email}
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            autoComplete="current-password"
            error={errors.password}
          />
          <div className="flex justify-end">
            <CustomButton title=" Sign In " type="submit" />
          </div>
        </form>

        <div className="xl:mt-18 mt-8 md:mt-10 lg:mt-12 flex items-center gap-4 text-lg text-grayColor">
          <span className="h-px flex-1 bg-borderColor" />
          or
          <span className="h-px flex-1 bg-borderColor" />
        </div>

        <div className="xl:mt-10 mt-6 md:mt-8  flex justify-center gap-4">
          <Link
            href="https://www.facebook.com/share/19M4VurQKp/"
            aria-label="Sign in with Facebook"
            className="grid h-18 w-18 place-items-center rounded-2xl border border-borderColor text-descriptionColor transition hover:border-secondaryColor hover:text-secondaryColor"
          >
            <FaFacebook className="w-8.5 h-8.5" />
          </Link>
          <Link
            href="https://www.google.com"
            aria-label="Sign in with Google"
            className="grid h-18 w-18 place-items-center rounded-2xl border border-borderColor text-descriptionColor transition hover:border-secondaryColor hover:text-secondaryColor"
          >
            <FaGoogle className="w-8.5 h-8.5" />
          </Link>
        </div>

        <p className="mt-auto pt-16 text-center text-grayColor">
          New user?{" "}
          <Link
            href="/sign-up"
            className="text-secondaryColor hover:underborderColor"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
