import React from 'react';
import './archetypeInfo.css';
interface ArchetypeProps {
  archetypeName: string;
  archetypeDescription: string;
  archetypeImage: string;
}

const ArchetypeInfo: React.FC<ArchetypeProps> = ({
  archetypeName,
  archetypeDescription,
  archetypeImage,
}) => {
  return (
    
    <div className="archetype-container">
      <h1 className = "h1Custom" >YOUR ARCHETYPE</h1>
      <div className="archetype-image">
        <img src={archetypeImage} alt={`${archetypeName} image`} />
      </div>
      <h2>You are: {archetypeName}</h2>
      <p>{archetypeDescription}</p>
    </div>
  );
};

export default ArchetypeInfo;