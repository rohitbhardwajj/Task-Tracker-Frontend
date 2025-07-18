

const AddTask = (props) => {


 
  return (
    <div className="lft h-[100%] w-[50%] bg-black flex items-center flex-col">
      <h1 className='text-[clamp(1.5rem,3vw,5rem)] font-bold text-white my-10'>
        Set <span className='font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Tasks</span>
      </h1>
      <form onSubmit={(e) => e.preventDefault()} className='h-[100%] w-[100%] flex flex-col items-center'>
        <input
          value={props.val}
          onChange={props.twoWay}
          className='border-b-2 outline-none text-white w-[90%]'
          type="text"
          placeholder='Enter Task Here'
        />
        <button

        
onClick={() => {
  props.add && props.add();
  props.handleAdd && props.handleAdd();
}}

         
          className='my-10 hover:bg-red-900 active:scale-90 rounded-sm font-bold p-1.5 cursor-pointer font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
