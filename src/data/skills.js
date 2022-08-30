//Images
import html5 from "../assets/images/skills/html5.png";
import css3 from "../assets/images/skills/css3.png";
import angular from "../assets/images/skills/angular.png";
import ts from "../assets/images/skills/typescript.png";
import js from "../assets/images/skills/javascript.png";
import bs from "../assets/images/skills/bootstrap.png";
import tw from "../assets/images/skills/tailwind.png";
import reactjs from "../assets/images/skills/reactjs.png";
import sass from "../assets/images/skills/sass.png";
import cSharp from "../assets/images/skills/csharp.png";
import git from "../assets/images/skills/git.png";

let idCounter = 0;
//Factory function for skill object
const skillGenerator = (name, image) => {
  return {
    id: idCounter++,
    name: name,
    image: image,
  };
};
//Array of skills
export const skills = {
  frameworks: [
    skillGenerator("Angular", angular),
    skillGenerator("React JS", reactjs),
  ],
  languages: [
    skillGenerator("JavaScript", js),
    skillGenerator("TypeScript", ts),
    skillGenerator("C#", cSharp),
    skillGenerator("HTML 5", html5),
    skillGenerator("CSS 3", css3),
    skillGenerator("SASS", sass),
  ],
  tools: [
    skillGenerator("BootStrap", bs),
    skillGenerator("Tailwind CSS", tw),
    skillGenerator("Git", git),
  ],
};
