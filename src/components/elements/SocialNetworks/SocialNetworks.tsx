import { IconFace, IconInstagram, IconLinked, IconTwitter } from "../../icons";
import { Wrapper } from "./style";
import Link from "next/link";

export default function SocialNetworks() {
    return (
        <Wrapper>
            <Link href="/"><a className="networks">{IconFace}</a></Link>
            <Link href="/"><a className="networks">{IconTwitter}</a></Link>
            <Link href="/"><a className="networks">{IconLinked}</a></Link>
            <Link href="/"><a className="networks">{IconInstagram}</a></Link>
        </Wrapper>
    )
}