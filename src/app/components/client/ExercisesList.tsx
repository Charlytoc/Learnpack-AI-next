"use client"
import { exercises } from "@/app/resources/testObjects";

export default function ExercisesList() {
    console.log("HELLO>");
    
    return (
        <ul>
            {exercises.map((item, index) => <ExerciseContainer name={item.name} isDone={item.isDone} />)}
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
            {isDone ? "Done" : "Not done"}
            <input type="checkbox" checked />
        </li>
    )
}