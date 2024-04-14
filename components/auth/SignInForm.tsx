"use client";

import Link from "next/link";
import { useSignInForm } from "@/hooks/auth/useSignInForm";
import FormInput from "../layouts/Input";
import FormBtn from "../layouts/Button";
import { useFormState } from "react-dom";
import { login } from "@/store/actions/signInActions";
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function SignInForm() {
  // const { email, setEmail, password, setPassword, handleSignIn } =
  //   useSignInForm();
  const [state, dispatch] = useFormState(login, null);

  return (
    <div className="relative flex justify-center h-screen bg-gray-100">
      <div className="w-full pt-20">
        <div className="bg-white p-8 shadow-md w-full max-w-sm m-auto flex flex-col items-center justify-center ">
          <div className="mb-6">
            <span className="font-semibold italic text-2xl mb-4">
              CrimeTracker
            </span>
          </div>

          <form action={dispatch} className="w-full max-w-xs">
            <FormInput name="email" type="email" placeholder="Email" required errors={state?.fieldErrors.email} />
            <FormInput
              name="password"
              type="password"
              placeholder="Password"
              required
              minLength={PASSWORD_MIN_LENGTH}
              maxLength={PASSWORD_MAX_LENGTH}
              errors={state?.fieldErrors.password}
            />
            {/* <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-neutral-400"
              />
            </div>
            <div className="relative mt-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-neutral-400"
              />
            </div> */}
            <FormBtn text="Log In" />
            {/* <button
              className="w-full bg-red-500 text-white p-2 mt-4 rounded-md"
              onClick={handleSignIn}
            >
              Sign In
            </button> */}
          </form>

          <div className="flex flex-col items-center justify-center py-3">
            <button className="text-sm text-gray-600 p-4">
              Forget Password?
            </button>
            <p className="text-sm text-secondary_text mt-2">
              Not a member yet?{" "}
              <Link
                href="/auth/signup"
                className="text-sm text-red-500 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
