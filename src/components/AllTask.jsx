import React from 'react';
import axios from 'axios';

const AllTask = ({ tasks, setTasks, deleteTask }) => {
  // Toggle complete status
  const toggleComplete = async (id, currentStatus) => {
    try {
      const res = await axios.put(`https://task-tracker-backend-1-muoo.onrender.com/${id}`, {
        completed: !currentStatus
      });

      if (res.status === 200) {
        const updatedTasks = tasks.map((task) =>
          task._id === id ? { ...task, completed: !currentStatus } : task
        );
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.error('Error updating task status', error);
    }
  };

  return (
    <div className='rht w-[50%] h-[100%] overflow-x-hidden overflow-y-auto flex justify-items-start items-center flex-col add-task'>
      <h1 className='heading text-[clamp(1.5rem,3vw,5rem)] font-bold text-white '>
        <span className='font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>All </span>Task
      </h1>

      <div className="t h-[100%] w-[100%] flex overflow-y-scroll my-7 items-center gap-2 flex-col scrollbar-hide">
        {tasks.length === 0 ? (
          <p className="text-white flex items-center justify-center my-10 w-[100%]">No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <ol key={task._id} className={`w-[90%] rounded-xl flex justify-between items-center py-2 px-2 
              ${task.completed ? 'bg-green-600 line-through text-white' : 'bg-gray-600 text-white'} 
              font-medium capitalize`}>
              <li className="w-[40%]">{task.task}</li>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(task._id, task.completed)}
                  className={`font-bold p-1.5 rounded-sm cursor-pointer 
                    ${task.completed ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-500 hover:bg-blue-600'} 
                    active:scale-90`}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>

                <button
                  onClick={() => deleteTask(task._id)}
                  className='bg-red-600 hover:bg-red-800 active:scale-90 rounded-sm font-bold p-1.5 cursor-pointer'
                >
                  Delete
                </button>
              </div>
            </ol>
          ))
        )}
      </div>
    </div>
  );
};

export default AllTask;
