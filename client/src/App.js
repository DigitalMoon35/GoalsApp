import React from 'react';
import './App.css';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

// useEffect will fetch goals on load
// we will pass goals down to Goal List as props
// we will set state 

function App() {
  return (
    <div className="goal-container">
      <header>
        <h1>My Goals</h1>
      </header>
      <GoalInput/>
      <section>
      <GoalList/>
      </section>
    </div>
  );
}

export default App;
