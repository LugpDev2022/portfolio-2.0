'use client';

import Project from '@/components/Project';
import projectsArray from '@/projectsArray';

const page = () => (
  <div className='min-h-[calc(100vh-112px)] flex items-center justify-center'>
    <div
      className={`
        animate__animated
        animate__fadeIn
        flex
        flex-row
        flex-wrap
        justify-center
        p-7
        gap-7
        lg:p-10
        lg:gap-10
      `}
    >
      <h3 className='subtitle sm:hidden w-full text-center'>Portfolio</h3>
      {projectsArray.map((project, i) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  </div>
);

export default page;
