import {
  ChartLine,
  ChartNoAxesColumn,
  ChartPie,
  CheckCheck,
  Database,
  Facebook,
  Hand,
  Instagram,
  Linkedin,
  Twitter,
  Unplug,
  Webhook,
  Workflow,
} from "lucide-react";

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
    href: "/price",
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
  },
];

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
    description: "Harness advanced models to forecast trends, uncover insights",
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
    company: "Launchpad Academy",
    quote:
      "ATPS allowed us to deploy online exams and quizzes faster than we ever thought possible.",
    name: "Dr. Alex H.",
    role: "Academic Director",
    image: "/assets/user_g.png",
  },
  {
    company: "OpenCampus",
    quote:
      "The platform’s cloud-based and proctored exam system perfectly matches our vision: no complex setup, no heavy infrastructure, just reliable digital assessments.",
    name: "Edouard B.",
    role: "Head of Digital Learning",
    image: "/assets/user_b.png",
  },
  {
    company: "EduPro",
    quote:
      "The secure exam monitoring and flexible quiz management were the key features that convinced us to adopt ATPS across our institution.",
    name: "Leonard H.",
    role: "CTO – Education Systems",
    image: "/assets/user_g.png",
  },
  {
    company: "ExamSecure",
    quote:
      "We automated most of our assessment monitoring and quiz creation workflows using ATPS, saving enormous time for both instructors and administrators.",
    name: "Hemanth R.",
    role: "Learning Systems Engineer",
    image: "/assets/user.png",
  },
  {
    company: "SmartLearn",
    quote:
      "Instant setup and isolated exam environments made testing and deployment effortless. We now deliver exams with confidence and speed.",
    name: "Jamie K.",
    role: "E-Learning Program Lead",
    image: "/assets/user_b.png",
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
    description:
      "Effortlessly integrate data from various sources into a unified system.",
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
    description: "Get started with Fluence AI at no cost",
    price: { monthly: "Free", yearly: "Free" },
    popular: false,
    features: [
      "400 AI credits at signup",
      "20,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
      "Basic workflow templates",
      "Standard analytics dashboard",
      "Email support",
      "Secure data encryption",
    ],
  },
  {
    name: "Plus",
    description: "Unlock more powerful features",
    price: { monthly: "$22", yearly: "$22" },
    popular: true,
    features: [
      "Unlimited AI credits",
      "50,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
      "Team collaboration workspace",
      "Advanced analytics dashboard",
      "Priority email support",
      "Custom integrations (basic)",
      "Export reports (CSV)",
      "Access to new features early",
    ],
  },
  {
    name: "Pro",
    description: "Take your business to the next level",
    price: { monthly: "$69", yearly: "$69" },
    popular: false,
    features: [
      "Unlimited AI creation",
      "100,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
      "Advanced automation workflows",
      "Custom integrations (advanced)",
      "Role-based access control (RBAC)",
      "Priority support (SLA)",
      "Dedicated onboarding assistance",
      "Audit logs",
    ],
  },
];

