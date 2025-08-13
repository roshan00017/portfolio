import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Roshan",
  lastName: "Gyawali",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpeg",
  email: "gyawalirprogrammer@gmail.com",
  location: "Asia/Kathmandu", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Nepali", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Check out my work</>,
  href: "/work/",
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/roshan00017",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/roshan-gyawali-a337141b0/",
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>WELCOME, Explore and lets Connect</>,
  featured: {
    display: true,
    title: (
      <>
        Check out my CV <strong className="ml-4"></strong>
      </>
    ),
    href: "/about/",
  },
  subline: (
    <>
      I'm Roshan, a Software Developer.
      <br />
      CODE, DEBUG , OPTIMIZE
      <br /> I love to implement Ideas into code and work it.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Asia/Kathmandu (Nepal) based Software Developer . I expertise
        lies in different Tech Stacks like Node.js , Laravel , Java.
        Mongodb,Next.js,React.js,Typescript,Socket.io <br />
        Docker,nginix,Redis,Kafka,Cloudflare Storage <br />
        Gitlab CD, Github WorkFlow. VPS management , Digital Ocean.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Tradeawaay",
        timeframe: "2024 - Present",
        role: "Lead Backend Developer",
        achievements: [
          <>
            Lead the Backend Developement for the tradewaay trading application.
          </>,
          <>
            Managed the VPS server , nginix configuration , and Gitlab CD for
            deployment for different application services across server.
          </>,
          <>
            Developed Socket.io server for market/trade data streaming and
            developed chat application for application using socket.io.
          </>,

          <>
            Integrate Stripe payment gateway in application for subscription
            based service.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Screenshot from 2025-08-01 15-57-51.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Sireto Technology",
        timeframe: "2024 - 3 month",
        role: "Software Developer Intern",
        achievements: [
          <>developed API services in Fastapi and Express js framework.</>,
          <>followed Test driven Development.</>,
          <>developer GitHub workflows and deployment procedure on VPS.</>,
          <>
            used Socket io for realtime streaming data,Used docker for
            containerization of services.
          </>,
        ],
        images: [],
      },
      {
        company: "Shangrila Informatics pvt ltd",
        timeframe: "2023-8months",
        role: "Web Developer (part time)",
        achievements: [
          <>
            Worked on server side application with Laravel framework along with
            api development
          </>,
          <> use of git version control system while development</>,
          <>
            Used Laravel framework for server side and blade for frontend
            rendering
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Tribhuwan University(Patan Multiple Campus)",
        description: <>Bsc. Csit Graduated (2024).</>,
      },
      {
        name: "+2 (Science)",
        description: <>Manimukunda HSS (2076)</>,
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
