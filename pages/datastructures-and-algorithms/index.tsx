import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuestionComp from '../../components/QuestionComp';
import WrongAnswersComp from '../../components/WrongAnswersComp';
import { sendQuestion, setQuiz } from '../../redux/features/quizSlice';

const DSA = () => {
    const { gameover } = useSelector((s: any) => s.quiz);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setQuiz('datastructures-and-algorithms'));
        dispatch(sendQuestion());
    }, []);

    return <>{!gameover ? <QuestionComp /> : <WrongAnswersComp />}</>;
};

export default DSA;
