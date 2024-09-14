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
    name: 'CS Weeb',
    description: 'UwU, random cat noises and stuff. You enjoy finding the anime in compsci.',
    image: weebImage
  },
  yapper: {
    name: 'CS Yapper',
    description: '',
    image: yapperImage
  },
  sage: {
    name: 'Light Mode Sage',
    description: '',
    image: sageImage
  },
  atlassian: {
    name: 'Aidan from Atlassian',
    description: '',
    image: atlassianImage
  },
  money: {
    name: 'The Money Lover',
    description: `I don't get the way you guys think. I want MONEY. 6 figures right out of college. 200k a year entry level. I'm in this for MONEY. I don't care about whether I'm "fulfilled" I want MONEY. Whatever gets me the most MONEY. What do I need on my resume to get the most MONEY. What technology gets me PAID THE BEST. All I care about in this major is MONEY. That's why I'm in college, I don't wanna laugh and play with y'all. I don't wanna be buddy buddy with y'all. I'm here for MONEY.`,
    image: moneyImage
  },
  skeptic: {
    name: 'Documentation Skeptic',
    description: '',
    image: skepticImage
  },
  longAsItWorks: {
    name: 'As long as it works',
    description: 'As long as the project works it doesn\'t matter what the program looks like! Your disregard for efficiency and style is balanced with your mentality to make a working solution.',
    image: longAsItWorksImage
  },
  aesthetics: {
    name: 'Aesthetic achiever',
    description: 'You are an individual dedicated to maintain the style and aesthetics of your code. Everything from your environment to code has to be well kept and maintained.',
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