import { useEffect, useState } from "react";

const cache = {};

function useBreed(animal) {
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
        cache[animal] = json.breeds;
        setBreeds(json.breeds);
        setStatus("done");
      })();
    }
  }, [animal]);

  return [breeds, status];
}
export default useBreed;
