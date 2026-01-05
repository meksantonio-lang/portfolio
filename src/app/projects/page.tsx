const projects = [
  {
    title: "Modern Landing Page",
    style: "Clean • Minimal • Tailwind",
    image: "/projects/landing.png",
  },
  {
    title: "Dark Portfolio",
    style: "Dark UI • Bold Typography",
    image: "/projects/dark.png",
  },
  {
    title: "Creative Website",
    style: "Colorful • Experimental CSS",
    image: "/projects/creative.png",
  },
  {
    title: "Business Website",
    style: "Professional • Responsive",
    image: "/projects/business.png",
  },
  {
    title: "80’s Style Website",
    style: "Retro • Neon • Bold Colors",
    image: "/projects/eighties.png",
  },
  {
    title: "Fashion Website",
    style: "Elegant • Modern • Visual-first",
    image: "/projects/fashion.png",
  },
];

export default function ProjectsPage() {
  return (
    <main className="px-8 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>

      <p className="text-gray-300 mb-10 max-w-2xl">
        Here are some different styles and designs I’ve worked on. Each project
        shows a different approach to layout, color, and overall vibe. If you
        see something you like, I can build something similar — or better — for
        you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
  key={index}
  className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition shadow-lg hover:shadow-gray-700"
>
            <div className="h-40 rounded mb-4 overflow-hidden relative group">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-105 transition"
  />
</div>

            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{project.style}</p>
          </div>
        ))}
      </div>
    </main>
  );
}