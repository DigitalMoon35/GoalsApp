import React from 'react';

function DeleteButton({id}) {

    const onDelete = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:5035/${id}`, { method: "DELETE"}
            )   
            console.log("We deleted")
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <button onClick={() => onDelete(id)}>
            Delete
        </button>
    );
}

export default DeleteButton;