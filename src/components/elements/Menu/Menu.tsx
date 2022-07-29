import { IconMenu } from "../../icons";
import { MenuStyled } from "./style";

export default function Menu() {
    return (
        <MenuStyled>
            <div className="icon">{IconMenu}</div>
        </MenuStyled>
    )
}