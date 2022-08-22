import Link from "next/link";
import { Wrapper } from "./style";

export default function About() {
    return (
        <Wrapper>
            <h2 className="titleLinks">About</h2>
            <div className="linksFooter">
                <Link href="/" ><a className="links">Our story</a></Link>
                <Link href="/" ><a className="links">Our stores</a></Link>
                <Link href="/"><a className="links">Our patners</a></Link>
            </div>
        </Wrapper>
    )
}