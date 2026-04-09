import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";

const CONTACT_EMAIL = "lilyjun98@gmail.com";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(
      name ? `Portfolio inquiry from ${name}` : "Portfolio inquiry"
    );
    const body = encodeURIComponent(
      [`From: ${name || "(not provided)"}`, `Reply-to: ${email || "(not provided)"}`, "", message].join("\n")
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center", children: "Get In Touch" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto", children: "I'm always open to discussing new projects, opportunities, or just having a chat" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Contact Information" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `mailto:${CONTACT_EMAIL}`,
              className: "flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors group",
              children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg border border-gray-200 group-hover:border-gray-900 transition-colors", children: /* @__PURE__ */ jsx(Mail, { size: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: "Email" }),
                  /* @__PURE__ */ jsx("p", { children: CONTACT_EMAIL })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://github.com/EunsuhJeon",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors group",
              children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg border border-gray-200 group-hover:border-gray-900 transition-colors", children: /* @__PURE__ */ jsx(Github, { size: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: "GitHub" }),
                  /* @__PURE__ */ jsx("p", { children: "github.com/EunsuhJeon" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.linkedin.com/in/eunsuh-jeon-52687a401/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors group",
              children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg border border-gray-200 group-hover:border-gray-900 transition-colors", children: /* @__PURE__ */ jsx(Linkedin, { size: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: "LinkedIn" }),
                  /* @__PURE__ */ jsx("p", { children: "linkedin.com/in/eunsuh-jeon-52687a401" })
                ] })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: "Send a Message" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-6", children: "Submitting opens your email app with this message addressed to me. If nothing opens, email me directly using the address on the left." }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-gray-700 mb-2", children: "Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "name",
                name: "name",
                required: true,
                className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900",
                placeholder: "Your name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-gray-700 mb-2", children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                required: true,
                className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900",
                placeholder: "your.email@example.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-gray-700 mb-2", children: "Message" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                required: true,
                rows: 5,
                className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none",
                placeholder: "Your message..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              type: "submit",
              size: "lg",
              className: "w-full bg-gray-900 hover:bg-gray-800 text-white py-6",
              children: [
                /* @__PURE__ */ jsx(Send, { size: 18, className: "mr-2" }),
                "Open in email app"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Contact
};
