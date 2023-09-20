"use client"
import BugButton from "../client/BugButton";
import SimpleButton from "../client/Button";
import ExercisesList from "../client/ExercisesList";
import ToggleSidebarButton from "../client/ToggleSidebarButton";
import useStore from "@/app/utils/store";
import { svgs } from "@/app/resources/svgs";

export default function Sidebar() {
    const {numberOfExercises} = useStore();
    return <div className="sidebar-component scrolleable">
        <section className="p-4 flex justify-end">
        <ToggleSidebarButton svg={svgs.closeIcon} />
        </section>
        <section className="p-4 flex justify-end gap-3 items-center">
            <p>0/{numberOfExercises} Solved exercises</p>
            {/* Pass the buttons below to separate components when I need to add the logic to them */}
            <SimpleButton text="" svg={svgs.videoIcon} action={()=>{}}/>
            <SimpleButton text="" svg={svgs.bulbIcon} action={()=>{}}/>
        </section>
        
            <ExercisesList />
        
        <section className="p-4 footer">
            <BugButton />
            <div>{svgs.userIcon}</div>
        </section>
    </div>
}