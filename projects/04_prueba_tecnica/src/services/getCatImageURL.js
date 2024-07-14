import { CAT_API_IMAGE_ENDPOINT } from "../constants";

export const getCatImageURL = ({
  fact,
  options = {
    size: "50",
    color: "red",
    limit: 3,
  },
}) => {
  const { size, color, limit } = options;
  const firstThreeWords = fact?.split(" ", limit).join(" ");
  const url = CAT_API_IMAGE_ENDPOINT.replace(":text", firstThreeWords)
    .replace(":size", size)
    .replace(":color", color);

  return url;
};
