"use client"
import { svgs } from "@/app/resources/svgs"
import LessonContent from "../client/LessonContent"
import useStore from "@/app/utils/store"

function LessonOptions () {
    const {currentExercisePosition,language, setPosition, fetchReadme, exercises, toggleLanguage} = useStore();

    const handlePositionChange = (action:string) => {
        if (action === "next" && currentExercisePosition != exercises.length - 1) {
            // TODO: Just if there are more exercise, if not, I need to discuss what will happen
            setPosition(currentExercisePosition + 1)
        }
        else if (action === "prev" && currentExercisePosition != 0) {
            
            setPosition(currentExercisePosition - 1)
        }
        fetchReadme()
    }
    return <>
    <div className="lesson-options-component">
        <div>
            <button onClick={()=>handlePositionChange("prev")}>{svgs.prevArrowButton}</button>
            <button onClick={()=>handlePositionChange("next")}>{svgs.nextArrowButton}</button>
        </div>
        <div>
            <button onClick={toggleLanguage}>{language}</button>
        </div>
    </div>
    </>
}

export default function LessonContainer () {
  
    return (
    <div className="lesson-container-component">
        <LessonOptions />
        <LessonContent />
    </div>
    )
}