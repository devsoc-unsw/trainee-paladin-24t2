// Results.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ArchetypeInfo from './archetypeInfo';
import weebImage from '../assets/weeb.jpg';
import yapperImage from '../assets/yapper.webp';
import sageImage from '../assets/sage.jpeg';
import atlassianImage from '../assets/atlassian.png';
import moneyImage from '../assets/money.jpeg';
import skepticImage from '../assets/skeptic.png';
import longAsItWorksImage from '../assets/aslongasitworks.png';
import aestheticsImage from '../assets/aesthetics.jpg';

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
    description: 'UwU, random cat noises and stuff. You enjoy finding the anime in compsci.',
    image: weebImage
  },
  yapper: {
    name: 'The Yapper',
    description: '',
    image: yapperImage
  },
  sage: {
    name: 'The Sage',
    description: '',
    image: sageImage
  },
  atlassian: {
    name: 'The Atlassian',
    description: '',
    image: atlassianImage
  },
  money: {
    name: 'The Money Lover',
    description: '',
    image: moneyImage
  },
  skeptic: {
    name: 'The Skeptic',
    description: '',
    image: skepticImage
  },
  longAsItWorks: {
    name: 'The AsLongAsItWorks',
    description: 'As long as the project works it doesn\'t matter what the program looks like! Your disregard for efficiency and style is balanced with your mentality to make a working solution.',
    image: longAsItWorksImage
  },
  aesthetics: {
    name: 'The Aesthetic',
    description: '',
    image: aestheticsImage
  }
};


interface ResultsProps {
  userPoints: pointAssignment;
}

function Results({ userPoints }: ResultsProps) {
  const [finalArchetype, setFinalArchetype] = useState<keyof pointAssignment | null>(null);

  useEffect(() => {
    const calculateFinalArchetype = () => {
      let maxPoints = -1;
      let topArchetype: keyof pointAssignment | null = null;

      for (const archetype in userPoints) {
        if (userPoints[archetype as keyof pointAssignment] > maxPoints) {
          maxPoints = userPoints[archetype as keyof pointAssignment];
          topArchetype = archetype as keyof pointAssignment;
        }
      }

      setFinalArchetype(topArchetype);
    };

    calculateFinalArchetype();
  }, [userPoints]);

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
}

export { Results };