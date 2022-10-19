import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Category from '../components/Category';
import { categories } from '../quizdata/category';
import { resetState } from '../redux/features/quizSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState());
    }, []);
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
