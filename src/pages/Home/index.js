import { useDispatch, useSelector } from 'react-redux';
import casual from 'casual-browserify';
import { addNewHobby, setActiveHobby } from '~/actions/hobby';
import './Home.css';

function Home() {
    const hobbyList = useSelector((state) => state.hobby.list);
    const activeId = useSelector((state) => state.hobby.activeId);

    const dispatch = useDispatch();
    console.log(hobbyList);

    const handleAddHobbyClick = () => {
        // random a hobby object: id + title
        const newHobby = {
            id: casual.uuid,
            title: casual.title,
        };
        // dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    };

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby.id);
        dispatch(action);
    };

    return (
        <>
            <h2>Home </h2>
            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <ul>
                {hobbyList.map((hobby) => (
                    <li
                        key={hobby.id}
                        className={hobby.id === activeId ? 'active' : ''}
                        onClick={() => handleHobbyClick(hobby)}
                    >
                        {hobby.title} - {hobby.id}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Home;
