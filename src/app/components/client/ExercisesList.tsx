"use client"
import useStore from "@/app/utils/store";

export default function ExercisesList() {    
    const {exercises} = useStore();
    return (
        <ul>
            {exercises.map((item, index) => <ExerciseContainer key={index} name={item.title} isDone={item.isDone} />)}
        </ul>

    )
}

interface IExerciseProps {
    name: string;
    isDone: boolean;
}

function ExerciseContainer({name, isDone}: IExerciseProps) {
    return (
        <li>
            {name}
            {/* {isDone ? "Done" : "Not done"} */}
            {/* <input type="checkbox" checked readOnly/> */}
        </li>
    )
}