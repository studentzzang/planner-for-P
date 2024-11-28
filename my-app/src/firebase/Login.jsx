import { loginEmail, signupEmail } from "./Authentication";

export default function Login(){
    return (
        <div className="container flex justify-center items-center w-[100%] h-screen bg-gradient-to-tr from-green-200 to-pink-200">
            <div className="content-container flex flex-col bg-white bg-opacity-70 shadow-slate-400 drop-shadow-lg rounded-3xl h-1/2 w-1/3 ">
                <div className="text text-2xl flex justify-center p-7">
                    만나서 반가워요!
                </div>
                <div className="form">

                </div>
            </div>
        </div>
    )
};