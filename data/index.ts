export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Who We Are",
    description:
      "We're a small team of passionate developers from MVJCE, dedicated to empowering schools and small businesses with beautiful, affordable websites. We handle everything from design to deployment, so you can focus on your mission.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Why Choose Us?",
    description:
      "We believe every school and business deserves a strong online presence. Our custom sites are tailored to your needs, modern, and budget-friendly.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our Mission",
    description:
      "To help you reach more people, modernize your image, and simplify operations with smart, user-friendly websites.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Students at MVJCE",
    description:
      "We're gaining real-world experience and supporting our college fees by building quality websites for our clients.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "End-to-End Service",
    description:
      "From the first consultation to the final launch—and beyond—we handle every step: planning, design, development, content, hosting, security, and ongoing support. You get a single point of contact and a stress-free experience, so you can focus on your mission while we take care of your website.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let&apos;s Build Your Website!",
    description:
      "Ready to get started? Contact us for a free quote and let&apos;s make your vision a reality.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "JPR Public School",
    des: "A clean, professional website for JPR Public School with student/parent dashboard and notice board integration.",
    img: "/jpr.png",
    iconLists: [
      "/django.svg",
      "/postgresql.svg",
      "/railway.svg",
      "/html5.svg",
      "/css.svg",
      "/javascript.svg",
    ],
    link: "https://jprpublicschool.com",
  },
  {
    id: 2,
    title: "Whitefield Global School",
    des: "Modern school website with admission forms, photo galleries, announcements, and a student dashboard.",
    img: "/wii.png",
    iconLists: ["/react.svg", "/tailwindcss.svg", "/typescript.svg"],
    link: "https://wiis.in",
  },
  {
    id: 3,
    title: "ANS Title Solution",
    des: "Business website for ANS Title Solution, featuring service showcase, lead capture, and contact integration.",
    img: "/ans.png",
    iconLists: ["/html5.svg", "/css.svg", "/javascript.svg", "/php.svg"],
    link: "https://anstitlesolution.com",
  },
];

export const testimonials = [
  {
    quote:
      "The team created a beautiful website for our school. It's user-friendly, and the dashboard has been a game-changer.",
    name: "Principal, Whitefield International Islamic School",
    title: "School Principal",
  },
  {
    quote:
      "Working with this team was a fantastic experience. They delivered our project on time and exceeded our expectations.",
    name: "Amit Kumar,JPR Public School",
    title: "Founder",
  },
  {
    quote:
      "Professional, responsive, and creative. Highly recommend for any school or business!",
    name: "Najib , ANS Title Solution",
    title: "Business Manager",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "railway",
    img: "/railway1.svg",
    nameImg: "/railway.png",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "Developed real-time projects using MERN stack under mentorship. Participated in AI-driven web development tasks with backend logic and REST APIs. Provided technical expertise, contributing to a 15% efficiency in client problems.",
    className: "md:col-span",
    thumbnail: "/exp2.svg",
    period: "Jan 2025 - Mar 2025",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/insta.svg",
  },
];

export const services = [
  {
    id: 1,
    title: "School Websites",
    description:
      "Clean, informative websites for schools with features like admission forms, photo galleries, announcements, and student dashboards.",
    icon: "/school.svg",
  },
  {
    id: 2,
    title: "Business Websites",
    description:
      "Showcase your services, capture leads, and build trust with a sleek, modern website designed just for your business.",
    icon: "/business.svg",
  },
  {
    id: 3,
    title: "Maintenance & Support",
    description:
      "Ongoing help with updates, security, and hosting—even after your site is live.",
    icon: "/support.svg",
  },
  {
    id: 4,
    title: "Custom Features",
    description:
      "Want something specific? Chatbots, login portals, online fee payment? We've got you covered.",
    icon: "/custom.svg",
  },
];

export const pricing = [
  {
    id: 1,
    title: "Starter Website",
    price: "₹3,999",
    description: "Static 3-page site",
  },
  {
    id: 2,
    title: "Standard Website",
    price: "₹7,499",
    description: "Up to 6 pages + contact form",
  },
  {
    id: 3,
    title: "Advanced Site",
    price: "₹12,999",
    description: "Dashboard, CMS, login system, etc.",
  },
  {
    id: 4,
    title: "Custom Pricing",
    price: "Contact Us",
    description: "Available for unique needs",
  },
];
