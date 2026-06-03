"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Skriv dit navn"),
  phone: z.string().min(8, "Skriv dit telefonnummer"),
  email: z.string().email("Gyldig e-mail påkrævet"),
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-[1.5px] text-muted-foreground mb-1.5">{siteConfig.contact.form.name}</label>
          <input {...register("name")} className="form-input" placeholder="Anders Jensen" />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs tracking-[1.5px] text-muted-foreground mb-1.5">{siteConfig.contact.form.phone}</label>
          <input type="tel" {...register("phone")} className="form-input" placeholder="40 88 65 65" />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[1.5px] text-muted-foreground mb-1.5">{siteConfig.contact.form.email}</label>
        <input type="email" {...register("email")} className="form-input" placeholder="din@email.dk" />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-xs tracking-[1.5px] text-muted-foreground mb-1.5">{siteConfig.contact.form.message}</label>
        <textarea 
          {...register("message")} 
          rows={6} 
          className="form-textarea" 
          placeholder="F.eks. spørgsmål om holdstart, trailer, eller noget andet..." 
        />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full mt-2 h-14 rounded-2xl bg-primary text-white font-medium text-base hover:bg-primary-hover active:scale-[0.985] transition-all disabled:opacity-70"
      >
        {isSubmitting ? "Sender besked..." : siteConfig.contact.form.submit}
      </Button>

      <p className="text-center text-xs text-muted-foreground pt-1">
        Jeg svarer normalt inden for 24 timer på hverdage. Ingen forpligtelse.
      </p>
    </form>
  );
}
