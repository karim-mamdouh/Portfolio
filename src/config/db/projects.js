//Skills images
import html5 from "../../assets/images/skills/html5.png";
import css3 from "../../assets/images/skills/css3.png";
import angular from "../../assets/images/skills/angular.png";
import ts from "../../assets/images/skills/typescript.png";
import js from "../../assets/images/skills/javascript.png";
import bs from "../../assets/images/skills/bootstrap.png";
import reactjs from "../../assets/images/skills/reactjs.png";
import sass from "../../assets/images/skills/sass.png";
// import cSharp from "../../assets/images/skills/csharp.png";
import primeng from "../../assets/images/skills/primeng.png";
import pwa from "../../assets/images/skills/pwa.png";
import firebase from "../../assets/images/skills/firebase.png";
import ngrx from "../../assets/images/skills/ngrx.svg";
import redux from "../../assets/images/skills/redux.svg";
import reactform from "../../assets/images/skills/react_hook_form.png";
import i18n from "../../assets/images/skills/i18n.png";
import npmlogo from "../../assets/images/skills/npm.png";
//Project images
import cards from "../../assets/images/projects/Cards Memory Game.png";
import paws from "../../assets/images/projects/Happy Paws.png";
import noice from "../../assets/images/projects/NOICELAND.png";
import personal from "../../assets/images/projects/Personal Landing Page.png";
import pomodoro from "../../assets/images/projects/Pomodoro Timer.png";
import todo from "../../assets/images/projects/To-Do List.png";
import yummy from "../../assets/images/projects/Yummy Taste.png";
import crud from "../../assets/images/projects/CRUD Operations.png";
import npm from "../../assets/images/projects/npm.webp";

