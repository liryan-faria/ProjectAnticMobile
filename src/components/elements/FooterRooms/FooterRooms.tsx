import { Wrapper } from "./style";
import Link from "next/link";

export default function Rooms() {
    return (
        <Wrapper>
            <h2 className="titleLinks">Rooms</h2>
            <div className="linksFooter">
                <Link href="/"><a className="links">Living room</a></Link>
                <Link href="/"><a className="links">Dining room</a></Link>
                <Link href="/"><a className="links">Cooked</a></Link>
                <Link href="/"><a className="links">Bedroom</a></Link>
                <Link href="/"><a className="links">Bathroom</a></Link>
                <Link href="/"><a className="links">Office</a></Link>
                <Link href="/"><a className="links">Laundry</a></Link>
                <Link href="/"><a className="links">Garage</a></Link>
            </div>
        </Wrapper>
    )
}