export interface Question {
    id: string;
    title: string;
    choices: Choice[];
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
}

export interface QuizState {
    currentQuestion: Question;
    remainingQuestions: Question[];
    wronglyAnswered: Question[];
    gameover: boolean;
    currentMoneyIndex: number;
    currentMoney: number;
}
