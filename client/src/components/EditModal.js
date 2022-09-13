import React, {useState} from 'react';

function EditModal({description, id}) {

    const [edit, setEdit] = useState(description)
    
    const onSave = async (e) => {
        e.preventDefault();
        try {
            const body = {"description": edit};
            console.log(edit);
            const response = await fetch(
                `http://localhost:5035/goals/${id}`, 
                { method: "PUT",
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify(body)}
            )
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            <input type="text" value={edit} onChange={(e) => setEdit(e.target.value)}/>
            <button onClick={(e) => onSave(e)}>Save</button>
        </div>
    );
}

export default EditModal;