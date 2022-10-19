import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendQuestion, setQuiz } from '../../redux/features/quizSlice';
import QuestionComp from '../../components/QuestionComp';
import WrongAnswersComp from '../../components/WrongAnswersComp';

const Python = () => {
    const { currentQuestion, gameover } = useSelector((s: any) => s.quiz);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setQuiz('python'));
        dispatch(sendQuestion());
    }, []);

    return <>{!gameover ? <QuestionComp /> : <WrongAnswersComp />}</>;
};

export default Python;
