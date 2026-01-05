export default function AboutPage() {
  return (
    <main className="px-8 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-gray-300 mb-4">
        I’m Ebubechukwu Chiemeka, a full-stack developer who enjoys turning ideas
        into clean, functional, and good-looking websites. I like working on
        both the frontend and backend, so I can handle a project from start to
        finish.
      </p>

      <p className="text-gray-300 mb-4">
        I pay a lot of attention to design and user experience. I enjoy playing
        around with different layouts, colors, and styles — that’s why you’ll
        see a lot of variety in my projects.
      </p>

      <p className="text-gray-300 mb-8">
        Whether you need a simple landing page, a full website, or something
        custom with a bit of backend logic, I’ve got you covered.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What I Work With</h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB / MySQL</li>
      </ul>
    </main>
  );
}