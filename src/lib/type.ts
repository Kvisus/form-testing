import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match", //message if error
    path: ["confirmPassword"], //connects to confirmPassword
  });

export type SignUpSchema = z.infer<typeof signUpSchema>; //can be used in useForm
