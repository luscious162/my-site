export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  author: string;
  content?: string;
}

// Sample blog post data
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "学习人工智能的五个基本步骤",
    description: "从零开始学习AI和机器学习的完整指南",
    date: "2024-05-15",
    readTime: "5 min",
    image: "/assets/nav-link-previews/skills.png",
    category: "AI & ML",
    author: "Liu Kanshan",
    content: `
      <p>人工智能(AI)技术正在迅速改变我们生活的方方面面，从简单的智能手机功能到复杂的自动驾驶系统。学习AI可能看起来很复杂，但通过以下五个基本步骤，任何人都可以开始这段令人兴奋的旅程。</p>
      
      <h2>第一步：掌握编程基础</h2>
      <p>Python是AI领域最流行的编程语言，因为它语法简单且拥有丰富的机器学习库。首先，你应该学习Python的基本语法、数据结构和函数编程概念。重点关注NumPy和Pandas这两个用于数据处理的库。</p>
      
      <h2>第二步：学习数学基础</h2>
      <p>机器学习依赖于几个数学领域：线性代数（向量和矩阵操作）、微积分（优化算法的基础）、概率论和统计（数据分析和模型评估）。不需要成为数学专家，但理解这些概念对于理解算法工作原理至关重要。</p>
      
      <h2>第三步：理解机器学习基础</h2>
      <p>学习监督学习、非监督学习和强化学习的基本概念。了解常见算法如线性回归、决策树、神经网络等的工作原理。使用Scikit-learn库实现这些算法是实践学习的好方法。</p>
      
      <h2>第四步：深入研究深度学习</h2>
      <p>深度学习是AI的一个强大子领域。学习神经网络架构和深度学习框架如TensorFlow或PyTorch。通过实际项目如图像识别或自然语言处理来应用这些知识。</p>
      
      <h2>第五步：持续实践和探索</h2>
      <p>参与Kaggle等平台的竞赛，构建个人项目，阅读最新研究论文，加入AI社区。实践是掌握AI技能的最佳方式，而持续学习对于跟上这个快速发展的领域至关重要。</p>
      
      <p>学习AI是一段旅程，而不是目的地。每个人的学习路径可能不同，但重要的是持续学习和实践。通过这五个步骤，你将建立坚实的基础，为AI领域的更高级探索做好准备。</p>
    `
  },
  {
    id: 2,
    title: "React中的状态管理实践",
    description: "比较React中不同的状态管理解决方案，从Context API到Redux",
    date: "2024-05-10",
    readTime: "7 min",
    image: "/assets/nav-link-previews/projects.png",
    category: "Web Development",
    author: "Liu Kanshan",
    content: `
      <p>在React应用程序开发中，状态管理是一个核心概念，它决定了应用程序的数据如何流动和更新。随着应用程序复杂性的增加，选择合适的状态管理解决方案变得越来越重要。本文将比较几种流行的React状态管理方法。</p>
      
      <h2>React内置状态管理</h2>
      <p>React提供了useState和useReducer钩子来管理组件级状态。对于简单应用，这通常足够了。useState适用于独立的状态值，而useReducer更适合复杂的状态逻辑。</p>
      
      <h2>Context API</h2>
      <p>React的Context API提供了一种在组件树中共享状态的方法，无需通过props层层传递。它非常适合中等规模的应用程序，或需要共享主题、用户认证等全局状态的情况。</p>
      
      <h2>Redux</h2>
      <p>Redux是最知名的状态管理库之一，它提供了一个中央存储和严格的数据流。尽管配置较为复杂，但Redux在大型应用中表现出色，特别是在处理复杂状态逻辑和调试方面。</p>
      
      <h2>Zustand</h2>
      <p>Zustand是一个轻量级状态管理库，它简化了Redux的概念，提供了更简洁的API。它不需要Provider包装器，减少了模板代码，同时保持了良好的性能。</p>
      
      <h2>Jotai和Recoil</h2>
      <p>这些原子化状态管理库采用了不同的方法，将状态分解为小的、可组合的单元（原子）。这种方法提供了出色的性能和灵活性，特别适合需要细粒度重新渲染控制的应用。</p>
      
      <h2>如何选择？</h2>
      <p>选择状态管理解决方案应基于项目规模、团队经验和具体需求：</p>
      <ul>
        <li>小型应用：使用React的内置状态管理</li>
        <li>中型应用：考虑Context API或Zustand</li>
        <li>大型应用：Redux、Recoil或Jotai可能更合适</li>
      </ul>
      
      <p>最佳实践是从简单开始，随着应用程序的增长和复杂性的增加，再采用更复杂的解决方案。无论选择哪种方法，保持一致性和良好的文档记录都是确保可维护性的关键。</p>
    `
  },
  {
    id: 3,
    title: "3D技术在Web开发中的应用",
    description: "如何使用Three.js和React Three Fiber创建交互式3D体验",
    date: "2024-05-05",
    readTime: "8 min",
    image: "/assets/nav-link-previews/blog.png",
    category: "3D & Animation",
    author: "Liu Kanshan",
    content: `
      <p>随着WebGL技术的发展和浏览器性能的提升，在Web应用中集成3D体验变得越来越流行。这些技术不仅可以提升用户界面的视觉吸引力，还能创造出全新的交互方式。本文将探讨如何使用Three.js和React Three Fiber在Web项目中实现引人入胜的3D效果。</p>
      
      <h2>Three.js基础</h2>
      <p>Three.js是一个强大的JavaScript库，它简化了WebGL的使用。通过Three.js，开发者可以创建各种3D场景，包括几何体、材质、光照和相机控制。要开始使用Three.js，首先需要设置一个基本场景：</p>
      <pre><code>
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
      </code></pre>
      
      <h2>React Three Fiber</h2>
      <p>对于React开发者，React Three Fiber提供了一种更符合React思维模式的方式来使用Three.js。它是一个React渲染器，允许我们使用声明式语法创建和控制3D场景：</p>
      <pre><code>
function Box(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  
  return (
    &lt;mesh
      {...props}
      ref={mesh}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    &gt;
      &lt;boxGeometry args={[1, 1, 1]} /&gt;
      &lt;meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /&gt;
    &lt;/mesh&gt;
  );
}
      </code></pre>
      
      <h2>创建交互式3D体验</h2>
      <p>要创建真正引人入胜的3D体验，我们需要考虑以下几点：</p>
      <ul>
        <li>性能优化：使用适当的LOD（细节层次）技术和模型优化</li>
        <li>响应式设计：确保3D内容在不同设备上都能正常显示</li>
        <li>用户交互：实现直观的控制方式，如旋转、缩放和点击</li>
        <li>物理模拟：使用如cannon.js等物理引擎添加现实感</li>
      </ul>
      
      <h2>案例研究</h2>
      <p>从产品展示（如3D产品预览）到交互式数据可视化和游戏，3D技术在Web中的应用非常广泛。许多知名品牌已经在其网站中集成了3D元素，以提供更丰富的用户体验。</p>
      
      <p>虽然3D技术可以大大增强Web体验，但也需要考虑加载时间和可访问性。务必提供适当的后备选项，并确保3D内容不会干扰网站的核心功能。随着技术的不断发展，我们可以期待在Web上看到更多创新的3D应用。</p>
    `
  },
  {
    id: 4,
    title: "容器化开发环境初探",
    description: "使用Docker简化开发环境设置和部署流程",
    date: "2024-04-28",
    readTime: "6 min",
    image: "/assets/nav-link-previews/contact.png",
    category: "DevOps",
    author: "Liu Kanshan",
    content: `
      <p>在现代软件开发中，"在我的机器上能运行"已经不再是一个有效的借口。容器化技术，特别是Docker，已经彻底改变了我们设置开发环境和部署应用程序的方式。本文将探讨如何使用Docker来简化开发流程并提高团队协作效率。</p>
      
      <h2>Docker基础</h2>
      <p>Docker是一个开源平台，允许开发者将应用程序及其依赖项打包到一个标准化的单元（容器）中。容器是轻量级的，包含运行应用程序所需的一切：代码、运行时、系统工具和库。这确保了应用程序在任何环境中都能以相同的方式运行。</p>
      
      <h2>开发环境容器化的好处</h2>
      <ul>
        <li>一致性：消除"在我机器上能运行"的问题</li>
        <li>隔离：防止依赖冲突</li>
        <li>快速设置：新团队成员可以快速开始工作</li>
        <li>版本控制：环境配置可以像代码一样进行版本控制</li>
        <li>资源效率：比虚拟机更轻量</li>
      </ul>
      
      <h2>基本Docker工作流</h2>
      <p>一个典型的Docker工作流程包括：</p>
      <ol>
        <li>创建Dockerfile，定义应用程序环境</li>
        <li>构建Docker镜像</li>
        <li>运行容器</li>
        <li>开发和测试</li>
        <li>推送镜像到仓库</li>
        <li>在生产环境中部署</li>
      </ol>
      
      <h2>Docker Compose</h2>
      <p>对于多容器应用，Docker Compose提供了一种简单方法来定义和运行多个容器。使用docker-compose.yml文件，你可以配置应用程序的服务、网络和卷，然后使用单个命令创建和启动所有服务。</p>
      
      <h2>开发环境最佳实践</h2>
      <p>以下是一些使用Docker进行开发的最佳实践：</p>
      <ul>
        <li>使用卷挂载进行持久化和开发</li>
        <li>实现热重载以提高开发效率</li>
        <li>为开发、测试和生产使用不同的配置</li>
        <li>优化Docker镜像大小和构建时间</li>
        <li>注意安全性，不在生产镜像中包含开发工具</li>
      </ul>
      
      <p>容器化不仅改变了我们开发和部署软件的方式，还促进了DevOps文化的发展。通过采用Docker等工具，团队可以实现更高效的协作、更快的迭代周期和更可靠的部署。随着技术的不断成熟，容器化已成为现代软件开发工作流程的核心部分。</p>
    `
  },
  {
    id: 5,
    title: "全栈开发者路线图",
    description: "2024年成为全栈开发者需要掌握的技能和工具",
    date: "2024-04-20",
    readTime: "10 min",
    image: "/assets/nav-link-previews/landing.png",
    category: "Career",
    author: "Liu Kanshan",
    content: `
      <p>全栈开发者是技术领域中最受欢迎的角色之一，因为他们能够处理项目的前端和后端部分。虽然掌握整个技术栈是一项挑战，但有一个结构化的学习路径可以帮助你达到这个目标。以下是2024年成为全栈开发者的路线图。</p>
      
      <h2>基础知识</h2>
      <p>无论你选择哪个技术栈，这些基础知识都是必不可少的：</p>
      <ul>
        <li>HTML, CSS和JavaScript：web开发的基础</li>
        <li>计算机科学基础：数据结构、算法和设计模式</li>
        <li>版本控制：Git和GitHub</li>
        <li>命令行和Shell脚本</li>
        <li>网络基础：HTTP/HTTPS、REST API等</li>
      </ul>
      
      <h2>前端技能</h2>
      <p>2024年的前端开发已经远远超出了基本的HTML和CSS：</p>
      <ul>
        <li>现代JavaScript (ES6+)和TypeScript</li>
        <li>React, Vue或Angular等框架</li>
        <li>状态管理（Redux, Zustand, Pinia等）</li>
        <li>响应式设计和CSS框架（Tailwind, Bootstrap）</li>
        <li>Web Components和微前端</li>
        <li>前端测试（Jest, Cypress）</li>
      </ul>
      
      <h2>后端技能</h2>
      <p>选择一种后端语言和框架专注学习：</p>
      <ul>
        <li>Node.js (Express, Nest.js)或Deno</li>
        <li>Python (Django, FastAPI)</li>
        <li>Java (Spring)</li>
        <li>C# (.NET)</li>
        <li>Go, Rust等更现代的选择</li>
      </ul>
      
      <h2>数据库知识</h2>
      <p>理解不同类型的数据库及其用例：</p>
      <ul>
        <li>关系型数据库：PostgreSQL, MySQL</li>
        <li>NoSQL数据库：MongoDB, Redis</li>
        <li>图数据库：Neo4j</li>
        <li>ORM和查询语言</li>
      </ul>
      
      <h2>DevOps和部署</h2>
      <p>现代全栈开发者需要了解如何部署和维护应用：</p>
      <ul>
        <li>容器化：Docker和Kubernetes</li>
        <li>CI/CD管道</li>
        <li>云服务：AWS, Azure, GCP</li>
        <li>服务器管理和监控</li>
      </ul>
      
      <h2>进阶主题</h2>
      <ul>
        <li>Web安全和认证</li>
        <li>性能优化</li>
        <li>渐进式Web应用（PWA）</li>
        <li>WebSocket和实时通信</li>
        <li>无服务器架构</li>
        <li>AI和机器学习集成</li>
      </ul>
      
      <h2>学习策略</h2>
      <p>成为全栈开发者是一段旅程，而不是目的地。以下是一些建议：</p>
      <ul>
        <li>构建项目：应用你学到的知识</li>
        <li>参与开源：向现有项目贡献</li>
        <li>跟随教程，但不要只复制粘贴</li>
        <li>找一个导师或加入社区</li>
        <li>保持学习的持续性，而不是急于掌握所有内容</li>
      </ul>
      
      <p>虽然这个路线图看起来很广泛，但记住，你不需要立即掌握所有技能。从基础开始，逐步构建你的技能组合，专注于一个领域，然后扩展到其他领域。在技术快速发展的2024年，持续学习的能力比掌握特定工具更为重要。祝你在全栈开发者的旅程中取得成功！</p>
    `
  },
  {
    id: 6,
    title: "Next.js 14的新特性解析",
    description: "探索Next.js 14带来的性能优化和新功能",
    date: "2024-04-15",
    readTime: "8 min",
    image: "/assets/nav-link-previews/about.png",
    category: "Web Development",
    author: "Liu Kanshan",
    content: `
      <p>Next.js已经成为React开发中最受欢迎的框架之一，而其第14版带来了许多令人兴奋的新特性和改进。本文将深入探讨Next.js 14的主要更新，以及它们如何改善开发体验和应用性能。</p>
      
      <h2>Turbopack的改进</h2>
      <p>Next.js 14继续改进Turbopack，这是Webpack的Rust驱动替代品。在新版本中，Turbopack在开发模式下提供了更快的刷新速度和更好的内存使用率。虽然它仍处于beta阶段，但性能提升已经非常显著，特别是在大型项目中。</p>
      
      <h2>Server Actions稳定版</h2>
      <p>最令人期待的功能之一是Server Actions的稳定版发布。这个功能允许你直接从客户端组件调用服务器上的函数，简化了表单处理和数据变更操作。例如：</p>
      <pre><code>
// app/actions.js
'use server';

export async function submitForm(formData) {
  const name = formData.get('name');
  await saveToDatabase(name);
  return { success: true };
}

// 在客户端组件中使用
import { submitForm } from './actions';

function MyForm() {
  return (
    &lt;form action={submitForm}&gt;
      &lt;input name="name" /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}
      </code></pre>
      
      <h2>部分预渲染（Partial Prerendering）</h2>
      <p>Next.js 14引入了部分预渲染功能，这是一种混合渲染方式，允许页面的静态部分被预渲染，而动态部分则在请求时渲染。这提供了更好的性能和用户体验，特别是对于包含既有静态内容又有动态内容的页面。</p>
      
      <h2>统一的路由处理方式</h2>
      <p>新版本统一了路由处理方式，通过新的Route Handlers API简化了API路由的创建。现在，在App Router中创建API端点变得更加直观，并且与页面路由有更好的一致性。</p>
      
      <h2>本地组件开发</h2>
      <p>通过改进的编辑器集成和新的开发工具，Next.js 14使组件开发变得更加本地化和直观。这包括更好的错误报告、组件预览和状态检查能力。</p>
      
      <h2>内置SEO优化</h2>
      <p>元数据API现在提供了更强大的SEO工具，包括简化的OG图像生成、改进的元数据管理和更好的搜索引擎爬虫支持。这使得创建SEO友好的应用变得更加简单。</p>
      
      <h2>迁移与升级</h2>
      <p>对于现有Next.js项目，升级到版本14相对简单。大多数API保持兼容，同时提供了详细的迁移指南帮助开发者过渡。主要注意事项包括Node.js版本要求（现在需要16.14或更高版本）和一些废弃API的替换。</p>
      
      <p>Next.js 14代表了这个流行框架的重要进步，特别是在性能、开发体验和渲染灵活性方面。随着Web开发继续向更快、更具交互性的应用发展，Next.js提供了强大的工具集来构建现代Web体验。无论你是现有Next.js开发者还是正在考虑采用这个框架，版本14都提供了令人信服的理由来探索其新特性。</p>
    `
  }
];

// Categories for filtering
export const CATEGORIES = [
  "All",
  "AI & ML",
  "Web Development",
  "3D & Animation",
  "DevOps",
  "Career"
]; 