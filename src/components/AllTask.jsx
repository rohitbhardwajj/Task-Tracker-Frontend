import React from 'react';

const AllTask = ({ tasks, setTasks, deleteTask }) => {
  return (
    <div className='rht w-[50%] h-[100%] bg-black overflow-x-hidden overflow-y-auto flex items-center flex-col'>
      <h1 className='heading text-[clamp(1.5rem,3vw,5rem)] font-bold fixed py-10 top-4 text-white my-10'>
        <span className='font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>All </span>Task
      </h1>

      <div className="t h-[100%] w-[100%] flex overflow-y-scroll my-25 items-center flex-col scrollbar-hide">
        {tasks.length === 0 ? (
          <p className="text-white align-text-center flex item-center justify-center my-10 w-[100%]">No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <ol key={task._id} className='bg-gray-600 w-[90%] rounded-xl flex justify-between items-center text-white font-medium capitalize py-2 px-2 my-2'>
              <li>{task.task}</li>
              <span
                onClick={() => deleteTask(task._id)}
                className='hover:bg-red-900 active:scale-90 rounded-sm font-bold p-1.5 cursor-pointer font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                Delete
              </span>
            </ol>
          ))
        )}
      </div>
    </div>
  );
};

export default AllTask;
