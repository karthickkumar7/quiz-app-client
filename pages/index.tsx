// import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import GameOver from '../components/GameOver';
import { Question, Choice, Money } from '../types/type';

const data: Question[] = [
    {
        id: '1',
        title: 'what is the worlds largest country.',
        choices: [
            { choice: 'USA', correct: false },
            { choice: 'China', correct: false },
            { choice: 'Brazil', correct: false },
            { choice: 'Russia', correct: true },
        ],
    },
    {
        id: '2',
        title: 'what is the worlds populous country.',
        choices: [
            { choice: 'India', correct: false },
            { choice: 'China', correct: true },
            { choice: 'USA', correct: false },
            { choice: 'Russia', correct: false },
        ],
    },
    {
        id: '3',
        title: "India's Capital city is.",
        choices: [
            { choice: 'Mumbai', correct: false },
            { choice: 'Chennai', correct: false },
            { choice: 'Delhi', correct: true },
            { choice: 'Bengaluru', correct: false },
        ],
    },
    {
        id: '4',
        title: "India's Populous city is.",
        choices: [
            { choice: 'Mumbai', correct: false },
            { choice: 'Kolkatta', correct: false },
            { choice: 'Delhi', correct: true },
            { choice: 'Bengaluru', correct: false },
        ],
    },
    {
        id: '5',
        title: "Karnataka's Capital city is.",
        choices: [
            { choice: 'Mysore', correct: false },
            { choice: 'Chennai', correct: false },
            { choice: 'Bengaluru', correct: true },
            { choice: 'Mangalore', correct: false },
        ],
    },
    {
        id: '6',
        title: 'Most Populous city in the world.',
        choices: [
            { choice: 'New York', correct: false },
            { choice: 'Tokyo', correct: true },
            { choice: 'Beijing', correct: false },
            { choice: 'London', correct: false },
        ],
    },
];

const money: Money[] = [
    {
        id: '0',
        title: '10000000',
    },
    {
        id: '1',
        title: '1000000',
    },
    {
        id: '2',
        title: '100000',
    },
    {
        id: '3',
        title: '10000',
    },
    {
        id: '4',
        title: '1000',
    },
    {
        id: '5',
        title: '100',
    },
    {
        id: '6',
        title: '0',
    },
];

const Home = () => {
    const [currentQuestion, setCurrentQuestion] = useState<Question>();
    const [remainingQuestions, setRemainingQuestions] = useState(data);
    const [answered, setAnswered] = useState<boolean>();
    const [correctAnswer, setCorrectAnswer] = useState<boolean>();
    const [gameover, setGameover] = useState<boolean>(false);
    const [currentMoneyIndex, setCurrentMoneyIndex] = useState<number>(
        money.length - 1
    );
    const [currentMoney, setCurrentMoney] = useState<Money>(
        money[currentMoneyIndex]
    );

    const sendQuestion = (questions: Question[]) => {
        const randomIndex = Math.floor(
            Math.random() * remainingQuestions.length
        );
        setCurrentQuestion(remainingQuestions[randomIndex]);
        setRemainingQuestions(
            remainingQuestions.filter((qns, i) => i !== randomIndex)
        );
    };

    const checkForCorrectAnswer = (choice: Choice) => {
        if (gameover) return;
        if (choice.correct) {
            sendQuestion(remainingQuestions);
            setCorrectAnswer(true);
            setCurrentMoney(money[currentMoneyIndex - 1]);
            setCurrentMoneyIndex((pv) => pv - 1);
        } else {
            setCorrectAnswer(false);
            setGameover(true);
        }
    };

    useEffect(() => {
        sendQuestion(remainingQuestions);
    }, []);

    return (
        <div className="container mx-auto h-full flex flex-col md:flex-row">
            <section className="w-2/3 h-full flex flex-col justify-center items-center">
                <div className="w-5/6 h-2/3 p-4">
                    <h1 className="md:text-xl font-semibold mb-4">
                        Q. {currentQuestion?.title}
                    </h1>
                    <ul className="w-4/6 min-h-[100px] p-2 grid grid-cols-1 md:grid-cols-2 gap-2 bg-white">
                        {currentQuestion?.choices.map((ch) => (
                            <li
                                key={ch.choice}
                                className={`${
                                    gameover &&
                                    ch.correct &&
                                    'bg-red-400 hover:bg-red-400'
                                } p-2 border cursor-pointer hover:bg-slate-100`}
                                onClick={() => checkForCorrectAnswer(ch)}
                            >
                                {ch.choice}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* {gameover && <GameOver />} */}
            </section>

            <section className="h-full w-1/3 flex justify-center items-center">
                <ul className="w-2/6 h-[300px] flex flex-col items-start justify-end">
                    {money.map((m) => (
                        <li
                            key={m.id}
                            className={`${
                                currentMoney?.id === m.id &&
                                'bg-green-600 text-white'
                            } p-2 w-full text-xl`}
                        >
                            {m.title}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Home;
