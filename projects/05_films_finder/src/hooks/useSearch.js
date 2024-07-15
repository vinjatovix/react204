import { useEffect, useRef, useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [validationError, setValidationError] = useState(null);
  const pristine = useRef(true);

  useEffect(() => {
    if (pristine.current) {
      pristine.current = search.trim() === "";
      return;
    }

    if (search.trim() === "") {
      setValidationError("Please enter something to search");
      return;
    }

    if (search.trim().length < 3) {
      setValidationError("Please enter at least 3 characters");
      return;
    }

    setValidationError(null);
  }, [search]);

  return { search, setSearch, validationError };
};

export default useSearch;
