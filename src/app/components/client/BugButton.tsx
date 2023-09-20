"use client";
import useStore from "@/app/utils/store";
import { svgs } from "@/app/resources/svgs";
import SimpleButton from "./Button";

export default function BugButton () {
    const {currentExercisePosition, exercises, lessonTitle} = useStore();
    let defaultTitle = "Bug"

    if (currentExercisePosition != 0) {
        defaultTitle = `I have a problem with the exercise ${exercises[currentExercisePosition].slug} of the lesson: ${lessonTitle}`
    }

    
    const bugUrl = `https://github.com/learnpack/learnpack/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=${defaultTitle}`
    const reportBug = () => {
        window.open(bugUrl, "_blank");
    }
    return <SimpleButton svg={svgs.bugIcon} text="" action={reportBug} />
}