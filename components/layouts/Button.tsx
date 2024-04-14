"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-full bg-red-500 text-white p-2 mt-4 rounded-md"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
