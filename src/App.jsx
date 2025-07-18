import React, { useEffect, useState } from 'react';
import Head from './components/Head';
import AddTask from './components/AddTask';
import AllTask from './components/AllTask';
import axios from 'axios';

const App = () => {
  const [val, setval] = useState('');
  const [tasks, setTasks] = useState([]);

  const twoWay = (e) => setval(e.target.value);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://task-tracker-backend-1-muoo.onrender.com/');
      console.log(response.data);
      setTasks(response.data); // ✅ This line should NOT be commented
    } catch (err) {
      console.error("Error fetching tasks", err);
    }
  };

  const handleAdd = async () => {
    if (!val.trim()) return;
    try {
      await axios.post('https://task-tracker-backend-1-muoo.onrender.com/', { task: val });
      setval('');
      fetchTasks(); // ✅ Refresh task list
    } catch (err) {
      console.error("Error adding task", err);
    }
  };

  const deleteTask = async (id) => {
  try {
    await axios.delete(`https://task-tracker-backend-1-muoo.onrender.com/${id}`);
    // Optional: update state after delete
    setTasks(tasks.filter(task => task._id !== id));
  } catch (err) {
    console.error("Error deleting:", err);
  }
};


  useEffect(() => {
    fetchTasks(); 
  }, []);

  return (
    <>
      <Head />
      <div className="all h-[90%] w-[100%] flex">
        <AddTask twoWay={twoWay} val={val}  handleAdd={handleAdd} />
        <AllTask tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
      </div>
    </>
  );
};

export default App;
