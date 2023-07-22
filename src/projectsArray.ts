import { StaticImageData } from 'next/image';

import todoApp from '../public/projects/todoApp.png';
import adviceApp from '../public/projects/adviceApp.png';
import timeApp from '../public/projects/timeApp.png';
import calculator from '../public/projects/calculator.png';
import newspage from '../public/projects/newspage.png';
import notFound from '../public/projects/notFound.png';

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
    title: 'Calculator',
    image: calculator,
    demoUrl: 'https://lugp-calculator.netlify.app/',
    githubUrl: 'https://github.com/LugpDev2022/calculator',
  },
  {
    title: 'News Page',
    image: newspage,
    demoUrl: 'https://news-page-lugpdev2022.netlify.app/',
    githubUrl: 'https://github.com/LugpDev2022/news-page',
  },
  {
    title: '404 Not Found',
    image: notFound,
    demoUrl: 'https://lugp-not-found.netlify.app/',
    githubUrl: 'https://github.com/LugpDev2022/not-found',
  },
];

export default projectsArray;
