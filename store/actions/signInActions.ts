"use server";
import { z } from "zod";
import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(PASSWORD_MIN_LENGTH)
    .max(PASSWORD_MAX_LENGTH)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  // console.log(formData.get("email"), formData.get("password"));
  // console.log('I run in the server');
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
