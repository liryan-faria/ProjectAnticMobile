import Link from "next/link";
import LinkLearn from "../../elements/AcgionLinkLearn/LinkLearn";
import About from "../../elements/FooterAbout/FooterAbout";
import FooterLogo from "../../elements/FooterLogo/Logo";
import Products from "../../elements/FooterProducts/FooterProducts";
import Rooms from "../../elements/FooterRooms/FooterRooms";
import Services from "../../elements/FooterServices/FooterServices";
import SocialNetworks from "../../elements/SocialNetworks/SocialNetworks";
import { Wrapper } from "./style";

export default function Footer() {
    return (
        <Wrapper>
            <div className="logo">
                <FooterLogo />
            </div>
            <About />
            <Services />
            <Products />
            <Rooms />
            <div className="blog">
                <h3 className="titleBlog">We respect our planet</h3>
                <div className="imageBlog" />
                <span className="paragraph">We’re taking positive steps to reduce
                    our impact on the planet. For us, that means retailing
                    responsibly. We’ve set a number of goals to get us there.
                </span>
                <LinkLearn />
            </div>
            <SocialNetworks />
            <div className="legals">
                <div className="links">
                    <Link href="/"><a className="linksLegals">Privacy policy</a></Link>
                    <Link href="/"><a className="linksLegals">Term of service</a></Link>
                </div>
                <Link href="/"><a className="language">Language</a></Link>
                <span className="agence">© 2021 Agence Dnd</span>
            </div>
        </Wrapper>
    )
}