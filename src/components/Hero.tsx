export default function Hero() {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 custom-gradient">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white">
          Hi, I’m Chaitanya Kulkarni
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl mb-6">
          A Full Stack Developer passionate about building web apps with React,
          Next.js, Node.js, PHP, and modern headless CMS technologies.
        </p>
        <a
          href="/projects"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>
    )
  }
  