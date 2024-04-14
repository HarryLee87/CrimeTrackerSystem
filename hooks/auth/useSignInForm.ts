// "use client";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export const useSignInForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const supabase = createClientComponentClient();

//   const handleSignIn = async () => {
//     await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     router.refresh();
//   };

//   return {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleSignIn,
//     router,
//     supabase,
//   };
// };
