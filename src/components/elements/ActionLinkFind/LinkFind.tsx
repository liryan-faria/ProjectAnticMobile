import { IconRight } from "../../icons";
import { Wrapper } from "./style";

export function LinkFind() {
    return (
        <Wrapper>
            <a href="/" className="link">Find out more</a>
            <div className="icon">
                <span className="iconRight">{IconRight}</span>
            </div>
        </Wrapper>
    )
}