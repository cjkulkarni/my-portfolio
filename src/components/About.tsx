import Image from 'next/image';


export default function About() {
    return (
      <section className=' mx-auto flex max-w-6xl'>
        <div className="w-1/2">
      <Image
        src="/user.jpg"
        alt="My Profile"
        width={400}
        height={400}
        className="rounded-[15rem] shadow-lg object-cover mx-auto "
      />
      </div>
      <div className="px-6 py-16 bg-white text-left  w-1/2 ">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-7">
          I’m a Full Stack Developer with 3.5+ years of experience in web
          development. I’ve worked with a wide range of technologies including
          Core PHP, Laravel, CodeIgniter, WordPress, React, Vue, Node.js, and
          CMS like Strapi & Sanity.
          <br />
          <br />
          I enjoy building clean and scalable applications and learning new
          technologies to improve my craft every day.
        </p>
      </div>
      
      </section>
    )
  }
  