"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaApple } from "react-icons/fa";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CalendarDays,
  Check,
  CreditCard,
  Eye,
  EyeOff,
  Headphones,
  IdCard,
  Landmark,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  UserRound,
  WalletCards,
  Zap,
} from "lucide-react";
import { clearClientSession } from "./sessionClient";

const paymentServices = [
  { icon: Smartphone, label: "Recharge & Bills" },
  { icon: Zap, label: "Fast Payments" },
  { icon: CreditCard, label: "Credit Cards" },
  { icon: ShieldCheck, label: "Insurance" },
  { icon: WalletCards, label: "And Many More" },
];

const reasons = [
  { icon: WalletCards, text: "All payments in one secure app" },
  { icon: RefreshCw, text: "Fast, simple & reliable" },
  { icon: ShieldCheck, text: "Trusted service experience" },
  { icon: LockKeyhole, text: "Secure and private transactions" },
];

export default function MultiStepAuthForm({ mode }) {
  const isSignup = mode === "signup";
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [signupStep, setSignupStep] = useState(1);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [registeringUser, setRegisteringUser] = useState(false);
  const [loginMobile, setLoginMobile] = useState("");
  const [loginOtp, setLoginOtp] = useState("");
  const [loginOtpSent, setLoginOtpSent] = useState(false);
  const [sendingLoginOtp, setSendingLoginOtp] = useState(false);
  const [verifyingLoginOtp, setVerifyingLoginOtp] = useState(false);
  const [loginNeedsSignup, setLoginNeedsSignup] = useState(false);
  const [verifyingEmail, setVerifyingEmail] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [verifyingAadhaar, setVerifyingAadhaar] = useState(false);
  const [verifyingPan, setVerifyingPan] = useState(false);
  const [aadhaarOtpSent, setAadhaarOtpSent] = useState(false);
  const [aadhaarClientId, setAadhaarClientId] = useState("");
  const [signupUserId, setSignupUserId] = useState("");
  const [signupData, setSignupData] = useState({
    mobile: "",
    mobileOtp: "",
    email: "",
    pan: "",
    panName: "",
    aadharNumber: "",
    aadharOtp: "",
    fullName: "",
    dob: "",
    gender: "",
    occupation: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
    confirmPassword: "",
  });
  const signupProgressSnapshot = JSON.stringify({
    step: signupStep,
    mobile: signupData.mobile,
    email: signupData.email,
    fullName: signupData.fullName,
    mobileVerified,
    emailVerified,
    userId: signupUserId,
  });

  useEffect(() => {
    if (!isSignup) return;
    try {
      const saved = JSON.parse(sessionStorage.getItem("finunique_signup_progress") || "null");
      if (saved) {
        // Resume from Account Details at most because passwords and KYC identifiers
        // are deliberately never stored in browser storage.
        setSignupStep(Math.min(Math.max(Number(saved.step) || 1, 1), 2));
        setMobileVerified(Boolean(saved.mobileVerified));
        setEmailVerified(Boolean(saved.emailVerified));
        setSignupUserId(saved.userId || "");
        setSignupData((current) => ({
          ...current,
          mobile: saved.mobile || "",
          email: saved.email || "",
          fullName: saved.fullName || "",
        }));
      }
    } catch {
      sessionStorage.removeItem("finunique_signup_progress");
    } finally {
      setProgressLoaded(true);
    }
  }, [isSignup]);

  useEffect(() => {
    if (!isSignup || !progressLoaded) return;
    sessionStorage.setItem("finunique_signup_progress", signupProgressSnapshot);
  }, [isSignup, progressLoaded, signupProgressSnapshot]);

  const updateSignupData = (field) => (event) => {
    const value = field === "pan" ? event.target.value.toUpperCase() : event.target.value;
    if (field === "mobile") {
      setOtpSent(false);
      setMobileVerified(false);
      setSignupData((current) => ({ ...current, mobileOtp: "" }));
    }
    if (field === "aadharNumber") {
      setAadhaarOtpSent(false);
      setAadhaarClientId("");
      setSignupData((current) => ({ ...current, aadharOtp: "" }));
    }
    if (field === "email") setEmailVerified(false);
    setSignupData((current) => ({ ...current, [field]: value }));
  };

  const sendMobileOtp = async () => {
    if (!/^[6-9]\d{9}$/.test(signupData.mobile)) {
      setMessage("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    setSendingOtp(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: signupData.mobile }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Unable to send OTP.");
      }

      setOtpSent(true);
      setMessage(data?.message || "OTP sent successfully.");
    } catch (error) {
      setOtpSent(false);
      setMessage(error.message || "Unable to send OTP. Please try again.");
    } finally {
      setSendingOtp(false);
    }
  };

  const ensureSignupUser = async () => {
    if (signupUserId) return signupUserId;

    setRegisteringUser(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: signupData.mobile }),
      });
      const data = await response.json();

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "Unable to create the user account.");
      }

      const userId =
        data?.userId ||
        data?.id ||
        data?._id ||
        data?.data?.userId ||
        data?.data?.id ||
        data?.data?._id ||
        data?.data?.user?.id ||
        data?.data?.user?._id ||
        data?.user?.id ||
        data?.user?._id ||
        "";

      if (!userId) {
        throw new Error("Registration succeeded but the API did not return a userId.");
      }

      setSignupUserId(String(userId));
      return String(userId);
    } finally {
      setRegisteringUser(false);
    }
  };

  const verifyMobileOtp = async () => {
    setVerifyingOtp(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobileNumber: signupData.mobile,
          otp: signupData.mobileOtp,
        }),
      });
      const data = await response.json();

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "The OTP is invalid or expired.");
      }

      let verifiedUserId =
        data?.userId ||
        data?.data?.userId ||
        data?.data?.user?.id ||
        data?.user?.id ||
        data?.data?._id ||
        data?.user?._id ||
        "";

      if (!verifiedUserId) {
        setRegisteringUser(true);
        const registerResponse = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobileNumber: signupData.mobile }),
        });
        const registerData = await registerResponse.json();

        if (!registerResponse.ok || registerData?.success === false) {
          throw new Error(registerData?.message || "Unable to create the user account.");
        }

        verifiedUserId =
          registerData?.userId ||
          registerData?.id ||
          registerData?._id ||
          registerData?.data?.userId ||
          registerData?.data?.id ||
          registerData?.data?._id ||
          registerData?.data?.user?.id ||
          registerData?.data?.user?._id ||
          registerData?.user?.id ||
          registerData?.user?._id ||
          "";
      }

      if (!verifiedUserId) {
        throw new Error("Registration succeeded but the API did not return a userId.");
      }

      setSignupUserId(String(verifiedUserId));
      setMessage("");
      setMobileVerified(true);
      setSignupStep(2);
    } catch (error) {
      setMessage(error.message || "Unable to verify OTP. Please try again.");
    } finally {
      setVerifyingOtp(false);
      setRegisteringUser(false);
    }
  };

  const sendLoginOtp = async () => {
    if (!/^[6-9]\d{9}$/.test(loginMobile)) {
      setLoginNeedsSignup(false);
      setMessage("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    setSendingLoginOtp(true);
    setLoginNeedsSignup(false);
    setMessage("");

    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: loginMobile }),
      });
      const data = await response.json();

      if (!response.ok || data?.success === false) {
        const errorMessage = data?.message || "No account was found for this mobile number.";
        const userNotFound =
          response.status === 404 ||
          /not\s*(found|registered|exist)|new\s*user|no\s*account|please\s*(sign\s*up|register)/i.test(
            errorMessage
          );
        setLoginNeedsSignup(userNotFound);
        throw new Error(errorMessage);
      }

      setLoginOtpSent(true);
      setMessage(data?.message || "OTP sent successfully.");
    } catch (error) {
      setLoginOtpSent(false);
      setMessage(error.message || "Unable to send OTP. Please try again.");
    } finally {
      setSendingLoginOtp(false);
    }
  };

  const verifyLoginOtp = async () => {
    if (!loginOtpSent) {
      setMessage("Send the OTP before logging in.");
      return;
    }

    setVerifyingLoginOtp(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: loginMobile, otp: loginOtp, purpose: "login" }),
      });
      const data = await response.json();

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "The OTP is invalid or expired.");
      }

      clearClientSession();
      setMessage("Login successful. Redirecting...");
      const returnTo = new URLSearchParams(window.location.search).get("returnTo");
      router.push(returnTo?.startsWith("/") ? returnTo : "/");
      router.refresh();
    } catch (error) {
      setMessage(error.message || "Unable to verify OTP. Please try again.");
    } finally {
      setVerifyingLoginOtp(false);
    }
  };

  const verifyEmailAddress = async () => {
    setVerifyingEmail(true);
    setMessage("");

    try {
      const response = await fetch("/api/kyc/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signupData.email }),
      });
      const data = await response.json();

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "This email address could not be verified.");
      }

      setEmailVerified(true);
      setMessage(data?.message || "Email verified successfully.");
    } catch (error) {
      setMessage(error.message || "Unable to verify email. Please try again.");
    } finally {
      setVerifyingEmail(false);
    }
  };

  const verifyAadhaar = async () => {
    setVerifyingAadhaar(true);
    setMessage("");

    try {
      const response = await fetch("/api/kyc/aadhar-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ aadharNumber: signupData.aadharNumber }),
      });
      const data = await response.json();

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "Aadhaar verification could not be completed.");
      }

      const clientId =
        data?.client_id || data?.clientId || data?.data?.client_id || data?.data?.clientId || "";
      const returnedUserId =
        data?.userId ||
        data?.data?.userId ||
        data?.data?.user?.id ||
        data?.user?.id ||
        signupUserId;

      if (!clientId) {
        throw new Error("The Aadhaar API did not return a client_id.");
      }

      setAadhaarClientId(String(clientId));
      setSignupUserId(returnedUserId ? String(returnedUserId) : "");
      setAadhaarOtpSent(true);
      setMessage(data?.message || "Aadhaar OTP sent successfully.");
    } catch (error) {
      setMessage(error.message || "Unable to verify Aadhaar. Please try again.");
    } finally {
      setVerifyingAadhaar(false);
    }
  };

  const submitAadhaarOtp = async () => {
    setVerifyingAadhaar(true);
    setMessage("");

    try {
      const response = await fetch("/api/kyc/submit-aadhar-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          aadharNumber: signupData.aadharNumber,
          otp: signupData.aadharOtp,
          client_id: aadhaarClientId,
          userId: signupUserId,
        }),
      });
      const data = await response.json();

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "The Aadhaar OTP is invalid or expired.");
      }

      setMessage("");
      setSignupStep(5);
    } catch (error) {
      setMessage(error.message || "Unable to submit Aadhaar OTP. Please try again.");
    } finally {
      setVerifyingAadhaar(false);
    }
  };

  const verifyPan = async () => {
    setVerifyingPan(true);
    setMessage("");

    try {
      const response = await fetch("/api/kyc/verify-pan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_number: signupData.pan,
          userId: signupUserId,
        }),
      });
      const data = await response.json();

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "PAN verification could not be completed.");
      }

      setMessage("");
      setSignupStep(4);
    } catch (error) {
      setMessage(error.message || "Unable to verify PAN. Please try again.");
    } finally {
      setVerifyingPan(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isSignup) {
      await verifyLoginOtp();
      return;
    }
    if (isSignup && signupStep === 1) {
      if (!otpSent) {
        setMessage("Send the OTP before continuing.");
        return;
      }
      await verifyMobileOtp();
      return;
    }
    if (isSignup && signupStep === 2) {
      if (signupData.password !== signupData.confirmPassword) {
        setMessage("Password and confirm password must match.");
        return;
      }
      try {
        await ensureSignupUser();
        setMessage("");
        setSignupStep(3);
      } catch (error) {
        setMessage(error.message || "Unable to create the user account.");
      }
      return;
    }
    if (isSignup && signupStep === 4) {
      if (aadhaarOtpSent) {
        await submitAadhaarOtp();
      } else {
        await verifyAadhaar();
      }
      return;
    }
    if (isSignup && signupStep === 3) {
      await verifyPan();
      return;
    }
    if (isSignup && signupStep < 5) {
      setSignupStep((current) => current + 1);
      setMessage("");
      return;
    }
    setMessage(
      "The account interface is ready. Connect an authentication backend to activate account access."
    );
  };

  return (
    <main className="flex min-h-screen items-center bg-[radial-gradient(circle_at_top_left,#eaf5f3,transparent_34%),radial-gradient(circle_at_bottom_right,#eef2fa,transparent_36%),#f8fafb] p-3 sm:p-4">
      <div
        className={`mx-auto grid w-full max-w-[920px] overflow-hidden rounded-[24px] border border-white bg-white shadow-[0_20px_55px_rgba(15,42,68,0.14)] ${isSignup ? "lg:h-[calc(100vh-48px)] lg:max-h-[720px] lg:min-h-[600px] lg:grid-cols-[1.38fr_.62fr]" : "lg:h-[560px] lg:grid-cols-[1.1fr_.9fr]"}`}
      >
        <section
          className={`relative flex max-h-full flex-col overflow-y-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-9 lg:px-10 ${isSignup ? "justify-start py-4" : "justify-center py-6"}`}
        >
          <Brand />

          <div className={`mx-auto w-full ${isSignup ? "mt-2 max-w-xl" : "mt-6 max-w-sm"}`}>
            <h1
              className={`${isSignup ? "text-2xl" : "text-3xl"} font-extrabold tracking-tight text-[#0b1931]`}
            >
              {isSignup ? "Create Your Account" : "Welcome Back!"}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {isSignup
                ? "Complete secure verification in a few simple steps"
                : "Login to access your SaveDost account"}
            </p>

            {isSignup && <SignupProgress currentStep={signupStep} />}

            <form
              onSubmit={handleSubmit}
              className={`${isSignup ? "mt-3 space-y-2" : "mt-5 space-y-3"}`}
            >
              {isSignup ? (
                <SignupStepFields
                  step={signupStep}
                  data={signupData}
                  update={updateSignupData}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  sendMobileOtp={sendMobileOtp}
                  sendingOtp={sendingOtp}
                  otpSent={otpSent}
                  verifyEmailAddress={verifyEmailAddress}
                  verifyingEmail={verifyingEmail}
                  emailVerified={emailVerified}
                  aadhaarOtpSent={aadhaarOtpSent}
                />
              ) : (
                <>
                  <Field icon={Phone} label="Registered Mobile Number" prefix="+91">
                    <input
                      id="login-mobile"
                      name="mobileNumber"
                      required
                      inputMode="numeric"
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      autoComplete="tel"
                      value={loginMobile}
                      onChange={(event) => {
                        setLoginMobile(event.target.value);
                        setLoginOtpSent(false);
                        setLoginOtp("");
                        setLoginNeedsSignup(false);
                      }}
                      placeholder="Enter mobile number"
                      className="auth-reference-input"
                    />
                  </Field>
                  <button
                    type="button"
                    onClick={sendLoginOtp}
                    disabled={sendingLoginOtp}
                    className="ml-auto block rounded-lg border border-[#8acddd] px-3 py-1.5 text-xs font-bold text-[#026381] transition hover:bg-[#eaf8fb] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sendingLoginOtp ? "Sending..." : loginOtpSent ? "Resend OTP" : "Send OTP"}
                  </button>
                  <Field icon={ShieldCheck} label="Mobile OTP">
                    <input
                      id="login-otp"
                      name="otp"
                      required
                      disabled={!loginOtpSent}
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      maxLength={6}
                      autoComplete="one-time-code"
                      value={loginOtp}
                      onChange={(event) => setLoginOtp(event.target.value)}
                      placeholder={loginOtpSent ? "Enter 6-digit OTP" : "Send OTP first"}
                      className="auth-reference-input disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </Field>
                </>
              )}

              <div className="flex gap-2 pt-1">
                {isSignup && signupStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setSignupStep((current) => current - 1)}
                    className="flex items-center justify-center gap-1 rounded-xl border border-[#b8dbe3] px-4 py-3 text-sm font-bold text-[#026381] transition hover:bg-[#eef9fb]"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={
                    verifyingOtp ||
                    registeringUser ||
                    verifyingLoginOtp ||
                    verifyingEmail ||
                    verifyingAadhaar ||
                    verifyingPan
                  }
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#00a8e8,#026381)] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#026381]/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSignup ? (
                    registeringUser ? (
                      "Creating User..."
                    ) : signupStep === 1 && verifyingOtp ? (
                      "Verifying OTP..."
                    ) : signupStep === 4 && verifyingAadhaar ? (
                      aadhaarOtpSent ? (
                        "Submitting OTP..."
                      ) : (
                        "Sending Aadhaar OTP..."
                      )
                    ) : signupStep === 3 && verifyingPan ? (
                      "Verifying PAN..."
                    ) : signupStep === 5 ? (
                      <>
                        <UserRound size={18} /> Create Account
                      </>
                    ) : signupStep === 4 && !aadhaarOtpSent ? (
                      "Send Aadhaar OTP"
                    ) : signupStep === 3 ? (
                      "Verify PAN"
                    ) : (
                      <>
                        Continue <ArrowRight size={17} />
                      </>
                    )
                  ) : verifyingLoginOtp ? (
                    "Verifying OTP..."
                  ) : (
                    <>
                      <LogInMark /> Login with OTP
                    </>
                  )}
                </button>
              </div>
            </form>

            {message && (
              <p
                role="status"
                className="mt-2 rounded-lg bg-[#eaf8fb] px-3 py-1.5 text-xs leading-5 text-[#0C3D4C]"
              >
                {message}
              </p>
            )}
            {loginNeedsSignup && (
              <div
                role="alert"
                className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5"
              >
                <p className="text-xs leading-5 text-amber-900">
                  This mobile number is not registered. Please create an account first.
                </p>
                <Link
                  href="/signup"
                  className="shrink-0 rounded-lg bg-[#026381] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#0C3D4C]"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {!isSignup && <SocialOptions />}

            <p className="mt-3 text-center text-sm text-slate-600">
              {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
              <Link
                href={isSignup ? "/login" : "/signup"}
                className="font-bold text-[#026381] hover:text-[#00a8e8] hover:underline"
              >
                {isSignup ? "Login" : "Sign Up"}
              </Link>
            </p>
          </div>

          {!isSignup && (
            <div className="mx-auto mt-6 grid w-full max-w-sm grid-cols-3 gap-3 border-t border-slate-100 pt-4 text-[9px] text-slate-600">
              <TrustItem icon={ShieldCheck} text="100% Secure & Safe Payments" />
              <TrustItem icon={Zap} text="Instant Transactions" />
              <TrustItem icon={Headphones} text="Helpful Support" />
            </div>
          )}
        </section>

        {isSignup ? <SignupVisual /> : <LoginVisual />}

        <style jsx global>{`
          .auth-reference-input {
            width: 100%;
            border: 0;
            background: transparent;
            padding: 0.45rem 0;
            color: #0f172a;
            font-size: 0.8rem;
            outline: none;
          }
          .auth-reference-input::placeholder {
            color: #9aa5b4;
          }
        `}</style>
      </div>
    </main>
  );
}

const signupSteps = ["Mobile", "Account", "PAN", "Aadhaar", "Consent"];

function SignupProgress({ currentStep }) {
  return (
    <div className="mt-3">
      <div className="flex items-center">
        {signupSteps.map((label, index) => {
          const step = index + 1;
          const complete = step < currentStep;
          const active = step === currentStep;
          return (
            <div key={label} className="flex flex-1 items-center last:flex-none">
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-extrabold transition ${complete ? "bg-[#026381] text-white" : active ? "bg-[#00a8e8] text-white ring-4 ring-[#00a8e8]/10" : "bg-slate-100 text-slate-400"}`}
              >
                {complete ? <Check size={14} /> : step}
              </span>
              {index < signupSteps.length - 1 && (
                <span
                  className={`mx-1 h-0.5 flex-1 ${complete ? "bg-[#026381]" : "bg-slate-200"}`}
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-2 text-xs font-bold text-[#026381]">
        Step {currentStep} of 5 · {signupSteps[currentStep - 1]} details
      </p>
    </div>
  );
}

function SignupStepFields({
  step,
  data,
  update,
  showPassword,
  setShowPassword,
  sendMobileOtp,
  sendingOtp,
  otpSent,
  verifyEmailAddress,
  verifyingEmail,
  emailVerified,
  aadhaarOtpSent,
}) {
  if (step === 1) {
    return (
      <>
        <Field icon={Phone} label="Mobile Number" prefix="+91">
          <input
            id="signup-mobile"
            name="mobileNumber"
            required
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            autoComplete="tel"
            value={data.mobile}
            onChange={update("mobile")}
            placeholder="Enter mobile number"
            className="auth-reference-input"
          />
        </Field>
        <button
          type="button"
          onClick={sendMobileOtp}
          disabled={sendingOtp}
          className="ml-auto block rounded-lg border border-[#8acddd] px-3 py-1.5 text-xs font-bold text-[#026381] transition hover:bg-[#eaf8fb] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sendingOtp ? "Sending..." : otpSent ? "Resend OTP" : "Send OTP"}
        </button>
        <Field icon={ShieldCheck} label="Mobile OTP">
          <input
            id="signup-mobile-otp"
            name="mobileOtp"
            required
            disabled={!otpSent}
            inputMode="numeric"
            pattern="[0-9]{6}"
            maxLength={6}
            autoComplete="one-time-code"
            value={data.mobileOtp}
            onChange={update("mobileOtp")}
            placeholder={otpSent ? "Enter 6-digit OTP" : "Send OTP first"}
            className="auth-reference-input disabled:cursor-not-allowed disabled:opacity-60"
          />
        </Field>
        <StepNote>
          {otpSent
            ? "OTP sent to your mobile number. Enter it above to continue."
            : "We will send a one-time password to verify this mobile number."}
        </StepNote>
      </>
    );
  }

  if (step === 2) {
    return (
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#0289ad]">
            Basic information
          </p>
          <Field icon={UserRound} label="Full Name">
            <input
              id="signup-full-name"
              name="fullName"
              required
              autoComplete="name"
              value={data.fullName}
              onChange={update("fullName")}
              placeholder="Enter your full name"
              className="auth-reference-input"
            />
          </Field>
          <Field icon={Mail} label="Email Address">
            <input
              id="signup-email"
              name="email"
              required
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={update("email")}
              placeholder="Enter your email address"
              className="auth-reference-input"
            />
          </Field>
          <button
            type="button"
            onClick={verifyEmailAddress}
            disabled={verifyingEmail || emailVerified}
            className="ml-auto flex items-center gap-1.5 rounded-lg border border-[#8acddd] px-3 py-1.5 text-xs font-bold text-[#026381] transition hover:bg-[#eaf8fb] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {emailVerified ? (
              <>
                <Check size={14} /> Email Verified
              </>
            ) : verifyingEmail ? (
              "Verifying..."
            ) : (
              "Verify Email"
            )}
          </button>
        </div>

        <div className="space-y-3 border-t border-slate-100 pt-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#0289ad]">
            Account security
          </p>
          <Field icon={LockKeyhole} label="Create Password">
            <input
              id="signup-password"
              name="password"
              required
              minLength={8}
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={data.password}
              onChange={update("password")}
              placeholder="Minimum 8 characters"
              className="auth-reference-input pr-10"
            />
            <PasswordToggle show={showPassword} setShow={setShowPassword} />
          </Field>
          <Field icon={LockKeyhole} label="Confirm Password">
            <input
              id="signup-confirm-password"
              name="confirmPassword"
              required
              minLength={8}
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={data.confirmPassword}
              onChange={update("confirmPassword")}
              placeholder="Re-enter password"
              className="auth-reference-input pr-10"
            />
            <PasswordToggle show={showPassword} setShow={setShowPassword} />
          </Field>
        </div>

        <div className="space-y-3 border-t border-slate-100 pt-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#0289ad]">
            Personal details
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field icon={CalendarDays} label="Date of Birth">
              <input
                id="signup-dob"
                name="dateOfBirth"
                required
                type="date"
                autoComplete="bday"
                value={data.dob}
                onChange={update("dob")}
                className="auth-reference-input"
              />
            </Field>
            <Field icon={UserRound} label="Gender">
              <select
                id="signup-gender"
                name="gender"
                required
                value={data.gender}
                onChange={update("gender")}
                className="auth-reference-input"
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </Field>
            <Field icon={Briefcase} label="Occupation">
              <select
                id="signup-occupation"
                name="occupation"
                required
                value={data.occupation}
                onChange={update("occupation")}
                className="auth-reference-input"
              >
                <option value="">Select occupation</option>
                <option>Salaried</option>
                <option>Self-employed</option>
                <option>Student</option>
                <option>Homemaker</option>
                <option>Retired</option>
                <option>Other</option>
              </select>
            </Field>
            <Field icon={MapPin} label="Country">
              <select
                id="signup-country"
                name="country"
                required
                autoComplete="country-name"
                value={data.country}
                onChange={update("country")}
                className="auth-reference-input"
              >
                <option>India</option>
              </select>
            </Field>
          </div>
        </div>

        <div className="space-y-3 border-t border-slate-100 pt-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#0289ad]">
            Residential address
          </p>
          <Field icon={MapPin} label="Full Address">
            <input
              id="signup-address"
              name="streetAddress"
              required
              autoComplete="street-address"
              value={data.address}
              onChange={update("address")}
              placeholder="House number, street and area"
              className="auth-reference-input"
            />
          </Field>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field icon={MapPin} label="City and State">
              <input
                id="signup-city-state"
                name="cityAndState"
                required
                value={`${data.city}${data.city && data.state ? ", " : ""}${data.state}`}
                onChange={(event) => {
                  const [city = "", state = ""] = event.target.value.split(",");
                  update("city")({ target: { value: city.trim() } });
                  update("state")({ target: { value: state.trim() } });
                }}
                placeholder="City, State"
                className="auth-reference-input"
              />
            </Field>
            <Field icon={MapPin} label="PIN Code">
              <input
                id="signup-pincode"
                name="postalCode"
                required
                inputMode="numeric"
                pattern="[1-9][0-9]{5}"
                maxLength={6}
                autoComplete="postal-code"
                value={data.pincode}
                onChange={update("pincode")}
                placeholder="6-digit PIN code"
                className="auth-reference-input"
              />
            </Field>
          </div>
        </div>
        <StepNote>
          Email verification is temporarily optional while the verification service is being
          corrected. The API and Verify Email button remain available.
        </StepNote>
      </div>
    );
  }

  if (step === 3) {
    return (
      <>
        <Field icon={IdCard} label="PAN Number">
          <input
            id="signup-pan"
            name="panNumber"
            required
            pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
            maxLength={10}
            autoComplete="off"
            value={data.pan}
            onChange={update("pan")}
            placeholder="ABCDE1234F"
            className="auth-reference-input uppercase"
          />
        </Field>
        <Field icon={UserRound} label="Name as per PAN">
          <input
            id="signup-pan-name"
            name="panName"
            required
            autoComplete="name"
            value={data.panName}
            onChange={update("panName")}
            placeholder="Enter the exact name on PAN"
            className="auth-reference-input"
          />
        </Field>
        <label className="flex items-start gap-2 text-xs leading-5 text-slate-600">
          <input
            id="pan-consent"
            name="panConsent"
            required
            type="checkbox"
            className="mt-0.5 h-4 w-4 accent-[#00a8e8]"
          />
          <span>I consent to PAN verification through an authorized verification facility.</span>
        </label>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <Field icon={IdCard} label="Aadhaar Number">
          <input
            id="signup-aadhaar"
            name="aadhaarNumber"
            required
            disabled={aadhaarOtpSent}
            inputMode="numeric"
            pattern="[2-9][0-9]{11}"
            maxLength={12}
            autoComplete="off"
            value={data.aadharNumber}
            onChange={update("aadharNumber")}
            placeholder="Enter 12-digit Aadhaar number"
            className="auth-reference-input disabled:cursor-not-allowed disabled:opacity-60"
          />
        </Field>
        {aadhaarOtpSent && (
          <Field icon={ShieldCheck} label="Aadhaar OTP">
            <input
              id="signup-aadhaar-otp"
              name="aadhaarOtp"
              required
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              autoComplete="one-time-code"
              value={data.aadharOtp}
              onChange={update("aadharOtp")}
              placeholder="Enter 6-digit Aadhaar OTP"
              className="auth-reference-input"
            />
          </Field>
        )}
        <label className="flex items-start gap-2 text-xs leading-5 text-slate-600">
          <input
            id="aadhaar-consent"
            name="aadhaarConsent"
            required
            type="checkbox"
            className="mt-0.5 h-4 w-4 accent-[#00a8e8]"
          />
          <span>I consent to Aadhaar verification for identity and KYC checks.</span>
        </label>
        <StepNote>
          {aadhaarOtpSent
            ? "Enter the OTP sent for Aadhaar verification. The verification session is linked using the API client ID."
            : "Your Aadhaar number is submitted securely to the connected verification service and is not stored in browser progress."}
        </StepNote>
      </>
    );
  }

  return (
    <>
      <div className="rounded-xl border border-[#d9edf2] bg-[#f5fbfc] p-4">
        <p className="text-xs font-bold uppercase tracking-[.14em] text-[#0289ad]">
          Review your account
        </p>
        <div className="mt-3 grid gap-2 text-xs text-slate-600 sm:grid-cols-2">
          <p>
            <span className="font-semibold text-[#0C3D4C]">Name:</span> {data.fullName}
          </p>
          <p>
            <span className="font-semibold text-[#0C3D4C]">Mobile:</span> +91 {data.mobile}
          </p>
          <p>
            <span className="font-semibold text-[#0C3D4C]">Email:</span> {data.email}
          </p>
          <p>
            <span className="font-semibold text-[#0C3D4C]">PAN:</span> {data.pan}
          </p>
        </div>
      </div>
      <label className="flex items-start gap-2 text-xs leading-5 text-slate-600">
        <input
          id="terms-consent"
          name="termsConsent"
          required
          type="checkbox"
          className="mt-0.5 h-4 w-4 accent-[#00a8e8]"
        />
        <span>
          I agree to the{" "}
          <Link href="/terms-of-use" className="font-semibold text-[#026381]">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="font-semibold text-[#026381]">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <label className="flex items-start gap-2 text-xs leading-5 text-slate-600">
        <input
          id="verification-consent"
          name="verificationConsent"
          required
          type="checkbox"
          className="mt-0.5 h-4 w-4 accent-[#00a8e8]"
        />
        <span>
          I confirm that my information is accurate and consent to identity and fraud-prevention
          checks.
        </span>
      </label>
      <StepNote>
        Your submitted identity details are used only for account verification, fraud prevention,
        compliance, and supported service delivery.
      </StepNote>
    </>
  );
}

function StepNote({ children }) {
  return (
    <p className="rounded-lg border border-[#d9edf2] bg-[#f2fafc] px-3 py-2 text-[10px] leading-4 text-[#315a67]">
      {children}
    </p>
  );
}

function Brand() {
  return (
    <Link href="/" className="inline-flex w-fit items-center gap-3">
      <Image
        src="/image/SaveDost-initial.png"
        alt="SaveDost"
        width={40}
        height={40}
        className="h-9 w-9 object-contain"
        priority
      />
      <span>
        <span className="block text-xl font-extrabold tracking-tight text-[#0C3D4C]">
          Save<span className="text-[#00a8e8]">Dost</span>
        </span>
        <span className="block text-[8px] font-semibold uppercase tracking-[0.13em] text-[#315381]">
          Powered by FinUnique
        </span>
      </span>
    </Link>
  );
}

function Field({ icon: Icon, label, prefix, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] font-semibold text-[#202938]">{label}</span>
      <span className="relative flex items-center gap-2 rounded-xl border border-[#d8dee7] px-3 shadow-[0_2px_7px_rgba(15,23,42,0.03)] transition focus-within:border-[#00a8e8] focus-within:ring-2 focus-within:ring-[#00a8e8]/10">
        <Icon size={17} className="shrink-0 text-slate-500" />
        {prefix && (
          <span className="border-r border-slate-200 pr-2 text-xs font-semibold text-slate-700">
            {prefix}
          </span>
        )}
        {children}
      </span>
    </label>
  );
}

function PasswordToggle({ show, setShow }) {
  return (
    <button
      type="button"
      onClick={() => setShow((value) => !value)}
      aria-label={show ? "Hide password" : "Show password"}
      className="absolute right-3 text-slate-500"
    >
      {show ? <EyeOff size={17} /> : <Eye size={17} />}
    </button>
  );
}

function SocialOptions() {
  return (
    <>
      <div className="mt-4 flex items-center gap-4 text-[11px] text-slate-500">
        <span className="h-px flex-1 bg-slate-200" />
        <span>or continue with</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>
      <div className="mt-3 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Continue with Google"
          className="grid h-11 w-12 place-items-center rounded-xl border border-slate-200 bg-white text-lg font-extrabold text-[#4285f4] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:border-[#00a8e8] hover:bg-[#eefaff] hover:shadow-[0_8px_18px_rgba(0,168,232,.18)]"
        >
          G
        </button>
        <button
          type="button"
          aria-label="Continue with mobile"
          className="grid h-11 w-12 place-items-center rounded-xl border border-slate-200 bg-white text-[#026381] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:border-[#00a8e8] hover:bg-[#eefaff] hover:text-[#00a8e8] hover:shadow-[0_8px_18px_rgba(0,168,232,.18)]"
        >
          <Phone size={19} />
        </button>
        <button
          type="button"
          aria-label="Continue with Apple"
          className="grid h-11 w-12 place-items-center rounded-xl border border-slate-200 bg-white text-black shadow-sm transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:border-[#00a8e8] hover:bg-[#eefaff] hover:shadow-[0_8px_18px_rgba(0,168,232,.18)]"
        >
          <FaApple size={22} />
        </button>
      </div>
    </>
  );
}

function TrustItem({ icon: Icon, text }) {
  return (
    <span className="flex items-center gap-2">
      <Icon size={22} className="shrink-0 text-[#123f79]" />
      <span>{text}</span>
    </span>
  );
}

function LoginVisual() {
  return (
    <aside className="relative hidden overflow-hidden bg-[linear-gradient(155deg,#071f48,#123f73)] px-10 py-10 text-white lg:flex lg:flex-col">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1f568f]/35" />
      <div className="absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-[#0a2b58]/65" />
      <div className="relative z-10">
        <p className="text-xl font-bold">One App for</p>
        <p className="mt-1 text-2xl font-extrabold text-[#00c0ed]">All Your Payments</p>
        <span className="mt-5 block h-0.5 w-10 bg-[#b8e75c]" />
        <ul className="mt-6 space-y-4">
          {paymentServices.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm font-semibold">
              <Icon size={18} className="text-white/90" /> {label}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative z-10 mt-auto flex justify-center">
        <div className="relative h-56 w-36 overflow-hidden rounded-[30px] border-[7px] border-[#354d6c] bg-white shadow-2xl">
          <span className="absolute left-1/2 top-1 h-3 w-14 -translate-x-1/2 rounded-full bg-[#1c293a]" />
          <div className="flex h-full flex-col items-center justify-center text-center">
            <Image src="/image/SaveDost-initial.png" alt="" width={42} height={49} />
            <ShieldCheck size={56} className="mt-5 text-[#00a8e8]" fill="#e8f7fb" />
            <span className="mt-3 text-[9px] font-bold text-[#12396d]">
              Safe &amp; Simple Payments
            </span>
          </div>
        </div>
        <span className="absolute -bottom-3 right-6 h-12 w-12 rounded-full bg-[#f0b51d] shadow-lg" />
      </div>
    </aside>
  );
}

function SignupVisual() {
  return (
    <aside className="relative hidden overflow-hidden bg-[radial-gradient(circle_at_top_right,#dff5fa,transparent_55%),linear-gradient(180deg,#f7fdff,#edf8fa)] px-8 py-10 text-[#0b1931] lg:flex lg:flex-col">
      <div className="absolute -bottom-32 -right-20 h-64 w-64 rounded-full bg-[#ccecf3]" />
      <div className="relative mx-auto mt-5 grid h-44 w-44 place-items-center rounded-full border border-dashed border-[#91c776]">
        <span className="grid h-28 w-24 place-items-center rounded-[38%_38%_48%_48%] bg-[linear-gradient(145deg,#18b6ec,#026381)] shadow-[0_18px_30px_rgba(2,99,129,.25)]">
          <UserRound size={53} className="text-white" fill="white" />
        </span>
        <span className="absolute -right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#026381] shadow-md">
          <Landmark size={18} />
        </span>
        <span className="absolute -left-4 bottom-5 grid h-10 w-10 place-items-center rounded-full bg-white text-[#026381] shadow-md">
          <Phone size={18} />
        </span>
        <span className="absolute -bottom-3 right-6 grid h-11 w-11 place-items-center rounded-full bg-[#123f79] text-white shadow-lg">
          <Check size={22} strokeWidth={3} />
        </span>
      </div>
      <h2 className="relative mt-10 text-center text-xl font-extrabold">Why Join SaveDost?</h2>
      <ul className="relative mx-auto mt-6 w-full max-w-[210px] space-y-4">
        {reasons.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-3 text-xs font-medium leading-5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#dff3f7] text-[#026381]">
              <Icon size={17} />
            </span>
            {text}
          </li>
        ))}
      </ul>
    </aside>
  );
}

function LogInMark() {
  return (
    <span className="relative block h-4 w-4 border-r-2 border-white before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:border-b-2 before:border-l-2 before:border-white before:rotate-45" />
  );
}
