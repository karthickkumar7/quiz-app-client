import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Category } from '../types/type';

const Category: FC<Category> = (props) => {
    const { push } = useRouter();

    return (
        <section className="min-w-[300px] min-h-[200px] p-4 rounded border border-blue-100 bg-blue-100 hover:border-blue-600">
            <h1 className="text-xl mb-2 font-semibold uppercase">
                {props.title}
            </h1>
            <p className="mb-2 text-slate-900">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                praesentium reiciendis doloremque. praesentium reiciendis
                doloremque. praesentium reiciendis doloremque.
            </p>
            <button
                className="px-4 py-2 mt-2 uppercase shadow-md text-white bg-blue-600 rounded hover:bg-blue-500"
                onClick={() => push(`/${props.title}`)}
            >
                take quiz
            </button>
        </section>
    );
};

export default Category;
