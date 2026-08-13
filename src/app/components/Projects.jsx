import { jsx, jsxs } from "react/jsx-runtime";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function Projects() {
  const projects = [
    {
      title: "Team Task Management (Taskflow)",
      description:
        "Problem: I needed a collaboration platform that supports team-based task management with authentication, roles, and task workflows. Approach: I designed PostgreSQL relationships for users, teams, memberships, tasks, invites, and comments, then built a Spring Boot REST API with JWT authentication and Admin/Member RBAC. The React client uses protected routes, Axios, and a drag-and-drop Kanban board. Result: The app supports team invitations, task CRUD, assignees, due dates, comments, and role-based permissions, demonstrating a scalable full-stack SaaS architecture.",
      image: "/projects/taskflow.png",
      tags: [
        "React",
        "React Router",
        "Axios",
        "@dnd-kit",
        "Java 17",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "Docker",
        "Render",
        "Vercel"
      ],
      github: "https://github.com/EunsuhJeon/task-management-backend",
      demo: "https://task-management-frontend-rho-umber.vercel.app"
    },
    {
      title: "Retail Dashboard App",
      description:
        "Problem: I needed a single dashboard where users could browse products, manage a cart, and review sales metrics without juggling separate tools. Approach: I built a vanilla JavaScript frontend with a Node.js and Express REST API, Chart.js analytics, and clear separation between UI and API layers. Result: The app supports product browsing, cart and checkout flows, and dashboard views that demonstrate full-stack integration and maintainable structure.",
      image: "/projects/retailhub.png",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "REST API", "Chart.js"],
      github: "https://github.com/EunsuhJeon/retail-dashboard-app",
      demo: "https://retail-es.netlify.app/"
    },
    {
      title: "Learnify CourseHub",
      description:
        "Problem: An online course platform needs secure registration, enrollment, and searchable course listings backed by reliable data access. Approach: I designed a RESTful PHP API with MySQL and PDO, using MVC patterns, session-based authentication, and paginated search with optimized queries. Result: The API supports user accounts, course enrollment, cart management, and scalable course discovery for a companion React front end.",
      image: "/projects/learnify.png",
      tags: ["PHP", "MySQL", "PDO", "REST API", "MVC Architecture", "Session Authentication"],
      github: "https://github.com/EunsuhJeon/learnify-coursehub-server",
      demo: "https://frolicking-shortbread-798dd6.netlify.app"
    },
    {
      title: "Angler’s Trial",
      description:
        "Problem: I wanted a front-end project that tested timing mechanics, game state, and DOM-driven UI without relying on a framework. Approach: I built a retro fishing mini-game with HTML, CSS, JavaScript, and jQuery, focusing on round progression and pixel-style interactions. Result: I delivered a playable experience that highlights creative UI logic, responsive feedback, and attention to detail.",
      image: "/projects/angler.png",
      tags: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      github: "https://github.com/EunsuhJeon/js-mini-app-2",
      demo: "https://rawcdn.githack.com/EunsuhJeon/js-mini-app-2/main/index.html"
    }
  ];

  return /* @__PURE__ */ jsx("section", { id: "projects", className: "py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center", children: "Featured Projects" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto", children: "A selection of recent projects that showcase my skills and experience" }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth -mx-6 px-6 lg:-mx-8 lg:px-8", children: projects.map((project, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col flex-shrink-0 w-[85%] sm:w-[70%] md:w-[48%] lg:w-[32%] snap-start",
        children: [
          /* @__PURE__ */ jsx("div", { className: "relative h-48 bg-gray-200 overflow-hidden", children: /* @__PURE__ */ jsx(
            ImageWithFallback,
            {
              src: project.image,
              alt: project.title,
              className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: project.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 flex-grow text-sm leading-relaxed", children: project.description }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: project.tags.map((tag) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm",
                children: tag
              },
              tag
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "outline",
                  className: "flex-1 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
                  asChild: true,
                  children: /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: project.github,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        /* @__PURE__ */ jsx(Github, { size: 16, className: "mr-2" }),
                        "Code"
                      ]
                    }
                  )
                }
              ),
              project.demo && /* @__PURE__ */ jsx(
                Button,
                {
                  className: "flex-1 bg-gray-900 hover:bg-gray-800 text-white",
                  asChild: true,
                  children: /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: project.demo,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        /* @__PURE__ */ jsx(ExternalLink, { size: 16, className: "mr-2" }),
                        "Live Demo"
                      ]
                    }
                  )
                }
              )
            ] })
          ] })
        ]
      },
      index
    )) })
  ] }) });
}
export {
  Projects
};
