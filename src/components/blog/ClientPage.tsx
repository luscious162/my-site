"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlurIn, BoxReveal } from "@/components/reveal-animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BlogPost } from "@/data/blog-posts";

interface ClientPageProps {
  post: BlogPost | null;
}

export default function ClientPage({ post }: ClientPageProps) {
  if (!post) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16">
        <h1 className="text-2xl mb-4">Blog post not found</h1>
        <Link href="/blogs">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <section className={cn("min-h-screen w-full pt-24 pb-16")}>
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="mb-6">
          <Link href="/blogs">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <BoxReveal width="100%">
            <h1 className={cn(
              "bg-clip-text text-3xl text-left text-transparent md:text-5xl",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
            )}>
              {post.title}
            </h1>
          </BoxReveal>
        </div>

        <BlurIn>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <span className="mx-2">•</span>
              <span className="text-sm text-muted-foreground">{post.readTime} read</span>
            </div>
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </BlurIn>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[300px] md:h-[400px] w-full mb-8 overflow-hidden rounded-xl"
        >
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />

        <div className="mt-12 pt-6 border-t">
          <p className="text-sm text-muted-foreground">Written by {post.author}</p>
        </div>
      </div>
    </section>
  );
} 