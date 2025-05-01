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
      title: "Credit Scoring Model",
      description: "Developed a machine learning model to classify borrower risk using historical financial and behavioral data.",
      image: "https://media.istockphoto.com/id/1126382415/photo/credit-score-concept-chart-with-keywords-and-icons-on-white-background.jpg?s=2048x2048&w=is&k=20&c=fKg2FRy3dedg7yB1W6MdamDoPWz-Pp-JRl3_1Lz_hpg=",
      tags: ["Python", "Scikit-learn", "Pandas"]
    },
    {
      title: "AI Powered Email Summarizer and Classifier",
      description: "Built a personal AI assistant using OpenAI and the Gmail API to fetch, classify (e.g., Work, Promotions) and summarize emails.",
      image: "https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_1280.png",
      tags: ["OpenAI API", "Streamlit","GmailAPI", "OAuth2"]
    },
    {
      title: "Real-Time Stock Market Sentiment Analyzer",
      description: "Created a cloud-integrated dashboard that performs real-time sentiment analysis on tweets and news about top companies using HuggingFace Transformers.",
      image: "https://unsplash.com/photos/a-pair-of-glasses-sitting-on-top-of-a-laptop-computer-fchVIvuMGBI",
      tags: ["Tweepy", "NewsAPI", "HuggingFace", "MongoDB Atlas","Flask",]
    },

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
