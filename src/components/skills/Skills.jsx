import React from 'react';
import htmlIcon from './assets/html_icon.png';
import cssIcon from './assets/css_icon.png';
import reactIcon from './assets/react_icon.png';
import tailwindIcon from './assets/tailwind_icon.png';
import bootstrapIcon from './assets/bootstrap_icon.png';
import daisyIcon from './assets/daisy_icon.png';
import jsIcon from './assets/js_icon.png';
import gitIcon from './assets/git_icon.png';
import materialIcon from './assets/material_icon.png';
import nodeIcon from './assets/node_icon.png';
import storybookIcon from './assets/storybook_icon.png';

import Skill from './skill/Skill';

const skillsUtils = [
  { name: 'html', icon: htmlIcon },
  { name: 'css', icon: cssIcon },
  { name: 'javascript', icon: jsIcon },
  { name: 'react', icon: reactIcon },
  { name: 'node', icon: nodeIcon },
  { name: 'bootstrap', icon: bootstrapIcon },
  { name: 'tailwind', icon: tailwindIcon },
  { name: 'daisy', icon: daisyIcon, imageWidth: '64px' },
  { name: 'material', icon: materialIcon, imageWidth: '64px' },
  { name: 'storybook', icon: storybookIcon, imageWidth: '64px' },
  { name: 'git', icon: gitIcon },
];

const Skills = () => {
  return (
    <div className='mt-40'>
      <h2 className='text-3xl font-semibold text-center mb-6'>Skills</h2>
      <div className='grid grid-cols-4 mx-80 justify-items-center text-center'>
        {skillsUtils.map((skill, index) => (
          <Skill name={skill.name} icon={skill.icon} imageWidth={skill.imageWidth} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Skills;
