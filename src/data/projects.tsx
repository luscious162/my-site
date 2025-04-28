import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "oracle-detector",
    category: "AI Research",
    title: "Oracle Detector",
    src: "/assets/projects-screenshots/oracle-detector/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://ieeexplore.ieee.org/document/9004518",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            基于CNN的古文字目标检测研究
          </TypographyP>
          <TypographyP className="font-mono ">
            基于CNN模型构建的目标检测框架，采用卷积神经网络技术，对日本东京大学和京都大学的拓片材料进行识别，
            并进行分类，相关论文见下方链接，开源模型请访问我的github主页。
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">主要功能</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">古文字图像预处理与增强</li>
            <li className="font-mono">基于CNN的特征提取</li>
            <li className="font-mono">目标检测与定位</li>
            <li className="font-mono">字符分类与识别</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/oracle-detector/1.png`,
              `${BASE_PATH}/oracle-detector/2.png`,
              `${BASE_PATH}/oracle-detector/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "oracle-app",
    category: "Mobile App",
    title: "Oracle App",
    src: "/assets/projects-screenshots/oracle-app/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://github.com/yourusername/oracle-app",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            一款面向考古工作者的移动应用程序，集成了Oracle Detector的识别功能，并提供了便捷的拓片采集、管理和分析工具。
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">核心功能</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">拓片采集与图像处理</li>
            <li className="font-mono">实时字符识别</li>
            <li className="font-mono">数据管理与分类</li>
            <li className="font-mono">协作分享功能</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/oracle-app/1.png`,
              `${BASE_PATH}/oracle-app/2.png`,
              `${BASE_PATH}/oracle-app/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "qwen-quantization",
    category: "AI Development",
    title: "Qwen量化部署",
    src: "/assets/projects-screenshots/qwen/1.png",
    screenshots: ["1.png", "2.png"],
    live: "https://github.com/yourusername/qwen-quantization",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            针对通义千问大语言模型的量化优化与部署方案，实现了模型的轻量化，同时保持了较高的性能表现。
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">技术特点</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">模型量化优化</li>
            <li className="font-mono">推理性能优化</li>
            <li className="font-mono">部署方案设计</li>
            <li className="font-mono">性能评估与监控</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/qwen/1.png`,
              `${BASE_PATH}/qwen/2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Web Development",
    title: "个人作品集网站",
    src: "/assets/projects-screenshots/portfolio/1.png",
    screenshots: ["1.png"],
    live: "https://your-portfolio-url.com",
    github: "https://github.com/yourusername/portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            基于Next.js和React构建的个人作品集展示网站，采用现代化的设计理念和交互效果。
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">网站特点</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">响应式设计，适配多端显示</li>
            <li className="font-mono">流畅的动画过渡效果</li>
            <li className="font-mono">优化的性能表现</li>
            <li className="font-mono">清晰的项目展示结构</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/1.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
