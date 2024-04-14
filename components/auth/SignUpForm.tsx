"use client";

import { createAccount } from "@/store/actions/signUpActions";
import { useFormState } from "react-dom";
import Input from "../layouts/Input";
import Button from "../layouts/Button";
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function SignUpForm() {

  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="relative flex justify-center h-screen bg-gray-100">
      <div className="w-full pt-20">
        <div className="bg-white p-8 shadow-md w-full max-w-sm m-auto flex flex-col items-center justify-center ">
          <div className="mb-6">
            <span className="font-semibold italic text-2xl mb-4">
              CrimeTracker
            </span>
          </div>

          <form action={dispatch} className="w-full max-w-xs mt-4">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              errors={state?.fieldErrors.email}
            />
            <Input
              name="username"
              type="text"
              placeholder="Username"
              required
              errors={state?.fieldErrors.username}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
              minLength={PASSWORD_MIN_LENGTH}
              maxLength={PASSWORD_MAX_LENGTH}
              errors={state?.fieldErrors.password}
            />
            <Input
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              required
              minLength={PASSWORD_MIN_LENGTH}
              maxLength={PASSWORD_MAX_LENGTH}
              errors={state?.fieldErrors.confirm_password}
            />
            <Button text="Sugn Up" />
            {/* <button
              onClick={handleSignUp}
              className="w-full bg-red-500 text-white p-2 mt-4 rounded-md"
            >
              Sign Up
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}
