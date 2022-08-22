import { Wrapper } from "./style";

export default function Room() {
    return (
        <Wrapper>
            <div className="boxOne">
                <h1 className="titlePage">Find your room</h1>
                <span className="paragraph">Dining room, bedroom, bathroom or office. Find what you need</span>
            </div>
            <div className="boxTwo">
                <div className="boxTitle">
                    <h1 className="title">Bedroom</h1>
                </div>
                <div className="image" />
                <div className="label">News arrivals</div>
            </div>

        </Wrapper>
    )
}