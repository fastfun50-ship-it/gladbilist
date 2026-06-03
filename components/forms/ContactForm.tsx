"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10, "Skriv lidt mere i din besked"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Contact form:", data);
    await new Promise((r) => setTimeout(r, 500));
    toast.success(siteConfig.contact.form.success);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Navn</label>
          <input {...register("name")} className="form-input" />
          {errors.name && <p className="text-xs text-red-600 mt-1">Skriv dit navn</p>}
        </div>
        <div>
          <label className="form-label">E-mail</label>
          <input type="email" {...register("email")} className="form-input" />
          {errors.email && <p className="text-xs text-red-600 mt-1">Gyldig e-mail påkrævet</p>}
        </div>
      </div>
      <div>
        <label className="form-label">{siteConfig.contact.form.message}</label>
        <textarea {...register("message")} rows={5} className="form-textarea" placeholder="Hvordan kan jeg hjælpe dig?" />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full rounded-2xl h-12 bg-foreground text-white">
        {isSubmitting ? "Sender..." : siteConfig.contact.form.submit}
      </Button>
    </form>
  );
}
