import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const profileImageSrc = `${import.meta.env.BASE_URL}images/profile.JPG`;

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "hero", className: "min-h-screen flex items-center justify-center bg-white pt-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: profileImageSrc,
        alt: "Eunsuh Jeon",
        width: 160,
        height: 160,
        className: "w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-gray-100 shadow-md",
        decoding: "async",
        fetchPriority: "high"
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl font-bold text-gray-900 mb-4", children: "Eunsuh Jeon" }),
    /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl text-gray-600 mb-6", children: "Web Developer" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto", children: "Building modern, scalable web applications with a focus on clean code, user experience, and performance optimization" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          size: "lg",
          className: "bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg",
          onClick: () => scrollToSection("projects"),
          children: [
            "View Projects",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2", size: 20 })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "lg",
          className: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg",
          onClick: () => scrollToSection("contact"),
          children: "Get In Touch"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-6", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://github.com/EunsuhJeon",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-gray-600 hover:text-gray-900 transition-colors",
          "aria-label": "GitHub",
          children: /* @__PURE__ */ jsx(Github, { size: 24 })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.linkedin.com/in/eunsuh-jeon-52687a401/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-gray-600 hover:text-gray-900 transition-colors",
          "aria-label": "LinkedIn",
          children: /* @__PURE__ */ jsx(Linkedin, { size: 24 })
        }
      )
    ] })
  ] }) }) });
}
export {
  Hero
};
