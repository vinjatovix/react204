import { useEffect, useState } from "react";
import { getRandomFact } from "../services";

export const useCatFact = () => {
  const [catFact, setCatFact] = useState();

  const refreshFact = () => {
    getRandomFact().then(setCatFact);
  };

  useEffect(refreshFact, []);

  return { catFact, refreshFact };
};
