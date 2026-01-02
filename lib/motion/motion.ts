// Animation du conteneur principal
export const containerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Viewport config (Framer Motion) for scroll-triggered reveals
// - once: true => animation runs only the first time the element enters viewport
// - amount: how much of the element must be visible to trigger
export const defaultViewport = {
  once: true,
  amount: 0.25,
} as const;

// Animation du header
export const headerContainerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const badgeAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

export const titleAnimation = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
      delay: 0.4,
    },
  },
};

export const subtitleAnimation = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: 0.6,
    },
  },
};

// Animation des produits (stagger)
export const productsContainerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

export const productCardAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// Animation du contenu du produit
export const productContentAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const productTitleAnimation = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const productDescriptionAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.1,
    },
  },
};

// Animation des items de liste
export const listItemAnimation = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

// Animation de l'image
export const imageAnimation = {
  initial: {
    opacity: 0,
    scale: 0.9,
    x: 30,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
    },
  },
};

// Animation du header
export const headerAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const descriptionAnimation = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: 0.4,
    },
  },
};

// Animation de la carte principale
export const mainCardAnimation = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 0.61, 0.36, 1] as const,
      delay: 0.6,
    },
  },
};

// Animation des colonnes de bénéfices
export const columnContainerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    },
  },
};

export const leftColumnItemAnimation = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const rightColumnItemAnimation = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Animation des boutons
export const buttonsAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: 1.5,
    },
  },
};

// Animation pour l'icône de check
export const checkIconAnimation = {
  initial: {
    scale: 0,
    rotate: -180,
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      ease: "backOut" as const,
    },
  },
};

// Animation du carousel
export const carouselAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 0.61, 0.36, 1] as const,
      delay: 0.4,
    },
  },
};

// Animation du testimonial (slide)
export const testimonialSlideAnimation = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
      ease: "easeIn" as const,
    },
  }),
};

// Animation des boutons de navigation
export const navButtonAnimation = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
  tap: { scale: 0.9 },
};

// Animation des stats
export const statsContainerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    },
  },
};

export const statItemAnimation = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

// Animation des chiffres (compteur)
export const counterAnimation = (value: string) => ({
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "backOut" as const,
      delay: 0.3,
    },
  },
});

// Animation de la grille supérieure
export const topGridAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 0.61, 0.36, 1] as const,
      delay: 0.3,
    },
  },
};

// Animation des steps
export const stepsContainerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

export const stepItemAnimation = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const stepImageAnimation = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
      delay: 0.2,
    },
  },
};

export const stepContentAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.4,
    },
  },
};

// Animation du toggle
export const toggleAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: 0.5,
    },
  },
};

// Animation des cartes de prix
export const cardsContainerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.7,
    },
  },
};

export const cardAnimation = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// Animation du badge "Popular"
export const popularBadgeAnimation = {
  initial: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "backOut" as const,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 360,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
};

// Animation de l'icône d'étoile
export const starIconAnimation = {
  initial: {
    scale: 0,
    rotate: -180,
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      ease: "backOut" as const,
      delay: 0.2,
    },
  },
};

// Animation du prix
export const priceAnimation = {
  initial: {
    opacity: 0,
    y: 6,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.18,
      ease: "easeOut" as const,
    },
  },
};

// Animation des features
export const featuresContainerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.6,
    },
  },
};

export const featureItemAnimation = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

// Animation de l'icône Sparkle
export const sparkleIconAnimation = {
  initial: {
    scale: 0,
    rotate: -180,
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: "backOut" as const,
    },
  },
  hover: {
    rotate: 360,
    scale: 1.2,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
};

// Animation du texte de contact
export const contactAnimation = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: 0.3,
    },
  },
};

// Animation des avatars
export const avatarsAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

export const avatarItemAnimation = {
  initial: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      ease: "backOut" as const,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    y: -5,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

// Animation des FAQ items
export const faqsContainerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

export const faqItemAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

// Animation du contenu FAQ (expand/collapse)
export const faqContentAnimation = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

// Animation du bouton plus/moins
export const plusMinusAnimation = {
  collapsed: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  expanded: {
    rotate: 180,
    scale: 1.2,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export const buttonAnimation = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: 0.4,
    },
  },
};

// Animation du contenu de la carte
export const cardContentAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  },
};

export const categoryBadgeAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
    x: -10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "backOut" as const,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const dateAnimation = {
  initial: {
    opacity: 0,
    x: 10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      delay: 0.1,
    },
  },
};

export const titleCardAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.2,
    },
  },
};

// Animation du CTA section
export const ctaAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 0.3,
    },
  },
};

// Animation du texte de fond
export const backgroundTextAnimation = {
  initial: {
    opacity: 0,
    x: "-50%",
    y: 100,
  },
  animate: {
    opacity: 1,
    x: "-50%",
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
      delay: 0.5,
    },
  },
};

// Animation du contenu du footer
export const footerContentAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    },
  },
};

export const logoAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// Animation des liens sociaux
export const socialLinksAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  },
};

export const socialItemAnimation = {
  initial: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      ease: "backOut" as const,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

// Animation des liens utiles
export const usefulLinksAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: 0.6,
    },
  },
};

export const linkItemAnimation = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  hover: {
    x: 5,
    color: "#ffffff",
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

// Animation des informations de l'entreprise
export const companyInfoAnimation = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: 0.8,
    },
  },
};

// Animation de la barre du bas
export const bottomBarAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: 1,
    },
  },
};

// Variantes d'animation
export const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.3,
      ease: "easeOut" as const,
    },
  }),
};

export const logoVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    rotate: [0, -5, 5, -5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
};

export const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
  tap: { scale: 0.95 },
};

export const mobileDropdownVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.18, ease: "easeInOut" as const },
  },
};

export const mobileItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 + i * 0.04,
      duration: 0.18,
      ease: "easeOut" as const,
    },
  }),
};

// Animation de fond
export const backgroundAnimation = {
  initial: { opacity: 0, scale: 1.1 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 0.61, 0.36, 1] as const,
    },
  },
};

// Animation de contenu principal
export const contentAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 0.61, 0.36, 1] as const,
      delay: 0.3,
    },
  },
};

// Animation des éléments enfants (stagger)
export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1] as const,
    },
  },
};

// Animation du mockup avec effet de glissement
export const mockupAnimation = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 0.61, 0.36, 1] as const,
      delay: 1.2,
    },
  },
};

// Animation des éléments flottants
export const floatAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 0.61, 0.36, 1] as const,
      delay: 1.5,
    },
  },
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Animation du panneau de chat
export const chatBubbleAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
    x: 50,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1] as const,
      delay: 1.8,
    },
  },
};

// Animation des boutons de fonctionnalités (en cascade)
export const featuresAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 0.61, 0.36, 1] as const,
      delay: 2 + i * 0.1,
    },
  }),
};

// Animation du bouton d'envoi
export const sendButtonAnimation = {
  initial: {
    opacity: 0,
    rotate: -180,
    scale: 0,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] as const,
      delay: 2.5,
    },
  },
};

export const headerItemAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// Animation des cartes en grille
export const gridContainerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    },
  },
};

// Animation du texte dans la carte
export const textAnimation = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.4,
    },
  },
};
