import { Wrapper } from "./style";
import Link from "next/link";

export default function Products() {
    return (
        <Wrapper>
            <h2 className="titleLinks">Products</h2>
            <div className="linksFooter">
                <Link href="/"><a className="links">Furniture</a></Link>
                <Link href="/"><a className="links">Decoration</a></Link>
                <Link href="/"><a className="links">Storage</a></Link>
                <Link href="/"><a className="links">Baby and child</a></Link>
                <Link href="/"><a className="links">Connected home</a></Link>
            </div>
        </Wrapper>
    )
}