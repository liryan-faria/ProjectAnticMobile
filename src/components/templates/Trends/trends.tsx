import LinkLearn from "../../elements/AcgionLinkLearn/LinkLearn";
import Button from "../../elements/Button/Button";
import Input from "../../elements/Input/Input";
import { Wrapper } from "./style";

export default function Trends() {
    return (
        <Wrapper>
            <div className="trends">
                <div className="newsletter">
                    <h1 className="titleTrends">Be aware of the latest trends</h1>
                    <span className="textTrends">Stay informed of new trends,
                        but also of our various offers.
                    </span>
                    <LinkLearn />
                </div>
                <Input type={'email'} />
                <div className="button">
                    <Button />
                </div>
            </div>
            <div className="inspirations">
                <h1 className="titleInspirations">Inspirations</h1>
                <span className="paragraph">Our experts are keen to stay on top
                    of trends in order to offer you new inspirations for your
                    interior and exterior every day. Remember that to inspire you
                    we have to inspire ourselves and we want to share that with
                    you.
                </span>
                <div className="gallery">
                    <div className="lineOne">
                        <div className="boxImageChair">
                            <div className="imageChair" />
                            <span className="titleImage">Chair</span>
                        </div>
                        <div className="boxImage">
                            <div className="imageCooked" />
                            <span className="titleImage">Cooked</span>
                        </div>
                    </div>
                    <div className="line">
                        <div className="boxImageRoom">
                            <div className="imageRoom" />
                            <span className="titleImage">Room</span>
                        </div>
                        <div className="boxImage">
                            <div className="imageTables" />
                            <span className="titleImage">Tables</span>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}