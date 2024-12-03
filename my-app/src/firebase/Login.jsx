import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default function Login(){

  const auth = new getAuth();
  const provider = new GoogleAuthProvider();

  const popupGoogleLogin = () => {
    signInWithPopup(auth,provider).then(async (data)=>{
      console.log("data:", data.user.email);
    });  
  }
  
    return (
      
        <div className="container flex justify-center items-center w-[100%] h-screen bg-gradient-to-tr from-green-200 to-pink-200">
            <div className="content-container flex flex-col bg-white bg-opacity-70 shadow-slate-400 drop-shadow-lg rounded-3xl h-1/2 w-1/3 ">
                <div className="text text-2xl flex justify-center p-7">
                    만나서 반가워요!
                </div>
                <div className="form flex justify-center items-center m-16">

                  <button className="p-3 rounded-2xl bg-pink-300"
                  onClick={popupGoogleLogin}>Google 로그인</button>

                </div>
            </div>

        </div>
    )
};