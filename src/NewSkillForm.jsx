import React, { useState } from 'react';
import './NewSkillForm.css';

function NewSkillForm({ addSkill }) {
  const initialSkillState = {
    name: '',
    level: 3
  };

  const [formData, setFormData] = useState(initialSkillState);

  const handleNameChange = (event) => {
    setFormData({
      ...formData,
      name: event.target.value
    });
  };

  const handleLevelChange = (event) => {
    setFormData({
      ...formData,
      level: parseInt(event.target.value)
    });
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    addSkill(formData);
    setFormData(initialSkillState);
  };

  return (
    <form className="NewSkillForm" onSubmit={handleAddSkill}> 
      <label>Skill</label>
      <input
        type="text"
        className="NewSkillForm__input"
        name="name"
        value={formData.name}
        onChange={handleNameChange}
      /> 
      <label>Level</label>
      <select
        className="NewSkillForm__select"
        name="level"
        value={formData.level}
        onChange={handleLevelChange}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit" className="NewSkillForm__button">ADD SKILL</button>
    </form>
  );
}

export default NewSkillForm;