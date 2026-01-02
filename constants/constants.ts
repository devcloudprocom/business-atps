import { Accessibility, ChartLine, ChartNoAxesColumn, ChartPie, CheckCheck, Database, Facebook, Hand, Instagram, Linkedin, Twitter, Unplug, Webhook, Workflow } from "lucide-react";

export const NAVBAR_LINKS = [
  {
    label: "Features",
    href: "#feature",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Testimonials",
    href: "#testimonial",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export const FEATURES_LINKS = [
  {
    label: "Create Workflow",
    href: "/create-workflow",
  },
  {
    label: "Setup Bot",
    href: "/setup-bot",
  },
  {
    label: "Schedule Message",
    href: "/schedule-message",
  }
]

export const FEATURES = [
  {
    title: "Adaptive Learning",
    description:
      "AI that evolves with your data, continuously improving performance and adapting to new patterns",
    image: "/assets/adaptive.avif",
    gradient: "gradient-card-pink",
    col: "lg:col-span-4",
  },
  {
    title: "Smart Automation",
    description:
      "Empowering you with AI-driven workflows designed to simplify operations, enhance productivity",
    image: "/assets/smart.avif",
    gradient: "gradient-card-purple",
    col: "lg:col-span-8",
  },
  {
    title: "Data Mapping",
    description:
      "Visualize and organize complex datasets effortlessly, making data connections clearer for faster, informed decisions",
    image: "/assets/data.avif",
    gradient: "gradient-card-pink",
    col: "lg:col-span-8",
  },
  {
    title: "Predictive Analytics",
    description:
      "Harness advanced models to forecast trends, uncover insights",
    image: "/assets/predictive.avif",
    gradient: "gradient-card-purple",
    col: "lg:col-span-4",
  },
];

export const PRODUCT_OVERVIEW = [
  {
    title: "Seamless Data Integration Process",
    description:
      "Effortlessly connect with diverse data sources, ensuring smooth data flow for real-time insights and accurate analysis.",
    list: [
      { text: "Unified Data Connections", icon: Database },
      { text: "Real-Time Data Syncing", icon: Workflow },
      { text: "Flexible API Integrations", icon: Webhook },
    ],
    image: "/assets/data_m.avif",
    imageWidth: 500,
    imageHeight: 500,
  },
  {
    title: "Advanced AI-Powered Analytics Tools",
    description:
      "Leverage intelligent analytics to uncover hidden patterns, predict future trends, and make data-driven decisions with confidence.",
    list: [
      { text: "Accurate Trend Forecasting", icon: ChartLine },
      { text: "Dynamic Insightful Dashboards", icon: ChartPie },
      { text: "AI-Driven Data Metrics", icon: ChartNoAxesColumn },
    ],
    image: "/assets/analystic_ad.avif",
    imageWidth: 500,
    imageHeight: 500,
  },
  {
    title: "Intelligent Automation Workflow Engine",
    description:
      "Automate repetitive tasks, optimize workflows, and boost productivity with smart, AI-powered automation capabilities.",
    list: [
      { text: "Streamlined Workflow Automation", icon: Unplug },
      { text: "Efficient Task Optimization", icon: CheckCheck },
      { text: "Smart Trigger Functions", icon: Hand },
    ],
    image: "/assets/intell.avif",
    imageWidth: 500,
    imageHeight: 500,
  },
];

export const BENEFITS = [
  {
    title: "Increased Efficiency",
    description: "Automate tasks and reduce manual workloads",
  },
  {
    title: "Enhanced Collaboration",
    description: "Streamline workflows with team-friendly features",
  },
  {
    title: "Scalable Solutions",
    description: "Easily grow with the demands of your data",
  },
  {
    title: "Data Security",
    description: "Safeguard your data with top-tier encryption",
  },
  {
    title: "Faster Decision-Making",
    description: "Leverage real-time insights for quicker choices",
  },
  {
    title: "Continuous Improvement",
    description: "Let AI adapt and improve with evolving data",
  },
];

export const TESTIMONIALS = [
  {
    quote: "ATPS has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision-making",
    name: "Sarah J.",
    role: "Data Analyst, TechCorp",
    image: "/assets/user_g.png",
  },
  {
    quote: "Thanks to ATPS, we now make data-driven decisions in real time. The predictive analytics have helped us forecast trends and stay ahead of the competition",
    name: "Emily R.",
    role: "Marketing Director, InnovateCo",
    image: "/assets/user_b.png",
  },
  {
    quote: "The automation features in ATPS have made our workflows so much more efficient. We're now able to focus on high-priority tasks while the system handles the rest",
    name: "Mark L.",
    role: "Operations Manager, GrowthTech",
    image: "/assets/user_g.png",
  },
];

export const STATS = [
  { value: "85", sign: "+", label: "Businesses are Happy" },
  { value: "4985", sign: "+", label: "Data-driven decisions" },
  { value: "85", sign: "%", label: "Customer Satisfied" },
];

export const STEPS = [
  {
    title: "Connect Your Data",
    description: "Effortlessly integrate data from various sources into a unified system.",
    image: "/assets/connect.avif",
    gradient: "from-orange-100 to-pink-100",
  },
  {
    title: "Analyze and Optimize",
    description: "Use AI to uncover valuable insights and improve performance.",
    image: "/assets/check_sec.avif",
    gradient: "from-purple-100 to-pink-100",
  },
  {
    title: "Let AI Work",
    description: "Streamline tasks and enhance productivity with AI.",
    image: "/assets/boul.avif",
    gradient: "from-pink-100 to-orange-100",
  },
];

export const PLANS = [
  {
    name: "Starter",
    description: "Get started with ATPS at no cost",
    price: { monthly: "Free", yearly: "Free" },
    popular: false,
    features: [
      "400 AI credits at signup",
      "20,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
  },
  {
    name: "Plus",
    description: "Unlock more powerful features",
    price: { monthly: "$22", yearly: "$18" },
    popular: true,
    features: [
      "Unlimited AI credits",
      "50,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
  },
  {
    name: "Pro",
    description: "Take your business to the next level",
    price: { monthly: "$69", yearly: "$55" },
    popular: false,
    features: [
      "Unlimited AI creation",
      "100,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
  },
];

export const FAQS = [
  {
    question: "What is ATPS?",
    answer: "ATPS is a powerful platform designed to help businesses integrate, analyze, and automate data workflows using artificial intelligence. It empowers teams to make smarter decisions and drive growth through seamless data management.",
  },
  {
    question: "Can I integrate ATPS with my existing tools?",
    answer: "Yes! ATPS supports integration with a wide range of tools and platforms. Our flexible APIs allow you to connect with your data sources effortlessly, enabling a smooth workflow.",
  },
  {
    question: "How does ATPS automate tasks?",
    answer: "ATPS uses AI-driven workflows to automate repetitive tasks such as data processing, reporting, and notifications. This helps save time and boosts productivity for your team.",
  },
  {
    question: "Is my data secure with ATPS?",
    answer: "Absolutely! ATPS takes security seriously. We use enterprise-grade encryption to protect your data, ensuring that it's secure at all stages, from integration to processing.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 support via email for all users, with additional live chat and priority support for Plus and Pro plan subscribers. Our team is always ready to assist with any questions or issues you may have.",
  },
];

export const BLOG_POSTS = [
  {
    id: "1",
    title: "Why Data Security is Vital for Every SaaS Platform",
    category: "STARTUP",
    date: "Oct 10, 2024",
    image: "/assets/girl1.avif",
  },
  {
    id: "2",
    title: "Efficient Strategies for Scaling Your SaaS Business",
    category: "SAAS",
    date: "Mar 13, 2025",
    image: "/assets/boys.avif",
  },
  {
    id: "3",
    title: "The Ultimate SaaS Template for Startups",
    category: "AI",
    date: "Feb 16, 2025",
    image: "/assets/girl2.avif",
  },
];

export const USEFUL_LINKS = [
  { label: "Feature", href: "#feature" },
  { label: "About", href: "#about" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
  { label: "404", href: "/404" },
];

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
];


export const PEOPLE = [
  {
    name: "John Doe",
    designation: "CEO",
    image: "/assets/user_b.png",
  },
  {
    name: "Jane Doe",
    designation: "CTO",
    image: "/assets/user_g.png",
  },
  {
    name: "Jim Doe",
    designation: "CFO",
    image: "/assets/user_b.png",
  },
]

export const BLOG_DETAILS = [
  
  {
    id: "1",
    title: "Why Data Security is Vital for Every SaaS Platform",
    category: "SAAS",
    date: "Oct 10, 2024",
    image: "/assets/girl1.avif", 
  },
  {
    id: "2",
    title: "Efficient Strategies for Scaling Your SaaS Business",
    category: "STARTUP",
    date: "Mar 13, 2025",
    image: "/assets/boys.avif",
  },
  {
    id: "3",
    title: "The Ultimate SaaS Template for Startups",
    category: "AI",
    date: "Feb 16, 2025",
    image: "/assets/girl2.avif",
  },
];