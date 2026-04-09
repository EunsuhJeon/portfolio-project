import { jsx, jsxs } from "react/jsx-runtime";
import { Download } from "lucide-react";

const RESUME_FILENAME = "Eunsuh-Jeon-Resume.pdf";

function resumePdfHref() {
  const base = import.meta.env.BASE_URL ?? "/";
  return base.endsWith("/") ? `${base}resume.pdf` : `${base}/resume.pdf`;
}

async function downloadResumeFile() {
  const href = resumePdfHref();
  try {
    const response = await fetch(href, { credentials: "same-origin" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = RESUME_FILENAME;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
  } catch {
    window.open(href, "_blank", "noopener,noreferrer");
  }
}

function Resume() {
  return /* @__PURE__ */ jsx("section", { id: "resume", className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "inline-flex items-center justify-center w-20 h-20 bg-gray-900 rounded-2xl mb-6 text-white hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 transition-colors cursor-pointer",
        onClick: () => void downloadResumeFile(),
        "aria-label": "Download resume PDF",
        children: /* @__PURE__ */ jsx(Download, { className: "text-white", size: 40, "aria-hidden": true })
      }
    ),
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Resume" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8", children: "Download my resume to learn more about my experience, education, and professional background" }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-50 rounded-2xl p-8 md:p-12", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-left", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Experience" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "2.5+ years full-stack web development experience at Pefer Co., Ltd. (Korea), building and maintaining enterprise applications using Java, Spring, JavaScript, REST APIs, and PostgreSQL" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Education" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Completed 6 months of coursework and now pursuing the work placement phase of a 1-year Web Development Co-op Program at Tamwood College, Vancouver; holding a Bachelor of Arts in Culinary Arts from Woosong University, Korea." })
      ] }),
      /* Certifications (주석 처리)
      jsxs("div", { children: [
        jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Certifications" }),
        jsx("p", { className: "text-gray-600", children: "AWS Certified Developer, Google Cloud Professional" })
      ] })
      */
    ] }) })
  ] }) }) });
}
export {
  Resume
};
