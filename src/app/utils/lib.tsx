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
    let html = md.render(markdown);
    html = replaceSrc(html);
    console.log(html);
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


/**
  * Replaces occurrences of src="../.." with http://localhost:3000 in the given HTML-like text.
  *
  * @param {string} rawText - The input text in HTML-like format.
  * @returns {string} - The modified text with replaced occurrences.
  */
function replaceSrc(rawText:string) {
    // Use a regular expression to find all occurrences of src="../.."
    const regex = /src="\.\.\/\.\./g;
    // Replace all occurrences with http://localhost:3000
    const modifiedText = rawText.replace(regex, 'src="http://localhost:3000');
    // Return the modified text
    return modifiedText;
}