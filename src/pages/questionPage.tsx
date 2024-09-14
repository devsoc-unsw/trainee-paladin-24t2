import { useState, useEffect } from "react";
import './questionPage.css';
// import jsonData from '../pages/test.json';
import jsonData from '../pages/questions.json';


// JUST IMPORT THIS INTO app.tsx and RUN ON THE ONE PAGE :))

// INTERFACE

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

// FUNCTIONS

// Turns the JSON representations of questions into an object that can easily
// be used in the quiz.
// Outputs an array of questionDetail object members
function questionSetup(loadData) { // Issue where the code doesnt
    let questions: questionDetail[] = [];

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


function adjustFontSize() {
    const questionText = document.querySelector('.questionText') as HTMLElement;
    if (!questionText) return;

    const containerWidth = questionText.parentElement?.clientWidth || 0;
    const containerHeight = questionText.parentElement?.clientHeight || 0;

    let fontSize = 36; // Starting font size
    let textFits = false;

    while (!textFits && fontSize > 0) {
        // Set the font size
        questionText.style.fontSize = `${fontSize}px`;

        // Check if text fits
        const textWidth = questionText.scrollWidth;
        const textHeight = questionText.scrollHeight;

        // Check if text overflows
        textFits = textWidth <= containerWidth && textHeight <= containerHeight;

        if (!textFits) {
            // Reduce font size and check again
            fontSize -= 1;
        }
    }

    // Final adjustment if no fitting size is found
    questionText.style.fontSize = `${fontSize}px`;
}

// Main function
// Displays the screen that hosts all the questions and runs all the calculations
// to determine the user's personality
function Page() {
    const loadData = jsonData as jsonInterface;
    let questions = questionSetup(loadData);

    // Hooks needed to track question and user points
    const [questionNumber, setQuestionNumber] = useState(0);
    const [userPoints, setUserPoints] = useState<pointAssignment>({
        weeb: 0,
        yapper: 0,
        sage: 0,
        atlassian: 0,
        money: 0,
        skeptic: 0,
        longAsItWorks: 0,
        aesthetics: 0,
    });

    const handleButtonClick = (answerPoints: pointAssignment) => {
        // Update user points based on selected answer
        setUserPoints(prevPoints => ({
            weeb: prevPoints.weeb + answerPoints.weeb,
            yapper: prevPoints.yapper + answerPoints.yapper,
            sage: prevPoints.sage + answerPoints.sage,
            atlassian: prevPoints.atlassian + answerPoints.atlassian,
            money: prevPoints.money + answerPoints.money,
            skeptic: prevPoints.skeptic + answerPoints.skeptic,
            longAsItWorks: prevPoints.longAsItWorks + answerPoints.longAsItWorks,
            aesthetics: prevPoints.aesthetics + answerPoints.aesthetics,
        }));

        // Move to the next question or end the quiz
        if (questionNumber < questions.length - 1) {
            setQuestionNumber(prevQuestion => prevQuestion + 1);
        } else {
            // Quiz is complete
            // Need to fix this to go to the end screen !!!!!!!!!
            console.log('Quiz complete. User points:', userPoints);
        }
    };

    useEffect(() => {
        adjustFontSize();
        window.addEventListener('resize', adjustFontSize);
        return () => window.removeEventListener('resize', adjustFontSize);
    }, []);

    const currentQuestion = questions[questionNumber];

    return (
        <div className = "mainBody">
            <div className = 'table'>
                <div className = "questionDiv">
                    <div className = "questionText">
                        Question {questionNumber + 1}: {currentQuestion.name}
                    </div>
                </div>
                <div className = "buttonDiv">
                    {currentQuestion.answers.map((answer, index) => (
                        <button
                            key={index}
                            className="answerButton"
                            onClick={() => handleButtonClick(answer.points)}
                        >
                            {answer.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Page;