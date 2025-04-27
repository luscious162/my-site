"use client";

import { useEffect } from "react";

export default function NewsPage() {
  useEffect(() => {
    // Redirect to people.com.cn
    window.location.href = "http://www.people.com.cn/";
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        {/* Replaced ' with &apos; to fix react/no-unescaped-entities ESLint error */}
        <h1 className="text-2xl font-bold mb-4">Redirecting to People&apos;s Daily...</h1>
        <p className="mb-4">If you are not redirected automatically, click the link below:</p>
        <a
          href="http://www.people.com.cn/"
          className="text-blue-500 hover:text-blue-700 underline"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
        >
          www.people.com.cn
        </a>
      </div>
    </div>
  );
}
