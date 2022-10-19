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
