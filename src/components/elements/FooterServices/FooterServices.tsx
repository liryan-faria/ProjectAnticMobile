import { Wrapper } from "./style";
import Link from "next/link";

export default function Services() {
    return (
        <Wrapper>
            <h2 className="titleLinks">Services</h2>
            <div className="linksFooter">
                <Link href="/"><a className="links">Click and collect</a></Link>
                <Link href="/"><a className="links">Conception</a></Link>
                <Link href="/"><a className="links">Installation</a></Link>
                <Link href="/"><a className="links">Advices</a></Link>
                <Link href="/"><a className="links">Gift card</a></Link>
            </div>
        </Wrapper>
    )
}