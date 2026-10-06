import {
  UtensilsCrossed,
  HeartPulse,
  GraduationCap,
  FileUser,
  ReceiptText,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Building2,
  MapPinned,
  Zap,
  Webhook,
  TrendingUp,
  DatabaseBackup,
  Clock,
  UserPlus,
  LayoutGrid,
  Settings2,
  Users,
  Rocket,
  Sparkles,
  LineChart,
  MessageCircleQuestion,
  FileSearch,
  type LucideIcon,
  Wallet,
} from "lucide-react";

export const navLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Produits", href: "/#produits" },
  { label: "Pourquoi Tacynt", href: "/#pourquoi" },
  { label: "FAQ", href: "/#faq" },
  { label: "Processus", href: "/#processus" },
  { label: "Contact", href: "/contact" },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  sector: string;
  link: string;
  seoTitle: string;
  seoDescription: string;
  features: { title: string; description: string }[];
  audience: string[];
  // Images à placer dans public/solutions/<slug>/ (ex. src: "/solutions/shede/hero.png").
  // Tant qu'elles sont absentes, la page affiche un visuel de remplacement.
  image?: ProductImage;
  screenshots?: ProductImage[];
};

export type ProductImage = {
  src: string;
  alt: string;
};

export const products: Product[] = [
  {
    slug: "shede",
    name: "Tacynt Shede",
    tagline: "Hôtellerie & restauration",
    description:
      "Pilotez restaurants, bars et hôtels : commandes, tables, stocks et facturation réunis dans une seule plateforme fluide.",
    icon: UtensilsCrossed,
    gradient: "from-violet-2 to-cyan",
    sector: "Restauration",
    link: "https://shede.tacynt.com/",
    seoTitle: "Tacynt Shede — Logiciel de gestion pour restaurants, bars et hôtels",
    seoDescription:
      "Tacynt Shede centralise commandes, tables, stocks et facturation pour restaurants, bars et hôtels. Une plateforme cloud simple pour piloter votre établissement.",
    features: [
      { title: "Prise de commandes", description: "Enregistrez les commandes en salle, au comptoir ou à emporter et transmettez-les instantanément en cuisine." },
      { title: "Tables & chambres", description: "Visualisez l'occupation de vos tables et chambres en temps réel." },
      { title: "Stocks & approvisionnements", description: "Suivez vos consommations et anticipez les ruptures avant qu'elles n'arrivent." },
      { title: "Facturation & encaissement", description: "Éditez additions et factures en un clic et suivez votre chiffre d'affaires." },
    ],
    audience: ["Restaurants", "Bars & lounges", "Hôtels", "Fast-foods"],
  },
  {
    slug: "meddoc",
    name: "Tacynt MedDoc",
    tagline: "Santé & cliniques",
    description:
      "Dossiers patients, rendez-vous et parcours de soin centralisés pour hôpitaux, cliniques et centres de santé.",
    icon: HeartPulse,
    gradient: "from-cyan to-deep-2",
    sector: "Santé",
    link: "https://meddoc.tacynt.com/",
    seoTitle: "Tacynt MedDoc — Logiciel de gestion de clinique et dossier patient",
    seoDescription:
      "Tacynt MedDoc centralise dossiers patients, rendez-vous et parcours de soin pour hôpitaux, cliniques et centres de santé, sur un ou plusieurs sites.",
    features: [
      { title: "Dossier patient informatisé", description: "Antécédents, consultations et documents réunis dans un dossier unique et sécurisé." },
      { title: "Rendez-vous", description: "Planifiez les consultations et réduisez l'attente grâce à un agenda partagé." },
      { title: "Parcours de soin", description: "Suivez chaque patient de l'accueil à la sortie, entre tous les services." },
      { title: "Multi-sites", description: "Coordonnez plusieurs établissements depuis une seule plateforme." },
    ],
    audience: ["Hôpitaux", "Cliniques", "Centres de santé", "Cabinets médicaux"],
  },
  {
    slug: "etab",
    name: "Tacynt Etab",
    tagline: "Éducation & formation",
    description:
      "Inscriptions, notes, emplois du temps et communication : la gestion scolaire simplifiée pour tous les établissements.",
    icon: GraduationCap,
    gradient: "from-deep-2 to-violet",
    sector: "Éducation",
    link: "https://etab.tacynt.com/",
    seoTitle: "Tacynt Etab — Logiciel de gestion scolaire",
    seoDescription:
      "Tacynt Etab simplifie la gestion scolaire : inscriptions, notes, bulletins, emplois du temps et communication avec les parents, pour tous les établissements.",
    features: [
      { title: "Inscriptions", description: "Gérez admissions, réinscriptions et dossiers élèves sans paperasse." },
      { title: "Notes & bulletins", description: "Saisissez les notes et générez les bulletins automatiquement." },
      { title: "Emplois du temps", description: "Organisez classes, enseignants et salles en quelques clics." },
      { title: "Communication", description: "Informez parents, élèves et enseignants en temps réel." },
    ],
    audience: ["Écoles primaires", "Collèges & lycées", "Universités", "Centres de formation"],
  },
  // {
  //   slug: "cv",
  //   name: "Tacynt CV",
  //   tagline: "Carrière & recrutement",
  //   description:
  //     "Créez, optimisez et suivez des CV professionnels grâce à des recommandations générées par l'intelligence artificielle.",
  //   icon: FileUser,
  //   gradient: "from-violet to-violet-2",
  //   sector: "Carrière",
  //   link: "https://cv-facile.tacynt.com/"
  // },

  {
    slug: "money",
    name: "Tacynt Money",
    tagline: "Finances & épargne",
    description:
      "Comptes, budgets, objectifs et assistant IA réunis dans une seule application pour suivre, comprendre et faire grandir votre argent au quotidien.",
    icon: Wallet,
    gradient: "from-indigo to-violet",
    sector: "Finance",
    link: "https://money.tacynt.com/",
    seoTitle: "Tacynt Money — Application de gestion de budget et d'épargne",
    seoDescription:
      "Tacynt Money réunit comptes, budgets, objectifs d'épargne et assistant IA pour suivre, comprendre et faire grandir votre argent au quotidien.",
    features: [
      { title: "Comptes", description: "Regroupez tous vos comptes et suivez vos soldes en un coup d'œil." },
      { title: "Budgets", description: "Fixez des limites par catégorie et maîtrisez vos dépenses." },
      { title: "Objectifs d'épargne", description: "Définissez vos projets et suivez votre progression mois après mois." },
      { title: "Assistant IA", description: "Obtenez des analyses et des conseils personnalisés sur vos finances." },
    ],
    audience: ["Particuliers", "Familles", "Indépendants", "Jeunes actifs"],
  },
  {
    slug: "invoice",
    name: "Tacynt Invoice",
    tagline: "Facturation & documents",
    description:
      "Factures, devis, bons de commande et ordres de mission générés, suivis et archivés en quelques secondes.",
    icon: ReceiptText,
    gradient: "from-cyan-2 to-violet-2",
    sector: "Facturation",
    link: "https://invoice.tacynt.com/",
    seoTitle: "Tacynt Invoice — Logiciel de facturation et devis en ligne",
    seoDescription:
      "Tacynt Invoice génère, suit et archive factures, devis, bons de commande et ordres de mission en quelques secondes.",
    features: [
      { title: "Factures & devis", description: "Créez des documents professionnels à vos couleurs en quelques secondes." },
      { title: "Bons de commande", description: "Émettez et suivez vos bons de commande auprès de vos fournisseurs." },
      { title: "Ordres de mission", description: "Préparez et validez les ordres de mission de vos équipes." },
      { title: "Suivi & archivage", description: "Retrouvez chaque document et suivez les paiements en attente." },
    ],
    audience: ["PME", "Indépendants", "Cabinets", "Services administratifs"],
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 1200, suffix: "+", label: "Entreprises accompagnées" },
  { value: 4.6, suffix: "M+", label: "Documents générés" },
  { value: 85, suffix: "k+", label: "Utilisateurs actifs" },
  { value: 99.9, suffix: "%", label: "Disponibilité garantie" },
  { value: 12, suffix: "h", label: "Temps moyen gagné / semaine" },
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  { title: "Cloud natif", description: "Une infrastructure moderne, accessible partout, sans installation.", icon: Cloud },
  { title: "IA intégrée", description: "Des modèles d'intelligence artificielle au cœur de chaque produit.", icon: BrainCircuit },
  { title: "Sécurité renforcée", description: "Chiffrement de bout en bout et conformité aux standards du secteur.", icon: ShieldCheck },
  { title: "Multi-entreprises", description: "Gérez plusieurs structures depuis un seul compte centralisé.", icon: Building2 },
  { title: "Multi-sites", description: "Coordonnez plusieurs sites et succursales en temps réel.", icon: MapPinned },
  { title: "Temps réel", description: "Données synchronisées instantanément entre tous vos équipes.", icon: Zap },
  // { title: "API ouverte", description: "Connectez Tacynt à votre écosystème existant en toute simplicité.", icon: Webhook },
  { title: "Scalabilité", description: "Une architecture pensée pour grandir avec votre organisation.", icon: TrendingUp },
  // { title: "Sauvegardes automatiques", description: "Vos données protégées et répliquées en continu.", icon: DatabaseBackup },
  { title: "Disponibilité 24/7", description: "Une plateforme et une équipe support toujours opérationnelles.", icon: Clock },
];

