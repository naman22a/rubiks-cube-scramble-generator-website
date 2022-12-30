import { NextPage } from "next";
import { Docs, Header, Landing, ScrambleGenerator } from "../components";
import Footer from "../components/Footer/Footer";

const Index: NextPage = () => {
    return (
        <div className="flex flex-col justify-start">
            <Header />
            <Landing />
            <ScrambleGenerator />
            <Docs />
            <Footer />
        </div>
    );
};

export default Index;
