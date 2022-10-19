import React from 'react';
import { Question, Choice, Money } from '../types/type';
import { useDispatch, useSelector } from 'react-redux';

const WrongAnswersComp = () => {
    const { currentQuestion, gameover, wronglyAnswered } = useSelector(
        (s: any) => s.quiz
    );
    const dispatch = useDispatch();
    return (
        <section className="container mx-auto p-2">
            <div>
                <h1>Wrongly Answered Questions</h1>
            </div>
            <ul className="flex flex-col items-start justify-end">
                {wronglyAnswered.map((qns: Question, i: number) => (
                    <div key={qns.id} className="w-full p-2 mt-6 border">
                        <h1 className="md:text-xl font-semibold mb-4">
                            Q{i + 1} {qns?.title}
                        </h1>
                        <ul className="w-4/6 min-h-[100px] p-2 grid grid-cols-1 md:grid-cols-2 gap-2 bg-white">
                            {qns.choices.map((ch: Choice) => (
                                <li
                                    key={ch.choice}
                                    className={`${
                                        ch.correct && 'text-white bg-green-600'
                                    } p-2 capitalize border cursor-pointer hover:bg-slate-100`}
                                >
                                    {ch.choice}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </ul>
        </section>
    );
};

export default WrongAnswersComp;
