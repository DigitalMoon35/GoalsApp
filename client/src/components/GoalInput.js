import React, {useState} from 'react';

function GoalInput(props) {
    const [description, setDescription] = useState("");
    const onSubmitButton = async (e) => {

        e.preventDefault();

        const body = {description};

        try {
            const response = await fetch(
                "http://localhost:5035/goals",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            )
            window.location = "/";
        } catch (error) {
            console.error(error.message);  
        }

    }
    
    return (
        <section id="input-sect">  
            <input 
                type="text" 
                onChange={(e) => setDescription(e.target.value)} value={description} />
            <button onClick={(e) => onSubmitButton(e)}>Add</button>
        </section>
    );
}

export default GoalInput;