"use client";
import SimpleButton from "./Button";
import { svgs } from '@/app/resources/svgs'
import Socket from "@/app/utils/socket"
import useStore from "@/app/utils/store";
import { toast } from 'react-hot-toast';


export default function BuildButton () {
    const {currentExercisePosition, exercises} = useStore();
    const build = () => {
        Socket.start('http://localhost:3000');
    
        const compilerSocket = Socket.createScope('compiler');
        const data = {
          exerciseSlug: exercises[currentExercisePosition].slug
        }
        
        compilerSocket.emit('build', data);
        toast.success('Build completed!');
    }
    
    return <SimpleButton text="Build" svg={svgs.buildIcon} extraClass="pill bg-blue" action={build} />
}