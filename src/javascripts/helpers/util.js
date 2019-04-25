const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const btnBuild = (type, content, id) => {
  const btnString = `<button id="${id}" type="${type}">${content}</button>`;
  return btnString;
};

const progBuild = (value, max, id, type) => {
  const progString = `<h4>${type}</h4><h1 id="${id}Per"></h1><progress value="${value}" max="${max}" id="${id}"></progress>`;
  return progString;
};

export default { printToDom, btnBuild, progBuild };
