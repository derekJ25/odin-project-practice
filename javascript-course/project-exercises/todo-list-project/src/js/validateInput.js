const validateInput = (input) => {
  if (input == null || input.trim() == "") {
    return false;
  }
  return true;
};

export default validateInput;
