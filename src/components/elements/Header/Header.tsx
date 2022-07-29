import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { HeaderStyled } from "./style";

export default function Header() {
    return (
        <HeaderStyled>
            <Logo />
            <Menu />
        </HeaderStyled>
    )
}