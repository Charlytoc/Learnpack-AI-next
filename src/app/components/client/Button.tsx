interface ButtonProps {
    text: string;
    svg: any;
    action: () => void;
}

export default function SimpleButton({text, action, svg}: ButtonProps) {
    return <button className="simple-button-svg" onClick={action}>
        {text}
        {svg}
    </button>
}