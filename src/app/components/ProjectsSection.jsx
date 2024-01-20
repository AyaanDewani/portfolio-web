"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "PathVisualizer",
    description: "This project employs Dijkstra's algorithm to illustrate the shortest path between designated start and end points on a grid. Users have the capability to insert obstacles on the grid, and the algorithm then displays the most efficient route. (Note: The design is not optimized for mobile phones or tablets and preview for this project is now available).",
    image: "/images/projects/pathvis.jpg",
    tag: ["All", "Web"],
    gitUrl: 'https://github.com/AyaanDewani/PathFindingVisualizer',
    previewUrl: "https://path-finding-visualizer-mocha.vercel.app/",
  },
  {
    id: 2,
    title: "Determination of the type of Star",
    description: "This project uses Machine Learning to distinguish whether the star, based on the input given, is a Gamma star or a Hadron star.",
    image: "/images/projects/stars_ML.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: 'https://github.com/AyaanDewani/Interacting_particle_in_star',
    previewUrl: "https://github.com/AyaanDewani/Interacting_particle_in_star",
  },
  {
    id: 3,
    title: "Discord Clone",
    description:
      "This project uses React JS along with Tailwind CSS, Prisma, Shadcn, etc... to make a replica of the popular gaming, meeting platform, Discord. Notable features include, creation of servers, voice and video channels, invite links, etc...",
    image: "/images/projects/disc_clone.jpg",
    tag: ["All", "Web"],
    gitUrl: '/',
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Prediction of Bike use",
    description:
      "This project uses Machine Learning to distinguish whether, based on the input data given, if people would prefer renting a bike over walking (This model was trained on the data from South Korea.)",
    image: "/images/projects/bike_ml.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: '/',
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Type of Seed",
    description:
      "This project uses Machine Learning to distinguish, based on the input data given, the type of seed. Inputs for the data include: Area, Girth, Asymmetry, Width, Height, Compactness, etc...",
    image: "/images/projects/ML.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: 'https://github.com/AyaanDewani/Seeds_ML',
    previewUrl: "https://github.com/AyaanDewani/Seeds_ML",
  },
];

const ProjectsSection = () => {
  const [ tag, setTag ] = useState('All')

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name='Machine Learning' isSelected={tag === "Machine Learning"} />
        <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === "Web"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 ">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            // tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
