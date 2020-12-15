import { useEffect, useState } from "react";
import {getCreadits} from '../api/tmdb-api'

const useCreadits = id => {
  const [creadits, setCreadits] = useState(null);
  useEffect(() => {
    getCreadits(id).then(creadits => {
      setCreadits(creadits);
    });
  }, [id]);
  return [creadits, setCreadits];
};

export default useCreadits