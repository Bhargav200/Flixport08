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
      image: "https://plus.unsplash.com/premium_photo-1684179639963-e141ce2f8074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Credit Scoring Model",
      description: "Developed a machine learning model to classify borrower risk using historical financial and behavioral data.",
      image: "https://www.livemint.com/lm-img/img/2025/02/10/600x338/3-0-103769024-iStock-1200726951-0_1679850499811_1739172730242.jpg",
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
      image: "https://images.unsplash.com/photo-1640451859877-1374a1155215?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
