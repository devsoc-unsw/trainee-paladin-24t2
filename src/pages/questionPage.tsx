import jsonData from '../pages/test.json';
import  '..App.css'
import '..index.css'
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
    Number: number,
    Answers: string[],
    Points: pointAssignment,
};

interface jsonInterface {
    numOfQuestions: number,
    // I HAVE NO CLUE WHY THE BELOW WORKS!
    // DOES THIS SYNTAX MEAN AN ARRAY OF THE STUFF IN CURLY BRACKETS????
    questions: 
        { Name: string; Number: number; Answers: string[]; Points: number[]; }[]
    ,
};

// Turns the JSON representations of questions into an object that can easily
// be used in the quiz.
// Outputs an array of questionDetail object members
// 
function questionSetup() {
    let questions = [];

    const loadData = jsonData as jsonInterface;
    const num = loadData.numOfQuestions;

    // Can change this looping logic later (still works)
    for (let i = 0; i < num; i++) {
        let currQ = loadData.questions[i]
        let pointAllocation: pointAssignment = { //skull
            weeb: currQ.Points[0],
            yapper: currQ.Points[1],
            sage: currQ.Points[2],
            atlassian: currQ.Points[3],
            money: currQ.Points[4],
            skeptic: currQ.Points[5],
            longAsItWorks: currQ.Points[6],
            aesthetics: currQ.Points[7],
        };

        let question: questionDetail = {
            Name: currQ.Name,
            Number: currQ.Number,
            Answers: currQ.Answers,
            Points: pointAllocation,
        };
        questions.push(question);
    }
    return {
        questions
    }
}

function Page() {
    // Run the logic above to get the questions loaded to the questionDetail interface
    // Then place it into page

    return {
        <div>
            {/* Your JSX content goes here */}
            <h1>Hello, world!</h1>
        <div/>
    }
}


export default Page