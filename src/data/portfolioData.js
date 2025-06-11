// src/data/portfolioData.js

import {
  Code, Coffee, Server, Wrench, Type, Layout, Database, Cloud, Brain,
  FileCode, ArrowRight, Wind, Leaf, Bolt, Flame, Share2, Table, Columns,
  GitBranch, Container, Rocket, Cpu, Sparkles, Terminal, PenTool, MonitorSmartphone, Users, Atom
} from 'lucide-react';

const portfolioData = {
  name: "Aejaz Ahmed Dhoteghar",
  title: "Backend Developer & AI/ML Enthusiast",
  bio: "I build scalable applications. With a passion for clean code and modern design, I turn complex problems into elegant digital solutions.",
  contact: {
    email: "adhoteghar1@gmail.com",
    github: "https://github.com/AejazAhmed",
    linkedin: "https://linkedin.com/in/aejaz-ahmed",
    avatar: "https://avatars.githubusercontent.com/u/12237696?v=4"
  },
  skills: [
    {
      category: "Programming Languages",
      icon: Type,
      items: [
        { name: "Python", icon: Code },
        { name: "Java", icon: Coffee },
        { name: "JavaScript", icon: FileCode },     
        { name: "Groovy", icon: Code },
        { name: "Go", icon: Code },
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: Layout,
      items: [
        { name: "Django", icon: Code },
        { name: "Django REST", icon: Code },
        { name: "Flask", icon: Code },
        { name: "AIOHttp", icon: Code },
        { name: "Pandas", icon: Code },
        { name: "NumPy", icon: Code },
        { name: "PyTorch", icon: Code },
        { name: "SKlearn", icon: Code },
        { name: "Matplot lib", icon: Code },
      ]
    },
    {
      category: "Backend & Cloud",
      icon: Server,
      items: [
        { name: "AWS", icon: Leaf },
        { name: "Express.js", icon: Bolt },
        { name: "Firebase", icon: Flame },
        { name: "RESTful APIs", icon: Share2 },
      ]
    },
    {
      category: "Databases & Repository Managers",
      icon: Database,
      items: [
        { name: "MongoDB", icon: Database },
        { name: "PostgreSQL", icon: Table },
        { name: "SQL", icon: Columns },
        { name: "Artifactory", icon: Share2 },
        { name: "Pypi", icon: Share2 },
        { name: "Gradle", icon: Share2 },
        { name: "Maven", icon: Share2 },
      ]
    },
    {
      category: "DevOps & Tools",
      icon: Cloud,
      items: [
        { name: "GitLab & GitHub", icon: GitBranch },
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Container },
        { name: "Terraform", icon: Rocket },
        { name: "Jira", icon: Rocket },
        { name: "Packer", icon: Rocket },
        { name: "CI/CD (GitHub Actions, Gitlab Pipelines)", icon: Rocket },
      ]
    },
    {
      category: "AI/Machine Learning (Basic)",
      icon: Brain,
      items: [
        { name: "Python for ML", icon: Cpu },
        { name: "Basic ML Concepts", icon: Sparkles },
      ]
    },
    {
      category: "Other Tools & Methodologies",
      icon: Wrench,
      items: [
        { name: "VS Code", icon: Terminal },
        { name: "Pycharm", icon: PenTool },
        { name: "Responsive Design", icon: MonitorSmartphone },
        { name: "Agile/Scrum", icon: Users },
      ]
    }
  ],
  projects: [
    // {
    //   title: "E-Commerce Platform",
    //   description: "A full-featured online store with a custom CMS, product management, and Stripe integration for payments.",
    //   tags: ["React", "Node.js", "MongoDB", "Stripe"],
    //   liveUrl: "#",
    //   repoUrl: "#",
    //   imageUrl: "project-ecommerce.png"
    // },
    {
      title: "Coming Sooon",
      description: "Projects will be added soon",
      tags: [],
      liveUrl: "#",
      repoUrl: "#",
      imageUrl: "project-task.png"
    },
    // {
    //   title: "Portfolio Website",
    //   description: "My personal portfolio (the one you're looking at!) built to showcase my skills and projects.",
    //   tags: ["React", "Vite", "Tailwind CSS"],
    //   liveUrl: "#",
    //   repoUrl: "#",
    //   imageUrl: "project-portfolio.png"
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "A responsive weather application fetching real-time data from a third-party API.",
    //   tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    //   liveUrl: "#",
    //   repoUrl: "#",
    //   imageUrl: "project-weather.png"
    // },
    // {
    //   title: "Recipe Finder",
    //   description: "An application to discover and save recipes, integrated with a food API.",
    //   tags: ['React', 'API', 'Context API', 'Styled Components'],
    //   liveUrl: "#",
    //   repoUrl: "#",
    //   imageUrl: "project-recipe.png"
    // },
    // {
    //   title: "Blog Platform",
    //   description: "A minimalist blog platform built with Next.js and Markdown, featuring dark mode and SEO optimization.",
    //   tags: ['Next.js', 'Markdown', 'TypeScript', 'CSS Modules'],
    //   liveUrl: "#",
    //   repoUrl: "#",
    //   imageUrl: "project-blog.png"
    // },
  ],
  experience: [
    {
      role: "Technical Lead",
      company: "Bridgenext",
      period: "Feb 2018 - Present",
      location: "Pune, Maharashtra, India",
      description: ""
    },
    {
      role: "Software Engineer",
      company: "Searce Inc.",
      period: "Jul 2017 - Feb 2018",
      location: "Pune, Maharashtra, India",
      description: ""
    },
    {
      role: "Software Engineer",
      company: "Backpacker Panda",
      period: "Oct 2016 - July 2017",
      location: "Pune, Maharashtra, India",
      description: ""
    },
     {
      role: "Software Engineer",
      company: "Platlabs | AmplifyReach",
      period: "Aug 2015 - oct 2016",
      location: "Pune, Maharashtra, India",
      description: ""
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA), Science",
      institution: "Solapur University",
      period: "2012 - 2015",
      location: "Solapur, MH IN"
    },
    {
      degree: "Bachelor of Science (BSc) Biotechnology",
      institution: "Walchand College of Biotechnology",
      period: "2009 - 2012",
      location: "Solapur, MH IN"
    }
  ]
};

export default portfolioData;
