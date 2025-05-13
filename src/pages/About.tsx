import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const TechIcon = ({ src, name }: { src: string; name: string }) => (
  <div className="bg-blue-900/30 p-4 rounded flex flex-col items-center gap-2 hover:bg-blue-800/30 transition-colors">
    <img src={src} alt={name} className="w-8 h-8" />
    <span className="text-sm">{name}</span>
  </div>
);

const SkillSection = ({ title, skills }: { title: string; skills: { name: string; icon: string }[] }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <TechIcon key={skill.name} src={skill.icon} name={skill.name} />
      ))}
    </div>
  </div>
);

const About = () => {
  const frontendSkills = [
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
    },
    {
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
    },
    {
      name: "Next.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "Tailwind CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
      name: "Redux",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
    }
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Express",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
    },
    {
      name: "GraphQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg"
    }
  ];

  const mlSkills = [
    {
      name: "TensorFlow",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg"
    },
    {
      name: "PyTorch",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg"
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
    },
    {
      name: "Scikit-learn",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
    },
    {
      name: "Pandas",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg"
    }
  ];

  const devOpsSkills = [
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
    }
  ];

  return (
    <div className="pt-20 px-4 md:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Resume View Section */}
        <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-green-900/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText size={24} className="text-green-400" />
              <h2 className="text-xl font-semibold text-white">My Resume</h2>
            </div>
            <div className="flex items-center gap-1"> {/* Reduced gap from 2 to 1 */}
              <a
                href="/RESUME NRLM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                <ExternalLink size={20} />
                <span>View Resume</span>
              </a>
              <a
                href="/RESUME NRLM.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-12 text-gray-300">
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>   
            <p className="leading-relaxed text-lg">
              I'm a passionate AI/ML Engineer and MERN Stack Developer with a strong command of AI tools, machine learning frameworks, and modern web technologies. 
              Passionate about AI, FinTech, and full-stack development, I specialize in building innovative, scalable solutions that drive impact. 
              With hands-on experience in AI/ML frameworks, I bring a unique blend of technical expertise and problem-solving creativity.
              As a Vibe Coder, I thrive in dynamic environments, quickly adapting to new challenges while continuously pushing the boundaries of technology.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Technical Skills</h2>
            <div className="space-y-8">
              <SkillSection title="Frontend Development" skills={frontendSkills} />
              <SkillSection title="Backend Development" skills={backendSkills} />
              <SkillSection title="Machine Learning & AI" skills={mlSkills} />
              <SkillSection title="DevOps & Cloud" skills={devOpsSkills} />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Intern Experience</h2>
            <div className="space-y-8">
              <div>
                 <h3 className="text-xl font-semibold text-white">Machine Learning Engineer Intern @ Devtern</h3>
                <p className="text-gray-400">May'23 - Jun'23</p>
                <p className="mt-2">Participated in Devtern's Internship Program, focusing on AI & Machine Learning, and Its frameworks.</p>
              </div>
              <div>
               <h3 className="text-xl font-semibold text-white">MERN Stack Intern @ Webstack Academy (WSA)</h3>
                <p className="text-gray-400">Aug'23 - Dec'2023</p>
                <p className="mt-2">Developed a full-stack restaurant website, including a secure payment page, using MongoDB, Express.js, React.js, and Node.js.</p>
                <p className="mt-2"> Implemented responsive UI, authentication, and real-time order tracking to enhance user experience.</p>
                <p className="mt-2"> Engaged in developing full-stack applications using MongoDB, Express.js, React.js, and Node.js.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
