import React from 'react';

const ProjectCard = ({ title, description, image, tags }: {
  title: string;
  description: string;
  image: string;
  tags: string[];
}) => (
  <div className="group relative h-[200px] min-w-[300px] cursor-pointer transition duration-200 ease-out md:h-[300px] md:min-w-[400px] hover:scale-105">
    <img
      src={image}
      alt={title}
      className="rounded-sm object-cover transition duration-200 ease-out group-hover:opacity-90 sm:group-hover:opacity-0 w-full h-full"
    />
    <div className="absolute top-0 z-10 h-full w-full rounded-sm bg-gradient-to-b from-transparent to-black opacity-100 transition duration-200 ease-out group-hover:opacity-100" />
    <div className="absolute bottom-0 left-0 right-0 top-0 z-20 flex flex-col justify-end p-6 opacity-0 transition duration-200 ease-out group-hover:opacity-100">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="text-gray-300 mt-2">{description}</p>
      <div className="flex gap-2 mt-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-blue-600 text-white text-sm rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Social Media App",
      description: "Real-time social platform with modern features",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1474&q=80",
      tags: ["React", "Firebase", "Tailwind"]
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard with AI-powered insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
      tags: ["Next.js", "Python", "TensorFlow"]
    }
  ];

  return (
    <div className="pt-20 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-white mb-8">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;