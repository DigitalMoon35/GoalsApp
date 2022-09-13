import React, {useState} from 'react';
import './App.css';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

// useEffect will fetch goals on load
// we will pass goals down to Goal List as props
// we will set state 

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="goal-container">
      <header>
        <h1>My Goals</h1>
      </header>
      <GoalInput/>
      <GoalList/>
    </div>
  );
}

export default App;
