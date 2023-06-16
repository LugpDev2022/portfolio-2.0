'use client';

import Project from '@/components/Project';
import projectsArray from '@/projectsArray';

const Portfolio = () => (
  <main className='min-h-[calc(100vh-112px)] flex items-center justify-center animate__animated animate__fadeIn'>
    <div className='p-7 lg:p-10 basis-full xl:basis-4/5'>
      <h3 className='subtitle sm:hidden w-full text-center'>Portfolio</h3>
      <div
        className={`
        grid
        grid-cols-1
        justify-items-center
        gap-7
        sm:grid-cols-2
        lg:grid-cols-3
      `}
      >
        {projectsArray.map((project, i) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  </main>
);

export default Portfolio;
