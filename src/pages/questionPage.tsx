import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import jsonData from '../pages/test.json';
import App from '..App.css'
import './index.css'
//import questionDetail from './src/pages/questions.tsx'

// JUST IMPORT THIS INTO app.tsx and RUN ON THE ONE PAGE :))

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

interface questionDetail {
    Name: String,
    Number: Number,
    Answers: object,
    Points: pointAssignment,
};

// Turns the JSON representations of questions into an object that can easily
// be used in the quiz.
// Outputs an array of questionDetail object members
function questionSetup() {
    let questions = [];

    const loadData = () => JSON.parse(JSON.stringify(jsonData));
    

    return {

    }
}

function Page() {


    return {

    }
}


export default Page