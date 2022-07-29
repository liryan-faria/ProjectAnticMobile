import { IconScrollDown } from "../../icons";
import { ScrollStyled } from "./style";

export default function Scroll() {
    return (
        <ScrollStyled>
            <div className="iconDown">
                <span className="icon">{IconScrollDown}</span>
            </div>
        </ScrollStyled>
    )
}