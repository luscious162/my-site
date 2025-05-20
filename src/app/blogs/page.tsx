"use client";

import { BlurIn, BoxReveal } from "@/components/reveal-animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BLOG_POSTS, CATEGORIES } from "@/data/blog-posts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  return (
    <section className={cn("min-h-screen w-full pt-24 pb-16")}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <BoxReveal width="100%">
            <h1 className={cn(
              "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
            )}>
              BLOG
            </h1>
          </BoxReveal>
          <BlurIn>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              你准备在这待多久，我该准备一杯咖啡，还是一生
            </p>
          </BlurIn>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {CATEGORIES.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col dark:bg-black/20 backdrop-blur-sm border-border group">
                <Link href={`/blogs/${post.id}`} className="relative h-48 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary/80 text-primary-foreground px-2 py-1 rounded text-xs">
                    {post.category}
                  </div>
                </Link>
                <CardHeader className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <p className="text-xs text-muted-foreground">{post.readTime}</p>
                  </div>
                  <Link href={`/blogs/${post.id}`} className="hover:underline">
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </Link>
                  <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                </CardHeader>
                <CardFooter className="border-t pt-4">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-sm text-muted-foreground">{post.author}</p>
                    <Link href={`/blogs/${post.id}`}>
                      <Button variant="outline" size="sm">
                        阅读更多
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 