import validator from "validator";
import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2).max(100).nonempty(),
  email: z.email(),
  phone: z
    .string()
    // validator should run only if value is not empty
    .refine(
      (value) =>
        !value || validator.isMobilePhone(value, "any", { strictMode: true }),
    )
    .optional(),
  address: z.string().optional(),
  message: z.string().nonempty(),
});
