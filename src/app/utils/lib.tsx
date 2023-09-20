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