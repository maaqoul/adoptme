import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div>
      {pets?.map((pet) => (
        <Pet key={pet.id} name={pet.name} breed={pet.breed} animal={animal} />
      ))}
    </div>
  );
};

export default Results;