export const aiCapabilities = [
  { title: "Analyser", description: "Elle lit vos données pour en extraire les signaux qui comptent.", icon: FileSearch },
  { title: "Assister", description: "Elle guide vos équipes en contexte, à chaque étape du travail.", icon: Sparkles },
  { title: "Recommander", description: "Elle propose la meilleure action suivante, au bon moment.", icon: LineChart },
  { title: "Automatiser", description: "Elle prend en charge les tâches répétitives à votre place.", icon: Zap },
  { title: "Générer des rapports", description: "Elle transforme vos données brutes en synthèses claires.", icon: ReceiptText },
  { title: "Prédire", description: "Elle anticipe les tendances pour orienter vos décisions.", icon: TrendingUp },
  { title: "Répondre", description: "Elle dialogue avec vos utilisateurs, en langage naturel.", icon: MessageCircleQuestion },
];

export type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const steps: Step[] = [
  { title: "Créer un compte", description: "Inscrivez votre organisation en quelques minutes, sans engagement.", icon: UserPlus },
  { title: "Choisir ses produits", description: "Sélectionnez les solutions Tacynt adaptées à votre activité.", icon: LayoutGrid },
  { title: "Configurer son organisation", description: "Personnalisez sites, rôles et paramètres selon vos besoins.", icon: Settings2 },
  { title: "Inviter son équipe", description: "Ajoutez vos collaborateurs et définissez leurs accès.", icon: Users },
  { title: "Commencer à travailler", description: "Votre organisation est prête à opérer, dès le premier jour.", icon: Rocket },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Tacynt Invoice a supprimé des heures de travail administratif chaque semaine. Nos équipes se concentrent enfin sur nos clients.",
    name: "Aïcha N.",
    role: "Directrice financière",
    company: "Groupe Lomé Services",
    initials: "AN",
  },
  {
    quote:
      "Avec MedDoc, notre clinique suit chaque patient en temps réel, même sur plusieurs sites. Un vrai gain en qualité de soin.",
    name: "Dr. Kwame A.",
    role: "Directeur médical",
    company: "Clinique Horizon Santé",
    initials: "KA",
  },
  {
    quote:
      "La mise en place de Tacynt Etab a modernisé la gestion de nos trois campus en quelques semaines seulement.",
    name: "Fatou D.",
    role: "Directrice académique",
    company: "Institut Excellence",
    initials: "FD",
  },
  {
    quote:
      "L'IA de Tacynt recommande les bons candidats avant même que nous ayons formulé la recherche. C'est bluffant.",
    name: "Samuel O.",
    role: "Responsable RH",
    company: "Nova Industries",
    initials: "SO",
  },
];

