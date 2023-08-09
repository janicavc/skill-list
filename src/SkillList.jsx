import React from 'react'
import SkillListItem from './SkillListItem'
import "./SkillList.css";

export default function SkillList({ skills }) {
  const skillListItem = skills.map((s) => (
    <SkillListItem skill={s}/>
  ));
  return <u className='SkillList'>{skillListItem}</u>
}

