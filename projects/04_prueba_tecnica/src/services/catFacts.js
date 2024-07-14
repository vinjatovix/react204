import { CAT_FACT_URL } from "../constants";

export const getRandomFact = async () => {
  try {
    const response = await fetch(CAT_FACT_URL);
    if (!response.ok) {
      throw new Error("An error occurred while fetching the cat fact");
    }
    const data = await response.json();
    return data.fact;
  } catch (error) {
    return error.message;
  }
};
