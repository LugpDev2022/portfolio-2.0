import { StaticImageData } from 'next/image';

import todoApp from '../public/projects/todoApp.png';
import adviceApp from '../public/projects/todoApp.png';
import timeApp from '../public/projects/todoApp.png';

type Project = {
  title: string;
  image: StaticImageData;
  demoUrl: string;
  githubUrl?: string;
};

const projectsArray: Array<Project> = [
  {
    title: 'Todo App',
    image: todoApp,
    demoUrl: 'https://lugp-todo-app.netlify.app/',
    githubUrl: 'https://github.com/LugpDev2022/todo-app',
  },
  {
    title: 'Advice App',
    image: adviceApp,
    demoUrl: 'https://advice-generator-lugpdev2022.netlify.app/',
    githubUrl: 'https://github.com/LugpDev2022/advice-generator',
  },
  {
    title: 'Time App',
    image: timeApp,
    demoUrl: 'https://time-app-lugpdev2022.netlify.app/',
    githubUrl: 'https://github.com/LugpDev2022/time-app',
  },
  {
    title: 'Test',
    image: timeApp,
    demoUrl: 'https://time-app-lugpdev2022.netlify.app/',
    githubUrl: 'https://github.com/LugpDev2022/time-app',
  },
  {
    title: 'Test2',
    image: timeApp,
    demoUrl: 'https://time-app-lugpdev2022.netlify.app/',
    githubUrl: 'https://github.com/LugpDev2022/time-app',
  },
  {
    title: 'Test3',
    image: timeApp,
    demoUrl: 'https://time-app-lugpdev2022.netlify.app/',
    githubUrl: 'https://github.com/LugpDev2022/time-app',
  },
];

export default projectsArray;
