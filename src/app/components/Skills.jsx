import { jsx, jsxs } from "react/jsx-runtime";
import { Code2, Database, Wrench } from "lucide-react";
function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        "React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Chart.js"
      ]
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        "Java", "Spring Framework", "Node.js", "Express.js", "REST API", "MVC", "PostgreSQL", "MySQL", "Session Auth", "JWT"
      ]
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: [
        "Git", "GitHub", "Jira", "Postman", "Vite", "Netlify"
      ]
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center", children: "Skills & Tech Stack" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto", children: "Technologies and tools I use to bring ideas to life" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: skillCategories.map((category) => {
      const Icon = category.icon;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-gray-900 rounded-lg", children: /* @__PURE__ */ jsx(Icon, { className: "text-white", size: 24 }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900", children: category.title })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: category.skills.map((skill) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200",
                children: skill
              },
              skill
            )) })
          ]
        },
        category.title
      );
    }) })
  ] }) });
}
export {
  Skills
};
