// // import GameOver from '../components/GameOver';
// import React, { useEffect, useState } from 'react';
// import { Question, Choice, Money } from '../types/type';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     setCurrentMoney,
//     setCurrentMoneyIndex,
//     setGameover,
//     sendQuestion,
//     checkForCorrectAnswer,
// } from '../redux/features/quizSlice';

// const money: Money[] = [
//     {
//         id: '0',
//         title: '10000000',
//     },
//     {
//         id: '1',
//         title: '1000000',
//     },
//     {
//         id: '2',
//         title: '100000',
//     },
//     {
//         id: '3',
//         title: '10000',
//     },
//     {
//         id: '4',
//         title: '1000',
//     },
//     {
//         id: '5',
//         title: '100',
//     },
//     {
//         id: '6',
//         title: '0',
//     },
// ];

// const Home = () => {
//     const {
//         currentQuestion,
//         remainingQuestions,
//         gameover,
//         currentMoneyIndex,
//         currentMoney,
//     } = useSelector((s: any) => s.quiz);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(sendQuestion());
//     }, []);

//     return (
//         <div className="container mx-auto h-full flex flex-col md:flex-row">
//             <section className="w-2/3 h-full flex flex-col justify-center items-center">
//                 <div className="w-5/6 h-2/3 p-4">
//                     <h1 className="md:text-xl font-semibold mb-4">
//                         Q. {currentQuestion?.title}
//                     </h1>
//                     <ul className="w-4/6 min-h-[100px] p-2 grid grid-cols-1 md:grid-cols-2 gap-2 bg-white">
//                         {currentQuestion?.choices?.map((ch: Choice) => (
//                             <li
//                                 key={ch.choice}
//                                 className={`${
//                                     gameover &&
//                                     ch.correct &&
//                                     'bg-red-400 hover:bg-red-400'
//                                 } p-2 border cursor-pointer hover:bg-slate-100`}
//                                 onClick={() =>
//                                     dispatch(checkForCorrectAnswer(ch))
//                                 }
//                             >
//                                 {ch.choice}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 {/* {gameover && <GameOver />} */}
//             </section>

//             {/* <section className="h-full w-1/3 flex justify-center items-center">
//                 <ul className="w-2/6 h-[300px] flex flex-col items-start justify-end">
//                     {money.map((m) => (
//                         <li
//                             key={m.id}
//                             className={`${
//                                 currentMoney?.id === m.id &&
//                                 'bg-green-600 text-white'
//                             } p-2 w-full text-xl`}
//                         >
//                             {m.title}
//                         </li>
//                     ))}
//                 </ul>
//             </section> */}
//         </div>
//     );
// };

// export default Home;

import React from 'react';
import Category from '../components/Category';
import { categories } from '../quizdata/category';

const Home = () => {
    return (
        <div className="container mx-auto w-full h-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map((cat) => (
                <div key={cat.id}>
                    <Category id="" title={cat.title} />
                </div>
            ))}
        </div>
    );
};

export default Home;
