import Desing from "../components/templates/Desing/desing";
import Footer from "../components/templates/Footer/footer";
import Hero from "../components/templates/Hero/hero";
import Room from "../components/templates/Room/room";
import Trends from "../components/templates/Trends/trends";

export default function HomeView() {
    return (
        <div>
            <Hero />
            <Room />
            <Desing />
            <Trends />
            <Footer />
        </div>
    )
}