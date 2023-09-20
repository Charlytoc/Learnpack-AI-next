"use client";
import SimpleButton from "./Button";

interface ISvgProps {
    svg: any;
}


export default function ToggleSidebarButton ({svg}: ISvgProps) {
        const toggleSidebar = () => {
                const sidebar: HTMLElement|null = document.querySelector(".sidebar-component");
                
                // Get the computed style of the sidebar
                if (sidebar) {
                        const style = window.getComputedStyle(sidebar);
                        // Check if sidebar is currently visible
                        if (style.left === '0px') {
                                // If visible, hide it
                                // console.log("WORLD");
                                sidebar.classList.remove("sidebar-appear");
                                sidebar.classList.add("sidebar-disappear");
                        } else {
                                // If hidden, show it
                                // console.log("NOT WORLD");
                                sidebar?.classList.remove("sidebar-disappear");
                                sidebar?.classList.add("sidebar-appear");
                        }
                        // Force a reflow, triggering the animation
                        void sidebar?.offsetWidth;
                }
        }
    return <SimpleButton text="" svg={svg}  action={toggleSidebar} />
}