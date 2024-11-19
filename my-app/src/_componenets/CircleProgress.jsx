import {useState} from 'react';

export default function CircleProgress(color, currentTab, missions){

    const [progress, setProgress] = useState();

    const size = 256;
    const r = size / 2-5; //반지름
    const c =  2 * Math.PI * r; //둘레
    const offset = c - (progress/ 100) * c;

    return (
        <div className="flex justify-center items-center circle-container w-[30vh] h-[30vh] bg-pink-300 self-start m-12 aspect-square">
            <svg
                width={size}
                height={size}
                className="transform -rotate-90 "
            >
                <circle
                    cx={size/2}
                    cy={size/2}
                    r={r}
                    stroke={color}
                    strokeDasharray={offset}
                    strokeLinecap='round'
                    className="transition-all duration-300"
                />
            </svg>

            <span className="absolute text-lg font-semibold text-teal-600">
                {progress}%
            </span>
        </div>
    );
}