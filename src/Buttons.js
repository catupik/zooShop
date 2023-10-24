function Buttons({filteredPets, resetPets}){

    return(
        <div className="cont">
            <button className="change" onClick={()=> resetPets()}>All</button>
            <button className="change" onClick={()=> filteredPets('cat')}>Cats</button>
            <button className="change" onClick={()=> filteredPets('dog')}>Dogs</button>
            <button className="change" onClick={()=> filteredPets('parrot')}>Parrots</button>
            <button className="change" onClick={()=> filteredPets('ferret')}>Ferrets</button>
        </div>
    )
}

export default Buttons;