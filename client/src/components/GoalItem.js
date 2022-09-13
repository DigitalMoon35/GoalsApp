import React, {useState} from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import EditModal from './EditModal';

function GoalItem({goal}) {
    const [openModal, setOpenModal] = useState(false);
    
    const onEditClick = () => {
        setOpenModal(!openModal)
    } 
    return (
        <>
        <div className="list-box">
            <li>{goal.description}</li>
            <EditButton editClick={onEditClick} />
            <DeleteButton id={goal.id}/>
        </div>
        {
            openModal && 
            <EditModal 
                description={goal.description} 
                id={goal.id}/>
        }
    </>
    );
}

export default GoalItem;