export const FAQS = [
  {
    question: "What is ATPS?",
    answer:
      "ATPS is a powerful platform designed to help businesses integrate, analyze, and automate data workflows using artificial intelligence. It empowers teams to make smarter decisions and drive growth through seamless data management.",
  },
  {
    question: "Can I integrate ATPS with my existing tools?",
    answer:
      "Yes! ATPS supports integration with a wide range of tools and platforms. Our flexible APIs allow you to connect with your data sources effortlessly, enabling a smooth workflow.",
  },
  {
    question: "How does ATPS automate tasks?",
    answer:
      "ATPS uses AI-driven workflows to automate repetitive tasks such as data processing, reporting, and notifications. This helps save time and boosts productivity for your team.",
  },
  {
    question: "Is my data secure with ATPS?",
    answer:
      "Absolutely! ATPS takes security seriously. We use enterprise-grade encryption to protect your data, ensuring that it's secure at all stages, from integration to processing.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 support via email for all users, with additional live chat and priority support for Plus and Pro plan subscribers. Our team is always ready to assist with any questions or issues you may have.",
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

export const BLOG_CATEGORIES = [
  "All posts",
  "E-Learning",
  "Assessment",
  "Quizzes",
  "Proctored Exams",
  "EdTech AI",
  "Learning Tools",
  "Best Practices",
  "Security",
  "Analytics",
  "Case Studies",
  "Guides",
  "Updates",
];

export const BLOG_FEATURED_POSTS = [
  {
    id: "101",
    title: "Ensuring Academic Integrity in Online Exams",
    category: "Security",
    date: "Dec 29, 2025",
    image: "/assets/pic.png",
    author: { name: "Dr. Shridhar Deshmukh", avatar: "/assets/user_g.png" },
  },
  {
    id: "102",
    title: "Scaling Digital Classrooms Without Downtime",
    category: "EdTech",
    date: "Dec 22, 2025",
    image: "/assets/analystic_ad.avif",
    author: { name: "Adi Griever", avatar: "/assets/user_b.png" },
  },
];

export const BLOG_FEED_POSTS: Array<{
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt?: string;
  image?: string;
  author?: { name: string; avatar: string };
}> = [
  {
    id: "103",
    title: "Shaping the Future of Online Education in 2026",
    category: "EdTech",
    date: "Jan 02, 2026",
  },
  {
    id: "104",
    title: "Keeping Online Exams Secure Across Platforms",
    category: "Security",
    date: "Dec 23, 2025",
    excerpt:
      "Maintaining exam integrity is critical. Learn how secure proctoring and cloud-based solutions prevent cheating and ensure fairness.",
    image: "/assets/cube.png",
    author: { name: "Dr. Carlota Soto", avatar: "/assets/user_b.png" },
  },
  {
    id: "105",
    title: "Scaling Digital Classrooms for Large Student Cohorts",
    category: "Best Practices",
    date: "Dec 19, 2025",
  },
  {
    id: "106",
    title: "Automating Quiz Grading with AI",
    category: "EdTech AI",
    date: "Dec 17, 2025",
    excerpt:
      "Explore how AI-powered grading can reduce instructor workload and provide instant feedback to students.",
    image: "/assets/ia_p.avif",
    author: { name: "Pedro Figueiredo", avatar: "/assets/user_g.png" },
  },
  {
    id: "107",
    title: "Why Interactive Learning Modules Boost Engagement",
    category: "Learning Tools",
    date: "Dec 12, 2025",
    excerpt:
      "Interactive modules keep students engaged and improve knowledge retention compared to traditional static content.",
    image: "/assets/data_m.avif",
    author: { name: "Dr. Carlota Soto", avatar: "/assets/user_b.png" },
  },
  {
    id: "108",
    title: "Designing Effective Quizzes That Actually Improve Learning",
    category: "Assessment",
    date: "Dec 12, 2025",
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
];

export const BLOG_DETAILS = [
  {
    id: "1",
    title: "Why Secure Online Exams Are Essential for Modern Education",
    category: "E-Learning",
    date: "Jan 10, 2026",
    image: "/assets/online_exam.avif",
  },
  {
    id: "2",
    title: "Best Practices for Creating Effective Online Quizzes",
    category: "Assessment",
    date: "Feb 13, 2026",
    image: "/assets/quiz_strategy.avif",
  },
  {
    id: "3",
    title: "How Proctored Exams Improve Academic Integrity",
    category: "EdTech",
    date: "Mar 16, 2026",
    image: "/assets/proctoring.avif",
  },
  {
    id: "101",
    title: "Top Tips for Automating Student Evaluations",
    category: "Workflow",
    date: "Jan 29, 2026",
    image: "/assets/automation.avif",
  },
  {
    id: "102",
    title: "Data Analytics in E-Learning: Measuring Student Performance",
    category: "Analytics",
    date: "Feb 22, 2026",
    image: "/assets/analytics.avif",
  },
  {
    id: "103",
    title: "Enhancing Engagement with Interactive Learning Modules",
    category: "Learning Tools",
    date: "Mar 02, 2026",
    image: "/assets/interactive.avif",
  },
  {
    id: "104",
    title: "How to Keep Online Exams Secure Across Platforms",
    category: "Security",
    date: "Feb 23, 2026",
    image: "/assets/security.avif",
  },
  {
    id: "105",
    title: "Setting Up Online Assessments for Large Classrooms",
    category: "Best Practices",
    date: "Feb 19, 2026",
    image: "/assets/large_class.avif",
  },
  {
    id: "106",
    title: "Using AI to Detect Cheating in Online Exams",
    category: "EdTech AI",
    date: "Feb 17, 2026",
    image: "/assets/ai_proctor.avif",
  },
  {
    id: "107",
    title: "The Future of E-Learning: Cloud-Based Platforms",
    category: "E-Learning",
    date: "Feb 12, 2026",
    image: "/assets/cloud_learning.avif",
  },
  {
    id: "108",
    title: "Designing Quizzes that Actually Improve Learning",
    category: "Assessment",
    date: "Feb 12, 2026",
    image: "/assets/quiz_design.avif",
  },
];
