import { setInterval } from 'timers';

// const btnEvents = () => {
//   document.getElementById('healthBtn').addEventListener('click', () => {
//     const healthProg = document.getElementById('eatProg');
//     console.error(healthProg.value);
//   });
// };

const progress = () => {
  const fullProg = document.getElementById('eatProg');
  const funProg = document.getElementById('playProg');
  const strengthProg = document.getElementById('fightProg');
  const energyProg = document.getElementById('sleepProg');

  let fullNum = 100;
  let funNum = 50;
  let strengthNum = 100;
  let energyNum = 50;

  document.getElementById('healthBtn').addEventListener('click', () => { fullNum += 10; }); // healthy
  document.getElementById('junkBtn').addEventListener('click', () => { fullNum -= 3; }); // junk food

  document.getElementById('codeBtn').addEventListener('click', () => { funNum += 50; }); // code
  document.getElementById('gameBtn').addEventListener('click', () => { funNum += 2; }); // game

  document.getElementById('runBtn').addEventListener('click', () => { strengthNum += 1; }); // run
  document.getElementById('punchBtn').addEventListener('click', () => { strengthNum -= 10; }); // punch

  document.getElementById('napBtn').addEventListener('click', () => { energyNum += 50; }); // nap
  document.getElementById('deepSleepBtn').addEventListener('click', () => { energyNum += 60; }); // sleep

  setInterval(() => {
    fullProg.setAttribute('value', fullNum.toString());
    strengthProg.setAttribute('value', strengthNum.toString());
    energyProg.setAttribute('value', energyNum.toString());
    funProg.setAttribute('value', funNum.toString());
    fullNum -= 1;
    strengthNum -= 1;
    energyNum -= 1;
    funNum -= 1;
    document.getElementById('eatProgPer').innerHTML = `${fullNum} %`;
    document.getElementById('playProgPer').innerHTML = `${funNum} %`;
    document.getElementById('fightProgPer').innerHTML = `${strengthNum} %`;
    document.getElementById('sleepProgPer').innerHTML = `${energyNum} %`;
  }, 100);
  setInterval(() => {
    if (fullNum >= 100) { fullNum = 100; }
    if (strengthNum >= 100) { strengthNum = 100; }
    if (energyNum >= 100) { energyNum = 100; }
    if (funNum >= 100) { funNum = 100; }
    if (fullNum <= 0) { fullNum = 1; }
    if (strengthNum <= 0) { strengthNum = 1; }
    if (energyNum <= 0) { energyNum = 1; }
    if (funNum <= 0) { funNum = 1; }
  }, 1);
};

export default { progress };
