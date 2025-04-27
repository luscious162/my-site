"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { BlurIn } from "../reveal-animations";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import useTranslation from "@/hooks/useTranslation";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className={cn("h-[100vh] w-full relative pt-16 md:pt-24")}
    >
      <div
        className={cn(
          "h-full",
          "flex flex-col justify-center items-center",
          "md:px-40"
        )}
      >
        <BlurIn className="w-full flex flex-col px-8 sm:px-16 md:px-0 xl:px-40 items-center">
          <h2
            className={cn(
              "text-4xl text-transparent text-slate-800",
              "cursor-default text-edge-outline font-display sm:text-7xl md:text-6xl"
            )}
          >
            {t("contact.title")}
          </h2>
          <p
            className={cn(
              "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
              "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text"
            )}
          >
            {t("contact.subtitle")}
          </p>
          <form 
            action="https://getform.io/f/bdrnjmwb" 
            method="POST" 
            encType="multipart/form-data"
            className="flex flex-col gap-3 mt-8 w-full sm:w-1/2"
          >
            <div className="grid gap-2">
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input id="name" name="name" placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input id="email" name="email" placeholder="john@example.com" type="email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">{t("contact.message")}</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                name="message"
                className="h-40"
              />
            </div>
            <Button type="submit" className="mt-4 w-full">{t("contact.send")}</Button>
          </form>
        </BlurIn>
      </div>
    </section>
  );
};

export default ContactSection;
