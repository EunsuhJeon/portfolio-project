import { jsx, jsxs } from "react/jsx-runtime";
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
function Projects() {
  const projects = [
    {
      title: "Retail Dashboard App",
      description: "Developed a full-stack retail dashboard application using Vanilla JavaScript, Node.js, and Express.js, implementing product browsing, shopping cart, checkout, and analytics features across integrated frontend and backend systems.",
      image: "/projects/retailhub.png",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "REST API", "Chart.js"],
      github: "https://github.com/EunsuhJeon/retail-dashboard-app-server",
      // demo: "https://example.com"
    },
    {
      title: "Learnify CourseHub",
      description: "Designed and developed a RESTful backend API for an online course platform using PHP, MySQL, and PDO, supporting user registration, authentication, course enrollment, shopping cart management, and paginated course search with optimized queries.",
      image: "/projects/learnify.png",
      tags: ["PHP", "MySQL", "PDO", "REST API", "MVC Architecture", "Session Authentication"],
      github: "https://github.com/EunsuhJeon/learnify-coursehub-server",
      // demo: "https://example.com"
    },
    {
      title: "Angler’s Trial",
      description: "Retro-style fishing mini-game with timing-based mechanics, round progression, and interactive pixel-art gameplay, showcasing creative front-end development skills.",
      image: "/projects/angler.png",
      tags: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      github: "https://github.com/EunsuhJeon/js-mini-app-2.git"
      // demo: "https://example.com"
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center", children: "Featured Projects" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto", children: "A selection of recent projects that showcase my skills and experience" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col",
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
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 flex-grow", children: project.description }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: project.tags.map((tag) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm",
                children: tag
              },
              tag
            )) }),
            /* 라이브 데모 URL 없음: Demo 버튼 주석 처리됨 */
            /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                className: "w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
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
            ) })
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
