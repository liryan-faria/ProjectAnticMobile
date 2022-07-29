import { Wrapper } from "./style";

export default function Products() {
    return (
        <Wrapper>
            <h2 className="titleLinks">Products</h2>
            <div className="linksFooter">
                <a href="/" className="links">Furniture</a>
                <a href="/" className="links">Decoration</a>
                <a href="/" className="links">Storage</a>
                <a href="/" className="links">Baby and child</a>
                <a href="/" className="links">Connected home</a>
            </div>
        </Wrapper>
    )
}