function ContactSection() {
  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <a
            href="mailto:krishnakishoregedela@gmail.co"
            className="
              flex items-center gap-4
              bg-gray-800 hover:bg-gray-700
              transition-colors
              p-6 rounded-xl
            "
          >
            <div className="bg-blue-600 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium break-all">
                krishnakishoregedela@gmail.co
              </p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/krishna218"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-4
              bg-gray-800 hover:bg-gray-700
              transition-colors
              p-6 rounded-xl
            "
          >
            <div className="bg-blue-500 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.52v16H.22V8zM8.09 8h4.33v2.16h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.52v-7.6c0-1.8-.03-4.12-2.5-4.12-2.5 0-2.88 1.95-2.88 3.97V24H8.09V8z" />
              </svg>
            </div>

            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="font-medium">
                linkedin.com/in/krishna218
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
