import { createSlice } from '@reduxjs/toolkit';
import { india, javascript, python, react, dsa } from '../../quizdata/data';
import { QuizState } from '../../types/type';

const initialState: QuizState = {
    allQuestions: [],
    currentQuestion: { id: '1', choices: [], title: '' },
    currentQuestionNumber: 1,
    remainingQuestions: [],
    wronglyAnswered: [],
    gameover: false,
};

const quizSlice = createSlice({
    name: 'quiz',

    initialState,

    reducers: {
        setQuiz: (state, { payload }) => {
            switch (payload) {
                case 'india':
                    state.remainingQuestions = india;
                    state.allQuestions = india;
                    return;
                case 'javascript':
                    state.remainingQuestions = javascript;
                    state.allQuestions = javascript;
                    return;
                case 'python':
                    state.remainingQuestions = python;
                    state.allQuestions = python;
                    return;
                case 'react':
                    state.remainingQuestions = react;
                    state.allQuestions = react;
                    return;
                // TODO change
                case 'datastructures-and-algorithms':
                    state.remainingQuestions = dsa;
                    state.allQuestions = dsa;
                    return;
            }
        },

        sendQuestion: (state) => {
            const randomIndex = Math.floor(
                Math.random() * state.remainingQuestions.length
            );
            state.currentQuestion = state.remainingQuestions[randomIndex];
            state.remainingQuestions = state.remainingQuestions.filter(
                (qns, i: number) => i !== randomIndex
            );
        },

        checkForCorrectAnswer: (state, { payload }: any) => {
            if (payload?.correct) {
                // inc mark here
            } else {
                state.wronglyAnswered.push({
                    ...state.currentQuestion,
                    userAnswer: payload.choice,
                });
            }
            // send question
            const randomIndex = Math.floor(
                Math.random() * state.remainingQuestions.length
            );
            state.currentQuestion = state.remainingQuestions[randomIndex];
            state.remainingQuestions = state.remainingQuestions.filter(
                (qns, i: number) => i !== randomIndex
            );

            //inc qn number
            state.currentQuestionNumber++;

            if (state.remainingQuestions.length === 0) {
                state.gameover = true;
                return;
            }
        },

        resetState: (state) => {
            state.allQuestions = [];
            state.currentQuestion = { id: '1', choices: [], title: '' };
            state.remainingQuestions = [];
            state.currentQuestionNumber = 1;
            state.gameover = false;
            state.wronglyAnswered = [];
        },
    },
});

export const { sendQuestion, checkForCorrectAnswer, setQuiz, resetState } =
    quizSlice.actions;

export default quizSlice.reducer;
