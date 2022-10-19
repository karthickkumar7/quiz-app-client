import { configureStore } from '@reduxjs/toolkit';

import quiz from './features/quizSlice';

export default configureStore({
    reducer: {
        quiz,
    },
    devTools: true,
});
