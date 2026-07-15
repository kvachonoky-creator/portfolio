import iconsSprite from "../../assets/img/sprite.svg"

type IconsProps = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    "aria-label"?: string
    "aria-hidden"?: boolean
}

export const Icons = (props: IconsProps) => {
    return (
        <svg width={props.width || "120"} height={props.height || "120"} viewBox={props.viewBox || "0 0 120 120"}
             fill="none" xmlns="http://www.w3.org/2000/svg"
             role={props["aria-label"] ? "img" : undefined}
             aria-label={props["aria-label"]}
             aria-hidden={props["aria-hidden"]}>
            <use href={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};
