'use client';

import { useState } from 'react';

import SliderControl from '@/components/SliderControl';
import Project from '@/components/Project';

import projectsArray from '@/projectsArray';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [shownImage, setShownImage] = useState<number>(0);

  return (
    <div
      className={`
        flex
        flex-col
        gap-12
        items-center
        justify-center
        h-[calc(100vh-64px-72px)] 
        sm:h-[calc(100vh-40px-72px)]
        px-3
        animate__animated
        animate__fadeIn
      `}
    >
      {projectsArray.map((project, i) => (
        <Project
          key={project.title}
          {...project}
          githubUrl={project?.github}
          isHidden={shownImage !== i}
        />
      ))}

      <SliderControl handleChange={setShownImage} activeImage={shownImage} />
    </div>
  );
};

export default page;
