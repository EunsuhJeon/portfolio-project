import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };
  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" }
  ];
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToSection("hero"),
              className: "text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors",
              children: "Portfolio"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToSection(link.id),
              className: "text-gray-600 hover:text-gray-900 transition-colors",
              children: link.label
            },
            link.id
          )) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              className: "md:hidden p-2 text-gray-600 hover:text-gray-900",
              children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }),
        isMobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden py-4 border-t border-gray-200", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: navLinks.map((link) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scrollToSection(link.id),
            className: "text-left text-gray-600 hover:text-gray-900 transition-colors",
            children: link.label
          },
          link.id
        )) }) })
      ] })
    }
  );
}
export {
  Navigation
};
