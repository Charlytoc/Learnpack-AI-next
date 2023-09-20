interface ButtonProps {
    text?: string;
    svg: any;
    extraClass?: string;
    action?: () => void;
}

export default function SimpleButton({text, action, svg, extraClass}: ButtonProps) {
    return <button className={`simple-button-svg ${extraClass}`} onClick={action}>
        {text}
        {svg}
    </button>
}