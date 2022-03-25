import { useEffect, useState } from "react";

const cache = {};

function useBreed(animal) {
  console.log("animal :", animal);
  console.log("this :", this);
  const [breeds, setBreeds] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreeds([]);
    } else if (cache[animal]) {
      setBreeds(cache[animal]);
    } else {
      (async () => {
        setStatus("loading ...");
        const response = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
        );
        const json = await response.json();
        console.log("json :", json);
        cache[animal] = json.breeds;
        setBreeds(json.breeds);
        setStatus("done");
      })();
    }
  }, [animal]);

  return [breeds, status];
}
export default useBreed;
