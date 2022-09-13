import React from 'react';

function EditButton({editClick, open}) {
    return (
        <button onClick={() => editClick(open)}>
            Edit
        </button>
    );
}

export default EditButton;