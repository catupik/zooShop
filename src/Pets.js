function Pets({petForSale}){

    return(
        <div className="pets">
            {petForSale.map((pet)=>{
                const {id, name, price, image} = pet;
                return(
                    <div className="pet-card" key={id}>
                        <img src={image} alt="pet" width='300'/>
                        <div className="pet-info">
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                )

            })}

        </div>
    )
}

export default Pets;