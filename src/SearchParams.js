import { useState, useEffect } from "react";
import Results from "./Results";
import useBreed from "./useBreed";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [breed, setBreed] = useState([]);
  const [breeds, status] = useBreed(selectedAnimal);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  async function fetchPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await response.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPets();
        }}
      >
        <label htmlFor="location">
          <input
            value={location}
            id="location"
            type="text"
            onInput={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          <select
            id="animal"
            onChange={(e) => setSelectedAnimal(e.target.value)}
            onBlur={(e) => setSelectedAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="animal">
          <select id="breed" onChange={(e) => setBreed(e.target.value)}>
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>submit</button>
      </form>
      <strong>{status}</strong>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
