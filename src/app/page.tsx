"use client";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="px-6 md:px-8 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Heyy 👋, welcome to my portfolio
      </h1>

      <p className="text-lg text-gray-300 mb-4">
        I hope you're doing okay 🤗 Feel free to check out my projects — you’ll see different shades and
        styles of my work. I love experimenting with design and making websites
        look clean, modern, and unique.
      </p>

      <p className="text-lg text-gray-300 mb-4">
        I’m pretty good at what I do 😌. If you want your website to look like
        one of those, or you need something custom, just hit me up.
      </p>

      <p className="text-lg text-gray-300 mb-12">
        Frontend, backend, full-stack — I’m all-in. Whatever you need,
        I got you.
      </p>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}