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
    description: 'UwU, random cat noises and stuff. You enjoy finding the anime in Compsci, and squeezing in references whenever you can. The weebness in your bleeds into your Compsci degree as much as it bleeds into your everyday life - let\'s see your IDE\'s background O_O',
    image: weebImage
  },
  yapper: {
    name: 'CS Yapper',
    description: 'After graduating with a degree of Yappology at the University of Yappington, you endeavour to yap to all your friends about any tiny aspect of Compsci. You probably have an obsession with something Compsci related like functional programming :^)',
    image: yapperImage
  },
  sage: {
    name: 'Light Mode Sage',
    description: 'You have just entered the world of Computer Science, eagerly awaiting to explore what this realm has to offer. Or you are a straight up sociopathic with your light mode usage',
    image: sageImage
  },
  atlassian: {
    name: 'Aidan from Atlassian',
    description: 'You are the embodiment of overqualified, the 10 year old with 20 years of experience. You are on your 5th internship in university waiting to finish that last COMP course and when you do, all the big tech companies are lining up ready to hire you.',
    image: atlassianImage
  },
  money: {
    name: 'The Money Lover',
    description: `I don't get the way you guys think. I want MONEY. 6 figures right out of college. 200k a year entry level. I'm in this for MONEY. I don't care about whether I'm "fulfilled" I want MONEY. Whatever gets me the most MONEY. What do I need on my resume to get the most MONEY. What technology gets me PAID THE BEST. All I care about in this major is MONEY. That's why I'm in college, I don't wanna laugh and play with y'all. I don't wanna be buddy buddy with y'all. I'm here for MONEY.`,
    image: moneyImage
  },
  skeptic: {
    name: 'Documentation Skeptic',
    description: 'Your sheer disregard for any documentation is quite profound. You are the embodiment of rawdogging a flight, just writing a program without a clear plan in mind or commenting, hoping to get it all done. Any time you don\'t know how to write something, you ball.',
    image: skepticImage
  },
  longAsItWorks: {
    name: 'As long as it works',
    description: 'As long as the project works it doesn\'t matter what the program looks like! Your disregard for efficiency and style is balanced with your mentality to make a working solution. This however bites you in the back, when you have to modify your program and realise that you named all your variables in some variation of: a, temp and fjdkfjds',
    image: longAsItWorksImage
  },
  aesthetics: {
    name: 'Aesthetic achiever',
    description: 'You are an individual dedicated to maintain the style and aesthetics of your code. Everything from your environment to code has to be well kept and maintained. If a solution works, how can you make it cleaner? Unfortunately your greatest strength is your greatest pitfall, your obsession with appealing code results in you spending your whole COMP1531 ranting to your groupmates about style and not getting any work done.',
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