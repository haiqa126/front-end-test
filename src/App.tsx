import "./App.css";
import Contact from "./components/Contact/Contact";
import EdgeNetwork from "./components/EdgeNetwork/EdgeNetwork";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/HeroSection";
import Pricing from "./components/Pricing/Pricing";

function App() {
    return (
        <>
            <Header />

            <Hero />

            <Features />

            <EdgeNetwork />

            <Pricing />

            <Contact />

            <Footer />
        </>
    );
}

export default App;