export const faqs = [
  {
    question: "Quels types d'organisations peuvent utiliser Tacynt ?",
    answer:
      "Tacynt s'adresse aux entreprises, établissements de santé, écoles et universités, ainsi qu'à toute organisation cherchant à digitaliser sa gestion grâce au cloud et à l'intelligence artificielle.",
  },
  {
    question: "Puis-je utiliser plusieurs produits Tacynt à la fois ?",
    answer:
      "Oui. Chaque produit est indépendant mais partage la même infrastructure, permettant de combiner Shede, MedDoc, Etab, CV ou Invoice selon vos besoins, avec une facturation unifiée.",
  },
  {
    question: "Comment l'intelligence artificielle est-elle utilisée ?",
    answer:
      "Nos modèles d'IA analysent vos données pour assister vos équipes, automatiser les tâches répétitives, générer des rapports et fournir des recommandations concrètes en temps réel.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Toutes les données sont chiffrées en transit et au repos, hébergées sur une infrastructure cloud redondante avec sauvegardes automatiques et surveillance continue.",
  },
  {
    question: "Proposez-vous un accompagnement à la mise en place ?",
    answer:
      "Notre équipe accompagne chaque organisation lors de la configuration initiale, de la migration des données et de la formation des équipes, avec un support disponible 24/7.",
  },
  {
    question: "Existe-t-il une offre adaptée aux petites structures ?",
    answer:
      "Oui, nos formules démarrent avec un plan gratuit et évoluent selon la taille de votre organisation, sans coûts cachés ni engagement de longue durée.",
  },
];
