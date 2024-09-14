import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ArchetypeInfo from './archetypeInfo';

interface pointAssignment {
    weeb: number,
    yapper: number,
    sage: number,
    atlassian: number,
    money: number,
    skeptic: number,
    longAsItWorks: number,
    aesthetics: number,
};


const archetypes = {
  weeb: {
    name: 'The Weeb',
    description: '',
    image: 'https://via.placeholder.com/300x200', 
  },
  yapper: {
    name: 'The Yapper',
    description: '',
    image: 'https://via.placeholder.com/300x200',
  },
  sage: {
    name: 'The Sage',
    description: '',
    image: 'https://via.placeholder.com/300x200',
  },
  atlassian: {
    name: 'The Atlassian',
    description: '',
    image: 'https://via.placeholder.com/300x200',
  },
  money: {
    name: 'The Money Lover',
    description: '',
    image: 'https://via.placeholder.com/300x200',
  },
  skeptic: {
    name: 'The Skeptic',
    description: '',
    image: 'https://via.placeholder.com/300x200',
  },
  longAsItWorks: {
    name: 'The AsLongAsItWorks',
    description: '',
    image: 'https://via.placeholder.com/300x200',
  },
  aesthetics: {
    name: 'The Aesthetic',
    description: '',
    image: 'https://via.placeholder.com/300x200',
  }
};

const results: React.FC = () => {
    const location = useLocation();
    const [finalArchetype, setFinalArchetype] = useState<keyof pointAssignment | null>(null);
  
    // const points = location.state?.points as pointAssignment;
  
    useEffect(() => {
      const calculateFinalArchetype = () => {
        let maxPoints = -1;
        let topArchetype: keyof pointAssignment | null = null;
  
        for (const archetype in points) {
          if (points[archetype as keyof pointAssignment] > maxPoints) {
            maxPoints = points[archetype as keyof pointAssignment];
            topArchetype = archetype as keyof pointAssignment;
          }
        }
  
        setFinalArchetype(topArchetype);
      };
  
      calculateFinalArchetype();
    }, [points]);
  
    return (
      <div>
        {finalArchetype !== null ? (
          <ArchetypeInfo
            archetypeName={archetypes[finalArchetype].name}
            archetypeDescription={archetypes[finalArchetype].description}
            archetypeImage={archetypes[finalArchetype].image}
          />
        ) : (
          <p>Calculating the final archetype...</p>
        )}
      </div>
    );
  };
  
export default results;
