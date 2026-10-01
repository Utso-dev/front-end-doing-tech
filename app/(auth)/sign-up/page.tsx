"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import RegistrationForm from "@/components/auth/RegistrationForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <RegistrationForm />
    </AuthLayout>
  );
}
