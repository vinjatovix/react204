import { useEffect, useState } from "react";
import { getCatImageURL } from "../services";
import { CAT_API_IMAGE_HOST } from "../constants";

export const useCatImageURL = ({ fact, options }) => {
  const [catImageUrl, setCatImageUrl] = useState("");
  useEffect(() => {
    if (!fact) {
      return;
    }

    const url = getCatImageURL({ fact, options });

    setCatImageUrl(url);
  }, [fact]);

  return { imageURL: `${CAT_API_IMAGE_HOST}${catImageUrl}` };
};
