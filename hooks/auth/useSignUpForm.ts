// "use client";

// import { useRouter } from "next/navigation";
// import { useSignInForm } from "./useSignInForm";
// import { useState } from "react";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// export const useSignUpForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const router = useRouter();

//   const supabase = createClientComponentClient();

//   const handleSignUp = async () => {
//     await supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         emailRedirectTo: `${location.origin}/auth/callback`,
//       },
//     });
//     router.refresh();
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//     setUsername("");
//   };

//   return {
//     email,
//     setEmail,
//     username,
//     setUsername,
//     password,
//     setPassword,
//     confirmPassword,
//     setConfirmPassword,
//     router,
//     supabase,
//     handleSignUp,
//   };
// };
