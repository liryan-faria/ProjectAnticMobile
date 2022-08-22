import Link from "next/link";
import { IconRight } from "../../icons";
import { Wrapper } from "./style";

export function LinkFind() {
    return (
        <Wrapper>
            <Link href="/"><a className="link">Find out more</a></Link>
            <div className="icon">
                <span className="iconRight">{IconRight}</span>
            </div>
        </Wrapper>
    )
}