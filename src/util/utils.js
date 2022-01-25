export const htmlDecode = string => {
	const htmlElement = document.createElement("textarea");
	htmlElement.innerHTML = string;
	return htmlElement.value;
};
