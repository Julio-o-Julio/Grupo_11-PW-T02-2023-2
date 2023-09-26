import { loged } from "./loginFirebase";

const isLoged = () => {
  if (loged) {
    return true;
  }

  return false;
};

export default isLoged;
