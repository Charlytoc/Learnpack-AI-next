"use client";
import SimpleButton from "./Button";
import useStore from "@/app/utils/store";
interface ISvgProps {
    svg: any;
}


export default function ToggleSidebarButton ({svg}: ISvgProps) {
        const {toggleSidebar}= useStore();
    return <SimpleButton text="" svg={svg}  action={toggleSidebar} />
}