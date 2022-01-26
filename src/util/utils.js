// a helper method for decoding html encoded API-data before it is being used in a template
export const htmlDecode = (string) => {
  const htmlElement = document.createElement("textarea");
  htmlElement.innerHTML = string;
  return htmlElement.value;
};
