import React from 'react';
import SkillListItem from './SkillListItem';


function SkillList({ skills }) {
  const skillItems = skills.map((skill, index) => (
    <SkillListItem key={index} skill={skill} />
  ));

  return (
    <ul>
      {skillItems}
    </ul>
  );
}

export default SkillList;