import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import photo from "@/images/pictures/photo.jpg";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ebrahimk khodadadi",
  initials: "EK",
  location: "Iran, Esfahan",
  locationLink: "https://www.google.com/maps/place/esfahan",
  about:
    "Developer focused on building products with extra attention to detail",
  summary:
    "Experienced programmer with a strong foundation in multiple languages and a passion for solving complex problems. Proven track record of delivering high-quality software solutions through collaborative development and innovative problem-solving.",
  avatarUrl: photo,
  personalWebsiteUrl: "https://ebrahimkhodadadi.ir",
  contact: {
    email: "ebrahimkhodadadideveloper@gmail.com",
    tel: "+989011793041",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ebrahimkhodadadi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "linkedin.com/in/ebrahim-khodadadi-316b59236",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/@ebrahimkhodadi",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Technology",
      degree: "Bachelor's Degree in software engineering",
      start: "2022",
      end: "now",
    },
  ],
  work: [
    {
      company: "Rangarang",
      link: "http://www.rangarang-group.com",
      badges: ["Hybrid"],
      title: "Junior .net Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description:
        "Implemented new features. Technologies: Asp.net, Razor",
    },
    {
      company: "Cheshm Andaz Ayande Parsian",
      link: "http://www.i-cap.ir",
      badges: ["Hybrid"],
      title: "Junior .net core Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Create & Develop Microservices, Using Grpc, Create & Develop Asp.net core project, Using Mongo & Redis & LiteDB & SqLite & ElasticSearch Databases, SignalR, Docker, Worker service, Elmah, RateLimit, Automapper, Design patterns",
    },
    {
      company: "Sepehrcc",
      link: "http://www.sepehrcc.com",
      badges: ["Remote"],
      title: "Junior Developer",
      logo: JojoMobileLogo,
      start: "2023",
      end: "now",
      description:
        "Develop DDD projec, Messaging & Events (RabbitMq, Masstransit), CI/CD, EventStoreDB, github actions, Asp.net core web api, Redis, Dapper, Mediatr, CQRS",
    }
  ],
  skills: [
    "JavaScript/CSS3/HTML5",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Asp.net core",
    "Solidity",
    "Python",
    "MQL/MetaTrader",
    "Golang",
    "Flutter/Dart"
  ],
  projects: [
    {
      title: "Shop with maui mobile application",
      techStack: [
        "maui",
        "C#",
        "MVVM"
      ],
      description: "App to create and Validate RSA cryptography system",
      logo: ConsultlyLogo,
      link: {
        label: "Maui",
        href: "https://github.com/ebrahimkhodadadi/ShopManagerMaui",
      },
    },
    {
      title: "RSA",
      techStack: [
        "WPF",
        "C#"
      ],
      description: "App to create and Validate RSA cryptography system",
      logo: ConsultlyLogo,
      link: {
        label: "RSA",
        href: "https://github.com/ebrahimkhodadadi/RSACryptoSystem",
      },
    },
    {
      title: "Metatrader/MQL/Python bot",
      techStack: [
        "MQL",
        "Python"
      ],
      description: "A bot to open and close order with alghorithm",
      logo: ConsultlyLogo,
      link: {
        label: "Metatrader/Bot",
        href: "https://github.com/ebrahimkhodadadi/Metatrader",
      },
    }
  ],
} as const;
