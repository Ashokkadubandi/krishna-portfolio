// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src//*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base
        background: "#0B1120",   // deep slate (premium dark)
        surface: "#111827",      // cards, sections
        border: "#1F2937",

        // Text
        primary: "#F9FAFB",      // main text
        secondary: "#CBD5E1",    // paragraphs
        muted: "#94A3B8",        // labels, hints

        // Brand / Authority
        brand: "#2563EB",        // confident blue
        brandSoft: "#1E40AF",

        // Data semantics
        success: "#22C55E",      // positive metrics
        warning: "#EAB308",      // anomalies
        danger: "#EF4444",       // errors (rare use)

        // Extras
        chartBlue: "#38BDF8",
        chartPurple: "#A78BFA",
      },
    },
  },
  plugins: [],
}

