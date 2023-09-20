"use client"
import useStore from "@/app/utils/store";

export default function ExercisesList() {    
    const {exercises} = useStore();
    return (
        <ul>
            {exercises.map((item, index) => <ExerciseContainer key={index} name={item.title} position={item.position} isDone={item.isDone} />)}
        </ul>

    )
}

interface IExerciseProps {
    name: string;
    isDone: boolean;
    position: number;
}

function ExerciseContainer({name, isDone, position}: IExerciseProps) {
    const {setPosition, fetchReadme, toggleSidebar} = useStore();
    return (
        <li onClick={
            () => {
                setPosition(position);
                fetchReadme();
                toggleSidebar();
            }
        }>
            {name}
        </li>
    )
}