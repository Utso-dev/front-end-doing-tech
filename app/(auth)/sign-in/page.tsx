import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export default function SignIn() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <LoginForm />
    </AuthLayout>
  );
}
