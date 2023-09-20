"use client"
import useStore from "@/app/utils/store"
import {useEffect } from "react";
export default function LessonContent () {
    const {currentContent, fetchExercises} = useStore();
    
    useEffect(()=>{
        fetchExercises()
    },[])
    return <>
    <div dangerouslySetInnerHTML={{__html:currentContent}}>
    </div>
    </>
}