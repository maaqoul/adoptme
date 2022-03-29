import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
