import { StaticImageData } from 'next/image';

import todoApp from '../public/projects/todoApp.png';
import adviceApp from '../public/projects/todoApp.png';
import timeApp from '../public/projects/todoApp.png';

type Project = {
  title: string;
  image: StaticImageData;
  url: string;
  github?: string;
};

const projectsArray: Array<Project> = [
  {
    title: 'Todo App',
    image: todoApp,
    url: 'https://lugp-todo-app.netlify.app/',
    github: 'https://github.com/LugpDev2022/todo-app',
  },
  {
    title: 'Advice App',
    image: adviceApp,
    url: 'https://advice-generator-lugpdev2022.netlify.app/',
    github: 'https://github.com/LugpDev2022/advice-generator',
  },
  {
    title: 'Time App',
    image: timeApp,
    url: 'https://time-app-lugpdev2022.netlify.app/',
    github: 'https://github.com/LugpDev2022/time-app',
  },
];

export default projectsArray;
