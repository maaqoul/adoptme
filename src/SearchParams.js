import { useState, useEffect, useContext } from "react";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import useBreed from "./useBreed";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const Colors = ["red", "blue", "pink", "gray", "white"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [breed, setBreed] = useState([]);
  const [breeds] = useBreed(selectedAnimal);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    fetchPets();
  }, []);

  async function fetchPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${selectedAnimal}&location=${location}&breed=${breed}`
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
        <label htmlFor="breed">
          <select
            id="breed"
            className="disabled: opacity-50"
            disabled={!breeds.lenght}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="color">
          <select id="Color" onChange={(e) => setTheme(e.target.value)}>
            <option />
            {Colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </label>
        <button style={{ backgroundColor: theme }} type="submit">
          submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
