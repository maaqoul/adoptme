import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets?.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          breed={pet.breed}
          animal={pet.animal}
          location={`${pet.city} - ${pet.state}`}
          id={pet.id}
          images={pet.images}
        />
      ))}
    </div>
  );
};

export default Results;
