export default function ContactPage() {
  return (
    <main className="px-8 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <p className="text-gray-300 mb-6">
        Heyy, thanks for stopping by! If you liked what you saw and want your
        website to look like one of these — or something totally unique — hit me
        up. I’ll make it happen.
      </p>

      <p className="text-gray-300 mb-8">
        Full-stack development, clean design, responsive layouts — whatever you
        need, I got you.
      </p>

      <div className="flex flex-col gap-4 max-w-md">
        <a
          href="mailto:meksantonio@gmail.com"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded text-center transition"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded text-center transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/meksantonio-lang"
          target="_blank"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded text-center transition"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}