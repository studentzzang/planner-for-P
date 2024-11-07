function App() {

  return (
    <>
      <div className = "full-container w-full h-screen bg-gradient-to-tr from-green-200 to-cyan-200">
        <div className="menu-container h-screen w-1/4 bg-white">
          <div className="profile-container h-1/5 bg-blue-400">
            <div className="picture-container aspect-square h-full bg-purple-400 flex justify-center items-center ">
              <img className="profile-pic align-middle h-3/4 object-cover object-center rounded-full" src="https://i.ytimg.com/vi/tHRm22e2kyc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAz32Sgxbe1ibtMzN3LaJ9DwjuoKw"></img>
            </div>
          </div>

        </div>

        <div className="menu-bar h-auto">

        </div>
        <div className="data-container w-auto h-screen"></div>
      </div>
    </>
  )
}

export default App
