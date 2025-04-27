const config = {
  title: "Liu Kanshan | Artificial Intelligence undergraduate",
  description: {
    long: "Explore the portfolio of Liukanshan, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Liukanshan, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Liu Kanshan",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Oracle Detector",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Liu Kanshan",
  email: "liuzhweishan99@gmail.com",
  site: "https://liukanshan.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/yotilian",
    linkedin: "https://www.linkedin.com/in/%E5%80%BC%E5%AE%8F-%E5%88%98-9832a4362/",
    instagram: "https://www.instagram.com/yaotianliu11",
    facebook: "https://www.facebook.com/profile.php?id=61572280861439",
    github: "https://github.com/luscious162",
  },
};
export { config };
