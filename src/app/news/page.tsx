"use client";

import { useEffect } from "react";

export default function NewsPage() {
  useEffect(() => {
    // Redirect to people.com.cn
    window.location.href = "http://www.people.com.cn/";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to People's Daily...</h1>
        <p className="mb-4">If you are not redirected automatically, click the link below:</p>
        <a 
          href="http://www.people.com.cn/" 
          className="text-blue-500 hover:text-blue-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.people.com.cn
        </a>
      </div>
    </div>
  );
} 