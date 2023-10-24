import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Pets from "./Pets";

function Home(){

    const [pets, setPets] = useState(data);

    const chosenPets = (searchTerm) =>{
        
        const newPets = data.filter(element=> element.searchTerm === searchTerm);
        setPets(newPets);
    }
    const resetPets = () => {
        setPets(data);
    }

    return(
        <div>
            <div className="cont">
                 <h2 className="back">Paws, Whiskers, and Endless Love</h2>
            </div>

            <Buttons filteredPets={chosenPets} resetPets={resetPets}/>
            <Pets petForSale={pets}/>
        </div>
    )
}
export default Home;