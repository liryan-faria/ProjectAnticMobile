import Link from "next/link";
import { IconRight } from "../../icons";
import { Wrapper } from "./style";

export default function LinkLearn() {
    return (
        <Wrapper>
            <Link href="/"><a className="link">Learn more</a></Link>
            <div className="icon">
                <span className="iconRight">{IconRight}</span>
            </div>
        </Wrapper>
    )
}