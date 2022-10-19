import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Choice } from '../types/type';
import { checkForCorrectAnswer } from '../redux/features/quizSlice';

const QuestionComp = () => {
    const { currentQuestion, allQuestions, currentQuestionNumber } =
        useSelector((s: any) => s.quiz);
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto h-full p-4 flex flex-col">
            <div className="mb-4 text-lg">
                <h1>
                    {currentQuestionNumber}/{allQuestions.length} questions
                </h1>
            </div>
            <section className="w-full md:w-2/3 h-full p-4 flex flex-col justify-center items-center border rounded bg-slate-50">
                <div className="w-5/6 h-2/3 p-4">
                    <h1 className="md:text-xl font-semibold mb-4">
                        Q.{currentQuestion?.title}
                    </h1>
                    <ul className="w-full md:w-4/6 min-h-[100px] p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {currentQuestion?.choices?.map((ch: Choice) => (
                            <li
                                key={ch.choice}
                                className={`p-2 capitalize border cursor-pointer hover:bg-slate-100`}
                                onClick={() =>
                                    dispatch(checkForCorrectAnswer(ch))
                                }
                            >
                                {ch.choice}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default QuestionComp;
