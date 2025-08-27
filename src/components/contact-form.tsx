"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MailPlus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TypeAnimation } from "react-type-animation";
import z from "zod";

import { contactFormSchema } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const t = useTranslations("contact-form");
  const [success, setSuccess] = useState(false);
  const [greenText, setGreenText] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });
  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (values: ContactFormValues) => {
    // // DEV: sim req
    // const p = new Promise<{ ok: boolean }>((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       ok: true,
    //     });
    //   }, 2000);
    // });
    // const res = await p;

    const res = await fetch("/api/send", {
      body: JSON.stringify(values),
      method: "POST",
    });

    if (!res.ok) {
      console.error("Failed to send email. TODO: toast");
      return;
    }

    setSuccess(true);
    form.reset();

    console.log("Email sent successfully. TODO: STUFF");
  };

  return (
    <div id="contact" className="flex flex-col gap-10">
      <div className="relative">
        <h2 className={`text-title-m ${greenText ? "text-green-1" : ""}`}>
          <TypeAnimation
            key={success ? "playing" : "paused"}
            preRenderFirstString
            cursor={success}
            speed={80}
            className={success ? "after:!content-['\\_']" : ""}
            sequence={
              success
                ? [
                    t("title"),
                    "",
                    200,
                    () => setGreenText(true),
                    t("success-msg"),
                    6000,
                    () => {
                      setSuccess(false);
                      setGreenText(false);
                    },
                  ]
                : [t("title")]
            }
          />
        </h2>
      </div>
      <Form {...form}>
        <form
          className={cn(
            "flex flex-col md:flex-row gap-2.5 md:gap-10",
            isSubmitting && "opacity-50 pointer-events-none",
          )}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2.5 flex-1">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("name")} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder={t("email")} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="tel" placeholder={t("phone")} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="address"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder={t("address")} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col flex-1 relative gap-[0.9rem]">
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col flex-1">
                  <FormControl>
                    <Textarea
                      className="flex-1 min-h-30"
                      placeholder={t("message")}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className="h-12 justify-between text-paragraph-m cursor-pointer w-[calc(100%+1.5rem)] bottom-[1px] -mb-3 py-3 rounded-none -mx-3"
              variant="ghost"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("sending") : t("submit")}
              <MailPlus />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
