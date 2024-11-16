export default function Form({setShowForm, setValue, createMission}){

  const handleChange = (e) => { //form에 할일내용 적으면 바뀜
    setValue(e.target.value)
  };

  return (
    <div className="form-container h-1/2 w-1/2 fixed bg-[rgba(255,255,255,0.5)] rounded-xl">
      <form className="flex items-center justify-center pt-2" onSubmit={createMission}>
        <input
          className="w-2/3 px-3 py-2 text-teal-800 border rounded"
          type="text"
          name="value"
          placeholder="미션이 무엇인가요?"
          onChange={handleChange}
        />

        <button 
          className="form-cancle  bg-white relative -right-36 top-1 rounded-2xl"
          onClick={() => setShowForm(false)}
        >X</button>

        <button
          type ="submit"
          className="done-btn bg-white ml-3 p-2"
        >완료</button>

      </form>
    </div>
  )
}