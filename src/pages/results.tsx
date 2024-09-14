import React, { useEffect, useState } from 'react';
import { useLocation, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import ArchetypeInfo from './archetypeInfo';
import weebImage from '../assets/weeb.jpg';
import yapperImage from '../assets/yapper.webp';
import sageImage from '../assets/sage.jpeg';
import atlassianImage from '../assets/atlassian.png';
import moneyImage from '../assets/money.jpeg';
import skepticImage from '../assets/skeptic.png'
import longAsItWorksImage from '../assets/aslongasitworks.png'
import aestheticsImage from '../assets/aesthetics.jpg'

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
    image: weebImage, 
  },
  yapper: {
    name: 'The Yapper',
    description: '',
    image: yapperImage,
  },
  sage: {
    name: 'The Sage',
    description: '',
    image: sageImage,
  },
  atlassian: {
    name: 'The Atlassian',
    description: '',
    image: atlassianImage,
  },
  money: {
    name: 'The Money Lover',
    description: '',
    image: moneyImage,
  },
  skeptic: {
    name: 'The Skeptic',
    description: '',
    image: skepticImage,
  },
  longAsItWorks: {
    name: 'The AsLongAsItWorks',
    description: '',
    image: longAsItWorksImage,
  },
  aesthetics: {
    name: 'The Aesthetic',
    description: '',
    image: aestheticsImage,
  }
};

const Results: React.FC = () => {
    const location = useLocation();
    const [finalArchetype, setFinalArchetype] = useState<keyof pointAssignment | null>(null);
  
    const points = location.state?.points as pointAssignment;
  
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
  
export default Results;
