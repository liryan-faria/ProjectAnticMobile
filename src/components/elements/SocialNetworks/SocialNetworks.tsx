import { IconFace, IconInstagram, IconLinked, IconTwitter } from "../../icons";
import { Wrapper } from "./style";

export default function SocialNetworks() {
    return (
        <Wrapper>
            <a href="/" className="networks">{IconFace}</a>
            <a href="/" className="networks">{IconTwitter}</a>
            <a href="/" className="networks">{IconLinked}</a>
            <a href="/" className="networks">{IconInstagram}</a>
        </Wrapper>
    )
}