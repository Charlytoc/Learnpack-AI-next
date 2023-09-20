import { Remarkable } from 'remarkable';

/**
  * Converts markdown to HTML and injects it into a div.
  * @param {string} markdown - The markdown string to be converted.
  * @returns {string} - The HTML string.
  */
export const convertMarkdownToHTML = (markdown:any) => {
    // Create a new instance of the Remarkable markdown parser
    const md = new Remarkable();
    // Convert the markdown to HTML using the Remarkable parser
    const html = md.render(markdown);

    return html;
}


export const changeSidebarVisibility = () => {
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