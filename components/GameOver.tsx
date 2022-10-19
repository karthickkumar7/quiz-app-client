import React from 'react';
import { AppContext } from '../context/AppContext';

const GameOver = () => {
    const restart = (
        setRemainingQuestions: any,
        setCurrentMoney: any,
        setCurrentMoneyIndex: any,
        setGameover: any,
        data: any,
        money: any
    ) => {
        setRemainingQuestions(data);
        setCurrentMoney(money[money.length - 1]);
        setCurrentMoneyIndex(money.length - 1);
        setGameover(false);
    };

    return (
        <AppContext.Consumer>
            {({
                setRemainingQuestions,
                setCurrentMoney,
                setCurrentMoneyIndex,
                setGameover,
                data,
                money,
            }: any) => {
                return (
                    <div className="self-start p-4">
                        <h1 className="text-4xl text-red-500 mb-4">
                            Wrong Answer!
                        </h1>
                        <button
                            className="px-3 py-2 rounded text-white bg-fuchsia-700"
                            onClick={() =>
                                restart(
                                    setCurrentMoney,
                                    setCurrentMoneyIndex,
                                    setGameover,
                                    setRemainingQuestions,
                                    data,
                                    money
                                )
                            }
                        >
                            Restart?
                        </button>
                    </div>
                );
            }}
        </AppContext.Consumer>
    );
};

export default GameOver;
