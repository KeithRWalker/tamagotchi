const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const btnBuild = (type, content, id) => {
  const btnString = `<button id="${id}" type="${type}">${content}</button>`;
  return btnString;
};

const progBuild = (value, max, id) => {
  const progString = `<progress value="${value}" max="${max}" id="${id}"></progress><h1 id="${id}Per"></h1>`;
  return progString;
};

export default { printToDom, btnBuild, progBuild };
