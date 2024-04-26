import { useContext } from "react";
import NewtonContext from "../context/Newton/NewtonContext";

const useErrors = () => {
  const { errors } = useContext(NewtonContext);

  return { messageError: errors };
};

export default useErrors;
