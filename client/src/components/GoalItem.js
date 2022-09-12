import React from 'react';
import DeleteButton from './DeleteButton';

function GoalItem({goal}) {
    return (
        <div className="list-box">

      <li>{goal.description}</li>
      <button>edit</button>
      <DeleteButton id={goal.id}/>
    </div>
    );
}

export default GoalItem;