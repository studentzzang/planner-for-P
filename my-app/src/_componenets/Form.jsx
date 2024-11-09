export default function Form({handleChange, setShowForm}){
  return (
    <div className="form-container h-1/2 w-1/2 fixed bg-[rgba(255,255,255,0.5)] rounded-xl">
      <form className="flex items-center justify-center pt-2">
        <input
          className="w-2/3 px-3 py-2 text-teal-800 border rounded"
          type="text"
          name="value"
          placeholder="미션이 무엇인가요?"
          onChange={handleChange}
        />

        <button 
          className="form-cancle  bg-white absolute top-3 right-3 ml-3 aspect-square rounded-2xl"
          onClick={() => setShowForm(false)}
        >X</button>

      </form>
    </div>
  )
}