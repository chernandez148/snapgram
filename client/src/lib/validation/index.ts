import * as z from "zod"

export const SignupValidation = z.object({
    email: z.string().email(),
    full_name: z.string().min(2, {
        message: "Full name must be at least 2 characters"
    }),
    username: z.string().min(2, {
        message: "Username must be at leats 2 characters"

    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters"
    }).max(25),
})