const getAge = (dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth.split("/").reverse());
  const age = today.getFullYear() - birthDate.getFullYear();
  return age.toString();
};

export default getAge;
