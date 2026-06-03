"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/data/siteConfig";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const bookingSchema = z.object({
  name: z.string().min(2, "Skriv venligst dit fulde navn"),
  phone: z.string().min(8, "Ugyldigt telefonnummer"),
  email: z.string().email("Indtast en gyldig e-mailadresse"),
  paymentForm: z.enum(["fuld", "afdrag"]),
  holdstart: z.string().min(1, "Vælg en holdstart"),
  special: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const { upcomingCar } = siteConfig.booking;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      paymentForm: "fuld",
      holdstart: upcomingCar.dates[0],
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    // In production: send to your backend / Resend / Formspree / Gondrive etc.
    // For now we simulate success + show beautiful toast.
    console.log("Booking submission (SSOT ready):", data);

    await new Promise((r) => setTimeout(r, 650)); // fake network

    toast.success(siteConfig.booking.form.success, {
      duration: 6000,
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Navn</label>
          <input {...register("name")} className="form-input" placeholder="Dit fulde navn" />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="form-label">Telefon</label>
          <input {...register("phone")} className="form-input" placeholder="40 88 65 65" />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="form-label">E-mail</label>
        <input {...register("email")} type="email" className="form-input" placeholder="din@email.dk" />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">{siteConfig.booking.form.fields.paymentForm.label}</label>
          <select {...register("paymentForm")} className="form-select">
            {siteConfig.booking.form.fields.paymentForm.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">{siteConfig.booking.form.fields.holdstart.label}</label>
          <select {...register("holdstart")} className="form-select">
            {upcomingCar.dates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
          {errors.holdstart && <p className="text-xs text-red-600 mt-1">{errors.holdstart.message}</p>}
        </div>
      </div>

      <div>
        <label className="form-label">{siteConfig.booking.form.fields.special.label}</label>
        <textarea
          {...register("special")}
          rows={4}
          className="form-textarea resize-y min-h-[100px]"
          placeholder={siteConfig.booking.form.fields.special.placeholder}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 text-base rounded-2xl bg-primary hover:bg-primary-hover text-white font-medium"
      >
        {isSubmitting ? "Sender..." : siteConfig.booking.form.submit}
      </Button>

      <p className="text-[11px] text-center text-muted-foreground">
        Ved at sende accepterer du, at vi kontakter dig vedr. din tilmelding. Depositum skal indbetales inden 5 dage.
      </p>
    </form>
  );
}
