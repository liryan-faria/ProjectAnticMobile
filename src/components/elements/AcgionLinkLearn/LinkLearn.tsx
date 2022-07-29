import { IconRight } from "../../icons";
import { Wrapper } from "./style";

export default function LinkLearn() {
    return (
        <Wrapper>
            <a href="/" className="link">Learn more</a>
            <div className="icon">
                <span className="iconRight">{IconRight}</span>
            </div>
        </Wrapper>
    )
}