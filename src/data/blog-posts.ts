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
    title: "关于离散数学的碎碎念",
    description: "写于一个平凡的下午",
    date: "2025-05-04",
    readTime: "5 min",
    image: "/assets/nav-link-previews/skills.png",
    category: "AI & ML",
    author: "Liu Kanshan",
    content: `
      <p>下午正一门心思铺在一门课叫《离散数学》，突然想起上个学期我还没学这门课时，第一次听说"离散数学"时写的随笔，为作纪念，附在下文。</p>

      <p>下午机缘巧合偶然听说有一门课叫《离散数学》，我当即对这个奇怪的词组肃然起敬，一字一顿吟哦许久试图进行训诂，无果。</p>

      <p>晚上又想起这门课，心里很不是滋味，觉得这名字不好，把师生情谊同窗友谊都上淡了。似乎一进教室就要高高抛起学士帽，要捏着护照转头泪眼模糊地回望海关，要听见告别厅里孝子贤孙声嘶力竭的哭声…</p>
      
      <p>在绝对的离散面前似乎年代和日期也失去了意义，大陆和小岛开始对立和隔绝，孟姜女正在哭倒长城，山无棱天地合，宇宙也分崩离析，时间的尽头漂浮着一个茫然的奇点。</p>
      
      <p>遂反思人生聚合太难离散太易，我不该对身边人那么苛责，不知哪天就是一辈子见的最后一面。</p>
     
      <p>想到这些伤心得一页书也读不下去，忍不住拿起手机查查什么是“离散数学”；</p>
      
      <p>才发现完全不是我想的那些，我才松了一口气，又感到安慰起来。居然我小时候颇感兴趣的四色猜想也属于此，让人想起被切成四块的披萨。那不错。</p>
    `
  },
  {
    id: 2,
    title: "沉沦于遐想",
    description: "一点身在他乡的遐思",
    date: "2024-05-10",
    readTime: "7 min",
    image: "/assets/nav-link-previews/projects.png",
    category: "Career",
    author: "liukanshan",
    content: `
      <p>明明古诗默写题于我早已式微，脑海却在异国的节日气氛里不断冒出各种长长短短相互矛盾的句子。</p>
     
      <p>看着别人开着车放着音乐在悬崖边缘飞驰时想到应配文案之小舟从此逝江海寄余生，转而却觉得明明双双被困在雪案之前，哪来那么潇洒；</p>
      
      <p>想到终有离别于是不断默念海内存知己天涯若比邻聊以自慰，却不屑于腐儒能看淡人生南北多歧路——只有共沾襟的小儿女才不算麻木。</p>
      
      <p>我曾说过情坚似金，却也知道吉金虽然横亘于古史的时空，自成断代的标准，也会在黄土的重压下碎损，“万年永保”的残文只会沦为学生们的笑柄</p>

      <p>那什么能最无坚不摧最隽永久远呢。碳12立方晶体太硬，青铜器铜锡合金太冷，你还是赠我一颗你的真心吧；若相思情切，太平洋不过是一道浅水。</p>
     
    `
  },
  {
    id: 3,
    title: "\'东京在下雨\'",
    description: "别傻了，一月下雨是很正常的事。",
    date: "2025-01-20",
    readTime: "8 min",
    image: "/assets/nav-link-previews/blog.png",
    category: "Career",
    author: "一位志在古文字的好友zyy",
    content: `
      <p>今天是四处闲逛的一天。白天又忍不住去了浅草寺，去求了御守，我其实没什么信仰，算是图个好彩头。在这种景点似乎身陷于华人的汪洋大海，售卖处商量着求哪种御守的中文于耳不绝。</p>
      
      <p>秋叶原和池袋充斥着动漫人物的各种周边，我对此并不了解，反而更添了一种欣赏学习之趣。可惜语言实在不通，导购非常热情地跟我说些什么，我满口叽里咕噜的“sorry”，慌慌张张地鞠躬以对。</p>
     
      <p>出来旅游总是有着“一寸光阴一寸金”的绝对概念，晚上八点多了还觉得尚早，就想出去走走，虽然这几天心里没有颇不宁静，却也悄悄地披了大衣，带上门出去。</p>

      <p>即使天色已晚，仍然还有一些人在浅草寺求签和对着已经关闭的佛堂祭拜。我在浅草寺的区域内四处逛逛，突然遇见了指示牌，上面的日文我不认识，凭借里面的汉字猜测一下含义，大概是前面是修行的地方，不能再前行。</p>
      
      <p>我迟疑地张望，却听见远处有人对我大喊了几句什么，我不好意思扯着嗓子用英文说听不懂，只好硬着头皮喊了一句“はい”，假装听明白了，然后原路返回。</p>

      <p>在东京街头独自闲逛别有一番风味。我竖起耳朵听身边三三两两的日本人边走边聊，正是因为听不懂日语，才觉得他们说说笑笑的样子很有意思，并不嘈杂讨厌。路过的幼儿园门口印着五十音图，我驻足读了一会，后面的念不下去了，但因为没有求知的欲望，于是继续欣然前行。</p>

      <p>初稿于西历一月二十日日本东京，润色填充于次日日本札幌。故全文“今日”均指一月二十日。</p>
      
      <p>Liukanshan:配图来自她此行所去的东京。</p>
    `
  },
  {
    id: 4,
    title: "无爱者自由",
    description: "我把爱折叠成了克莱因瓶，表面空无一物，内里却涌动永不停歇的墨色潮汐。",
    date: "2024-05-20",
    readTime: "6 min",
    image: "/assets/nav-link-previews/contact.png",
    category: "Career",
    author: "Liu Kanshan",
    content: `
      <p>高中时喜欢上了《树犹如此》的文笔，遂记下此文。</p>
      
      <p白先勇写给同性伴侣王国祥的悼文《树犹如此》中的最后一段：</p>
      
      <p>春日负暄，我坐在园中靠椅上，品茗阅报，有百花相伴，暂且贪享人间瞬息繁华。</p>
     
      <p>美中不足的是，抬望眼，总看见园中西隅，剩下的那两棵义大利柏树中间，露出一块楞楞的空白来，缺口当中，映着湛湛青空，悠悠白云，那是一道女娲炼石也无法弥补的天裂。</p>
      
      <p>这篇悼文是王国祥逝世六年后写的，想必也正是这六年光阴的治愈，才让白先勇有勇气用这么平淡朴实的文字写完这篇悼文，全文没有任何无谓的哭诉，煽情，渲染，抱怨，只有细水长流的陪伴与最真切的生死两茫茫的悲哀。</p>
    `
  },
  {
    id: 5,
    title: "浅论一个考古项目",
    description: "blog中稀有的技术性文章",
    date: "2025-05-10",

    readTime: "10 min",
    image: "/assets/nav-link-previews/landing.png",
    category: "Career",
    author: "Liu Kanshan",
    content: `
      <p>具体内容在project中已经写了，这里就不赘述了，只是简单述说一下做这个项目的心路历程。</p>

      <p>本来以为发表在IEEE的论文提出的基于局部特征的CNN模型可以在拓片识别中呈现更高的准确率，没想到在实际应用中效果并不理想(也许这就是时代的眼泪吧)。</p>
        
      <p>于是决定将CNN模型中的卷积层替换为基于局部特征的卷积层，并使用注意力机制来提高模型的性能。</p>
 
      <p>但是分类准确率并没有显著提高，维持在80%左右。</p>

      <p>本来以为这个项目无疾而终，好在yolo模型在拓片识别中一骑绝尘，直接来到了90%的准确率，从图里也可以看出，训练效果相当不错(you only look once)。</p>
      
      <p>当然，我的github挂的是CNN模型，yolo模型在结题前还是暂且不做开源了。</p>
    `
  },
  {
    id: 6,
    title: "爱是...",
    description: "泽被万物而不争的海洋",
    date: "2025-5-20",
    readTime: "8 min",
    image: "/assets/nav-link-previews/about.png",
    category: "Career",
    author: "Liu Kanshan",
    content: `
      <p>爱的悖论在于，它越是试图证明永恒，越容易碎成锋利的秤砣。</p>

      <p>人们习惯将爱视作蓄水池，计算给予与索取的刻度，却忘了真正的丰盈如同海水——它盐分沉重，苦涩咸腥，却能托起万吨巨轮，亦能捧住一只搁浅的水母。</p>

      <p>被需要、被珍惜的幸福感，从来不是契约上的印章，而是台风过境后，发现阳台上那盆无人照料的花居然开了。</p>
   
      <p>我们常误以为孤独是生命的裂痕，可或许它更像陶器上的冰纹：在火与土的厮杀中，疼痛烧制出独一无二的釉色。</p>

      <p>所以不必在荒原上拼命栽种玫瑰，若肯俯身细看，苔藓与地衣早已用十年爬出一片柔软的宇宙。</p>
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
