import { createSlice } from '@reduxjs/toolkit';
import { india, javascript, python, react } from '../../quizdata/data';
import { QuizState } from '../../types/type';

const initialState: QuizState = {
    currentQuestion: { id: '1', choices: [], title: '' },
    remainingQuestions: [],
    wronglyAnswered: [],
    gameover: false,
    currentMoneyIndex: 0,
    currentMoney: 0,
};

const quizSlice = createSlice({
    name: 'quiz',

    initialState,

    reducers: {
        setGameover: (state, { payload }) => {},

        setCurrentMoneyIndex: (state, { payload }) => {},

        setCurrentMoney: (state, { payload }) => {},

        setQuiz: (state, { payload }) => {
            switch (payload) {
                case 'india':
                    state.remainingQuestions = india;
                    return;
                case 'javascript':
                    state.remainingQuestions = javascript;
                    return;
                case 'python':
                    state.remainingQuestions = python;
                    return;
                case 'react':
                    state.remainingQuestions = react;
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
                state.wronglyAnswered.push(state.currentQuestion);
            }
            // send question
            const randomIndex = Math.floor(
                Math.random() * state.remainingQuestions.length
            );
            state.currentQuestion = state.remainingQuestions[randomIndex];
            state.remainingQuestions = state.remainingQuestions.filter(
                (qns, i: number) => i !== randomIndex
            );

            if (state.remainingQuestions.length === 0) {
                state.gameover = true;
                return;
            }
        },

        resetState: (state) => {
            state.currentQuestion = { id: '1', choices: [], title: '' };
            state.remainingQuestions = [];
            state.gameover = false;
            state.currentMoneyIndex = 0;
            state.currentMoney = 0;
        },
    },
});

export const {
    sendQuestion,
    setCurrentMoney,
    setCurrentMoneyIndex,
    setGameover,
    checkForCorrectAnswer,
    setQuiz,
    resetState,
} = quizSlice.actions;

export default quizSlice.reducer;
