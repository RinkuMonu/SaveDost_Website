import MultiStepAuthForm from "../../../components/auth/MultiStepAuthForm";

export const metadata = {
  title: "Sign In | SaveDost",
  description: "Sign in to your SaveDost account.",
};

export default function LoginPage() {
  return <MultiStepAuthForm mode="login" />;
}
