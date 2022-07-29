
import { LinkFind } from "../../elements/ActionLinkFind/LinkFind";
import { Wrapper } from "./style";

export default function Desing() {
    return (
        <Wrapper>
            <h1 className="title">We stay by your side to design your projects</h1>
            <LinkFind />
            <div className="services">
                <div className="boxServices">
                    <h2 className="titleAdvices">Our Advices</h2>
                    <span className="text">What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.</span>
                </div>
                <div className="boxServices">
                    <h2 className="titleServices">Click and Collect</h2>
                    <span className="text">Adapted and contactless. Free from € 200 of purchases in stores offering the service.</span>
                </div>
                <div className="boxServices">
                    <h2 className="titleServices">Conception Service</h2>
                    <span className="text">Personalized service with an expert advisor for your interior and exterior decoration or layout projects. </span>
                </div>
                <div className="boxServices">
                    <h2 className="titleServices">Installation Service </h2>
                    <span className="text">Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.</span>
                </div>

            </div>
        </Wrapper>
    )
}