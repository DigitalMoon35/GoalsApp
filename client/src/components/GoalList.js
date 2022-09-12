import React, {useState, useEffect} from 'react';
import GoalItem from './GoalItem';

function GoalList(props) {
    // we will fetch all of the goals
    // pass each goal down to Goal item (using map)
    const [goals, setGoals] = useState([]);
const getGoals = async () => {
    try {
        const response = await fetch("http://localhost:5035/goals");
        const responseJson = await response.json();
        setGoals(responseJson);
        
    } catch (error) {
        console.error(error.message);
    }
}

    useEffect(() => {
        getGoals();
    }, [])

    return (
        <>
        <ul>
            {goals.map(goal => {
                return <GoalItem goal={goal}/>
            })}
        </ul>
        </>
    );
}

export default GoalList;