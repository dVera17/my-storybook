import './MyLabel.css';

interface Props {
    /**
     * Text to display
     */
    label: string;

    /**
     * Label Size
     */
    size?: 'normal' | "h1" | "h2" | "h3";

    /**
     * All Caps
     */
    allCaps?: boolean

    /**
     * Label Color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

    /**
     * fontColor
     */
    fontColor?: string
}

const MyLabel = ({ label, size, allCaps, color, fontColor }: Props) => {
    return (
        <span className={`${size} ${color}`} style={{ color: fontColor }}>{allCaps && allCaps === true ? label.toUpperCase() : label}</span>
    )
}

export default MyLabel;