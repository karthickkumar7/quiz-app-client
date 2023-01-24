export interface Question {
    id: string;
    title: string;
    choices: Choice[];
}
export interface WrongQuestion {
    id: string;
    title: string;
    choices: Choice[];
    userAnswer: string;
}

export interface Choice {
    choice: string;
    correct: boolean;
}

export interface Money {
    id: string;
    title: string;
}

export interface Category {
    id: string;
    title: string;
    desc: string;
}

export interface QuizState {
    allQuestions: Question[];
    currentQuestion: Question;
    currentQuestionNumber: number;
    remainingQuestions: Question[];
    wronglyAnswered: WrongQuestion[];
    gameover: boolean;
}
