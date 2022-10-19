import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Choice } from '../types/type';
import { checkForCorrectAnswer } from '../redux/features/quizSlice';

const QuestionComp = () => {
    const { currentQuestion } = useSelector((s: any) => s.quiz);
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto h-full flex flex-col md:flex-row">
            <section className="w-2/3 h-full flex flex-col justify-center items-center">
                <div className="w-5/6 h-2/3 p-4">
                    <h1 className="md:text-xl font-semibold mb-4">
                        Q. {currentQuestion?.title}
                    </h1>
                    <ul className="w-4/6 min-h-[100px] p-2 grid grid-cols-1 md:grid-cols-2 gap-2 bg-white">
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
