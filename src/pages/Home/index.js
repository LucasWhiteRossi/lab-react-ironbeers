import { Section } from "../../components/Section";
import beersImg from '../../assets/beers.png';
import newBeerImg from '../../assets/new-beer.png';
import randomBeersImg from '../../assets/random-beer.png';

export function Home() {
    return (  

        <>
            <Section
            url={"/beers"}
            image={beersImg}
            sectionName={"All Beers"}
            sectionDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            } 
            />

            <Section
            url={"/random-beer"}
            image={randomBeersImg}
            sectionName={"Random Beer"}
            sectionDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
            } 
            />

            <Section
            url={"/new-beer"}
            image={newBeerImg}
            sectionName={"All Beers"}
            sectionDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            } 
            />
        </>

    );
}
