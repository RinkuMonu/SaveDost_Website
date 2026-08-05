import MultiStepAuthForm from "../../../components/auth/MultiStepAuthForm";

export const metadata = {
  title: "Sign Up | SaveDost",
  description: "Create your personal SaveDost account.",
};

export default function SignupPage() {
  return <MultiStepAuthForm mode="signup" />;
}
