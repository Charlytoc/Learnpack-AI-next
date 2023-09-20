import { svgs } from "@/app/resources/svgs"
import LessonContent from "../client/LessonContent"
function LessonOptions () {
    return <>
    <div className="lesson-options-component">
        <div>
            <button>{svgs.prevArrowButton}</button>
            <button>{svgs.nextArrowButton}</button>
        </div>
        <div>
            <button>ES</button>
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