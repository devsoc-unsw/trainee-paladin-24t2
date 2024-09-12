import React from 'react';
import jsonData from '../pages/test.json';

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

interface answerStruct {
    title: string,
    points: pointAssignment,
};

interface questionDetail {
    name: String,
    number: number,
    answers: answerStruct[],
};

interface jsonInterface {
    numOfQuestions: number,
    // I HAVE NO CLUE WHY THE BELOW WORKS!
    // DOES THIS SYNTAX MEAN AN ARRAY OF THE STUFF IN CURLY BRACKETS????
    questions: {
        name: string; 
        number: number; 
        answers: {
            title: string; 
            points: number[]; 
        }[];
    }[]
};

// Turns the JSON representations of questions into an object that can easily
// be used in the quiz.
// Outputs an array of questionDetail object members
function questionSetup(loadData) { // Issue where the code doesnt
    let questions: questionDetail[] = [];

    //const loadData = jsonData as jsonInterface;

    for (let i in loadData.questions) {
        let currQ = loadData.questions[i]

        // Loop through every answer :skull:
        let answers: answerStruct[] = [];
        for (let j in currQ.answers){ 
            let pointAllocation: pointAssignment = { //skull
                weeb: currQ.answers[j].points[0],
                yapper: currQ.answers[j].points[1],
                sage: currQ.answers[j].points[2],
                atlassian: currQ.answers[j].points[3],
                money: currQ.answers[j].points[4],
                skeptic: currQ.answers[j].points[5],
                longAsItWorks: currQ.answers[j].points[6],
                aesthetics: currQ.answers[j].points[7],
            };

            let currAnswer: answerStruct = {
                title: currQ.answers[j].title,
                points: pointAllocation
            };

            answers.push(currAnswer);
        }

        let question: questionDetail = {
            name: currQ.name,
            number: currQ.number,
            answers: answers,
        };
        questions.push(question);
    }
    return questions;
}

// Main function
// Displays the screen that hosts all the questions and runs all the calculations
// to determine the user's personality
function Page() {
    const loadData = jsonData as jsonInterface;

    let userPoints: pointAssignment = {
        weeb: 0,
        yapper: 0,
        sage: 0,
        atlassian: 0,
        money: 0,
        skeptic: 0,
        longAsItWorks: 0,
        aesthetics: 0,
    }

    let questions = questionSetup(loadData);
    let numQ = loadData.numOfQuestions

    // Run the logic above to get the questions loaded to the questionDetail interface
    // Then place it into page

    

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: '#0E0E0E'
        }}>
            <div style={{
                width: 1076,
                height: 573,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: 1071,
                    height: 159,
                    padding: '8px 12px',
                    background: '#171717',
                    borderRadius: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20
                }}>
                    <div style={{
                        width: 945,
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 32,
                        fontFamily: 'Readex Pro',
                        fontWeight: '300',
                        wordWrap: 'break-word'
                    }}>
                        Which emotion best describes you when you find a small bug in your code that you spent hours finding?
                    </div>
                </div>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <button style={{
                        width: 1071,
                        height: 96,
                        marginBottom: 10,
                        padding: '8px 12px',
                        background: 'rgba(200.81, 200.81, 200.81, 0.30)',
                        borderRadius: 106,
                        border: '4px white solid',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 36,
                        fontFamily: 'Readex Pro',
                        fontWeight: '400',
                        cursor: 'pointer',
                        outline: 'none'
                    }}>
                        Dumbfounded
                    </button>
                    <button style={{
                        width: 1071,
                        height: 96,
                        marginBottom: 10,
                        padding: '8px 12px',
                        background: 'rgba(200.81, 200.81, 200.81, 0.30)',
                        borderRadius: 106,
                        border: '4px white solid',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 36,
                        fontFamily: 'Readex Pro',
                        fontWeight: '400',
                        cursor: 'pointer',
                        outline: 'none'
                    }}>
                        Relieved
                    </button>
                    <button style={{
                        width: 1071,
                        height: 96,
                        padding: '8px 12px',
                        background: 'rgba(200.81, 200.81, 200.81, 0.30)',
                        borderRadius: 106,
                        border: '4px white solid',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 36,
                        fontFamily: 'Readex Pro',
                        fontWeight: '400',
                        cursor: 'pointer',
                        outline: 'none'
                    }}>
                        Diabolically furious
                    </button>
                </div>
            </div>
        </div>
    );
            {/* <div>
                <h1>THE FULL JSON</h1>
                {questions.map((q, index) => (
                    <div key={index}>
                        <h2>Question {q.number}: {q.name}</h2>
                        <ul >
                            {q.answers.map((answer, i) => (
                                <li key={i}>
                                    {answer.title}
                                    <ul>
                                        <li>Weeb: {answer.points.weeb}</li>
                                        <li>Yapper: {answer.points.yapper}</li>
                                        <li>Sage: {answer.points.sage}</li>
                                        <li>Atlassian: {answer.points.atlassian}</li>
                                        <li>Money: {answer.points.money}</li>
                                        <li>Skeptic: {answer.points.skeptic}</li>
                                        <li>Long As It Works: {answer.points.longAsItWorks}</li>
                                        <li>Aesthetics: {answer.points.aesthetics}</li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>*/}
}


export default Page;