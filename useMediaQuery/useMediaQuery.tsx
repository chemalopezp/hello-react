import * as React from "react";

function useMediaQuery(query) {
  const [match, setMatch] = React.useState(false);
  console.log("query", query);
  let result = window.matchMedia(query);
  React.useEffect(() => {
    result.addEventListener("change", (event) => {
      if (event.matches) {
        setMatch(window.matchMedia(query).matches);
      } else {
        setMatch(false);
      }
    });
    return () => {
      result.removeEventListener("change", () => {});
    };
  }, [query]);
  return match;
}

export default useMediaQuery;
