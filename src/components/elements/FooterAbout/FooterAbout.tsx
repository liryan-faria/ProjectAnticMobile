import { Wrapper } from "./style";

export default function About() {
    return (
        <Wrapper>
            <h2 className="titleLinks">About</h2>
            <div className="linksFooter">
                <a href="/" className="links">Our story</a>
                <a href="/" className="links">Our stores</a>
                <a href="/" className="links">Our patners</a>
            </div>
        </Wrapper>
    )
}