import React from 'react';
import { Choice, WrongQuestion } from '../types/type';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const WrongAnswersComp = () => {
    const { wronglyAnswered, allQuestions } = useSelector((s: any) => s.quiz);
    const { push } = useRouter();

    return (
        <section className="container mx-auto p-2">
            <div className="mb-2 text-lg md:text-xl mt-2 space-y-2 font-semibold">
                <h1>
                    Correct{' '}
                    <span>{allQuestions.length - wronglyAnswered.length}</span>
                </h1>
                <h1>
                    Wrong <span>{wronglyAnswered.length}</span>
                </h1>
                <h1>
                    Score{' '}
                    <span>
                        {(
                            ((allQuestions.length - wronglyAnswered.length) /
                                allQuestions.length) *
                            100
                        ).toFixed(2)}
                        %
                    </span>
                </h1>
                <button
                    className="px-4 py-2 bg-orange-500 text-white font-semibold uppercase rounded shadow-md"
                    onClick={() => push('/')}
                >
                    go back
                </button>
            </div>
            <ul className="flex flex-col items-start justify-end">
                {wronglyAnswered.map((qns: WrongQuestion, i: number) => (
                    <div
                        key={qns.id}
                        className="w-full md:w-2/3 p-2 mt-6 border bg-slate-100"
                    >
                        <h1 className="md:text-xl font-semibold mb-4">
                            Q{i + 1} {qns?.title}
                        </h1>
                        <ul className="w-4/6 min-h-[100px] p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                            {qns.choices.map((ch: Choice) => (
                                <li
                                    key={ch.choice}
                                    className={`${
                                        ch.correct && 'text-white bg-green-500'
                                    } ${
                                        qns.userAnswer === ch.choice &&
                                        'bg-red-500 text-white'
                                    } p-2 capitalize border cursor-pointer rounded`}
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
