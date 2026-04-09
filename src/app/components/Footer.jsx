import { jsx, jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail } from "lucide-react";
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-900 text-white py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold mb-2", children: "Eunsuh Jeon" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Web Developer" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "mailto:lilyjun98@gmail.com",
            className: "text-gray-400 hover:text-white transition-colors",
            "aria-label": "Email",
            children: /* @__PURE__ */ jsx(Mail, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://github.com/EunsuhJeon",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-gray-400 hover:text-white transition-colors",
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
            className: "text-gray-400 hover:text-white transition-colors",
            "aria-label": "LinkedIn",
            children: /* @__PURE__ */ jsx(Linkedin, { size: 24 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 pt-8 border-t border-gray-800 text-center text-gray-400", children: /* @__PURE__ */ jsxs("p", { children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Eunsuh Jeon. All rights reserved."
    ] }) })
  ] }) });
}
export {
  Footer
};
