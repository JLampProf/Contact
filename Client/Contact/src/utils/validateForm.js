export const validateForm = (formData) => {
  const name = formData?.name;
  const email = formData?.email;
  const number = formData?.number;

  if (!name || !email || !number) {
    return "Missing form data";
  }

  if (!email.includes("@")) {
    return "Invalid email";
  }

  if (Number.isNaN(Number(number))) {
    return "Invalid number";
  }

  return "";
};
