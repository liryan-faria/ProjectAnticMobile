
import Header from "../../elements/Header/Header";
import Scroll from "../../elements/ScrollDown/Scroll";
import { Wrapper } from "./style";


export default function Hero() {
    return (
        <Wrapper>
            <Header />
            <div className="boxHero">
                <span className="label">HOME DESIGN</span>
                <h1 className="title">Elegance for Interiors & Exteriors</h1>
                <span className="paragraph">We provide everyone with modern, trendy, quality furniture</span>
                <Scroll />
            </div>
        </Wrapper>
    )
}