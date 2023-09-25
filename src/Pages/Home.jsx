import { useState } from "react";
import CardContainer from "../Components/CardContainer";
import HeroSection from "../Components/HeroSection";

const Home = () => {
    const [value, setValue] = useState("")
    return (
        <div>
            <HeroSection setValue={setValue}></HeroSection>
            <CardContainer value={value}></CardContainer>
        </div>
    );
};

export default Home;