let idCounter = 0;
//Factory function for project object
const projectGenerator = (
  id,
  name,
  description,
  image,
  link,
  repo,
  technologies
) => ({
  id,
  name,
  description,
  image,
  link,
  repo,
  technologies,
});
//Factory function for technology object
const techGenerator = (image, name, link) => ({
  image,
  name,
  link,
});
//Array of projects
export const projects = [
  //ngx-lite-video package
  projectGenerator(
    idCounter,
    "ngx-lite-video",
    "Angular package for lazy loading embedded YouTube and Vimeo videos, improving page speed and user experience.",
    npm,
    "https://www.npmjs.com/package/ngx-lite-video",
    "https://github.com/karim-mamdouh/ngx-lite-video",
    [
      techGenerator(npmlogo, "npm", "https://www.npmjs.com/"),
      techGenerator(angular, "Angular", "https://angular.io/"),
      techGenerator(ts, "TypeScript", "https://www.typescriptlang.org/"),
      techGenerator(sass, "Sass", "https://sass-lang.com/"),
    ]
  ),
  //Happy Paws project
  projectGenerator(
    ++idCounter,
    "Happy Paws",
    "Angular pet platform application with all services and supplies for all pet owners",
    paws,
    "https://karim-mamdouh.github.io/Happy-Paws/",
    "https://github.com/karim-mamdouh/Happy-Paws",
    [
      techGenerator(angular, "Angular", "https://angular.io/"),
      techGenerator(ts, "TypeScript", "https://www.typescriptlang.org/"),
      techGenerator(firebase, "Firebase", "https://firebase.google.com/"),
      techGenerator(
        html5,
        "HTML5",
        "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
      ),
      techGenerator(sass, "Sass", "https://sass-lang.com/"),
      techGenerator(bs, "Bootstrap", "https://getbootstrap.com/"),
      techGenerator(pwa, "PWA", "https://web.dev/progressive-web-apps/"),
      techGenerator(ngrx, "NgRx", "https://ngrx.io/"),
      techGenerator(primeng, "PrimeNG", "http://primefaces.org/primeng/"),
    ]
  ),
  //Yummy-taste project
  projectGenerator(
    ++idCounter,
    "Yummy🍽Taste",
    "Recipes web application where you can view and save your favourite recipes",
    yummy,
    "https://karim-mamdouh.github.io/Yummy-Taste-Angular/",
    "https://github.com/karim-mamdouh/Yummy-Taste-Angular",
    [
      techGenerator(angular, "Angular", "https://angular.io/"),
      techGenerator(ts, "TypeScript", "https://www.typescriptlang.org/"),
      techGenerator(
        html5,
        "HTML5",
        "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
      ),
      techGenerator(sass, "Sass", "https://sass-lang.com/"),
      techGenerator(bs, "Bootstrap", "https://getbootstrap.com/"),
      techGenerator(pwa, "PWA", "https://web.dev/progressive-web-apps/"),
      techGenerator(ngrx, "NgRx", "https://ngrx.io/"),
      techGenerator(primeng, "PrimeNG", "http://primefaces.org/primeng/"),
    ]
  ),
  //CRUD project
  projectGenerator(
    ++idCounter,
    "CRUD Operations",
    "Simple crud operations app using Redux as state manegement, Create, View, Update and Delete users",
    crud,
    "http://karim-mamdouh.github.io/CRUD-Operations/",
    "https://github.com/karim-mamdouh/CRUD-Operations",
    [
      techGenerator(reactjs, "React JS", "https://reactjs.org/"),
      techGenerator(redux, "Redux", "https://redux.js.org/"),
      techGenerator(i18n, "i18next", "https://www.i18next.com/"),
      techGenerator(
        reactform,
        "React Hook Form",
        "https://react-hook-form.com/"
      ),
      techGenerator(js, "JavaScript", "https://www.javascript.com/"),
      techGenerator(sass, "Sass", "https://sass-lang.com/"),
    ]
  ),
  //Card game project
  projectGenerator(
    ++idCounter,
    "Card Game",
    "Memory card responsive game using native technologies",
    cards,
    "https://karim-mamdouh.github.io/Playing-Cards/",
    "https://github.com/karim-mamdouh/Playing-Cards",
    [
      techGenerator(
        html5,
        "HTML5",
        "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
      ),
      techGenerator(
        css3,
        "CSS3",
        "https://developer.mozilla.org/en-US/docs/Web/CSS"
      ),
      techGenerator(js, "JavaScript", "https://www.javascript.com/"),
    ]
  ),
  //NOICELAND project
  projectGenerator(
    ++idCounter,
    "NOICELAND",
    "Simple responsive landing page",
    noice,
    "https://karim-mamdouh.github.io/NOICELAND/",
    "https://github.com/karim-mamdouh/NOICELAND",
    [
      techGenerator(
        html5,
        "HTML5",
        "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
      ),
      techGenerator(
        css3,
        "CSS3",
        "https://developer.mozilla.org/en-US/docs/Web/CSS"
      ),
      techGenerator(bs, "Bootstrap", "https://getbootstrap.com/"),
    ]
  ),
  //Personal project
  projectGenerator(
    ++idCounter,
    "Personal",
    "Simple responsive landing page",
    personal,
    "https://karim-mamdouh.github.io/Personal/",
    "https://github.com/karim-mamdouh/Personal",
    [
      techGenerator(
        html5,
        "HTML5",
        "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
      ),
      techGenerator(
        css3,
        "CSS3",
        "https://developer.mozilla.org/en-US/docs/Web/CSS"
      ),
      techGenerator(bs, "Bootstrap", "https://getbootstrap.com/"),
    ]
  ),
  //Tasks manager project
  projectGenerator(
    ++idCounter,
    "Tasks Manager",
    "Simple responsive tasks manager using native technologies",
    todo,
    "https://karim-mamdouh.github.io/Tasks-Manager/",
    "https://github.com/karim-mamdouh/Tasks-Manager",
    [
      techGenerator(
        html5,
        "HTML5",
        "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
      ),
      techGenerator(
        css3,
        "CSS3",
        "https://developer.mozilla.org/en-US/docs/Web/CSS"
      ),
      techGenerator(js, "JavaScript", "https://www.javascript.com/"),
    ]
  ),
  //Pomodoro timer project
  projectGenerator(
    ++idCounter,
    "Pomodoro Timer",
    "Pomodoro responsive timer using native technologies",
    pomodoro,
    "https://karim-mamdouh.github.io/Pomodoro-Timer/",
    "https://github.com/karim-mamdouh/Pomodoro-Timer",
    [
      techGenerator(
        html5,
        "HTML5",
        "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
      ),
      techGenerator(
        css3,
        "CSS3",
        "https://developer.mozilla.org/en-US/docs/Web/CSS"
      ),
      techGenerator(js, "JavaScript", "https://www.javascript.com/"),
    ]
  ),
];
