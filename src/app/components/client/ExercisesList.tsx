"use client"
import useStore from "@/app/utils/store";
import { svgs } from "@/app/resources/svgs";
import SimpleButton from "./Button";
export default function ExercisesList() {
    const { exercises } = useStore();
    return (
        <ul className="exercise-list">
            {exercises.map((item, index) => <ExerciseCard key={index} name={item.title} position={item.position} isDone={item.isDone} />)}
        </ul>

    )
}

interface IExerciseProps {
    name: string;
    isDone: boolean;
    position: number;
}

function ExerciseCard({ name, isDone, position }: IExerciseProps) {
    const { setPosition, fetchReadme, toggleSidebar } = useStore();

    const getNameWithoutNumber = (str:string) => {
        let arr = str.split('-');
        arr.shift();
        return arr.join(' ');
    }

    return (
        <li className="exercise-card" onClick={
            () => {
                setPosition(position);
                fetchReadme();
                toggleSidebar();
            }
        }>
            <div>
                <button className="blue-circle ">
                    <span>{name.split("-")[0]}</span>
                </button>
                <span>
                    {getNameWithoutNumber(name)}
                </span>
            </div>
            <div>
                <SimpleButton svg={svgs.checkIcon} text="" />
            </div>
        </li>
    )
}