import { setInterval } from 'timers';

const colorChange = (divId, progId) => { // This changes the background color of the quads
  const prog = document.getElementById(progId).value;
  const bg = document.getElementById(divId);

  if (prog <= 50) {
    bg.style.backgroundColor = 'orange';
  } if (prog <= 10) {
    bg.style.backgroundColor = 'red';
  } if (prog >= 50) {
    bg.style.backgroundColor = 'rgba(9, 248, 49, 0.733)';
  }
};

const progress = () => { // Progress bar stuff
  // selecting the progress bars
  const fullProg = document.getElementById('eatProg');
  const funProg = document.getElementById('playProg');
  const strengthProg = document.getElementById('fightProg');
  const energyProg = document.getElementById('sleepProg');

  // starting value for the progress bars
  let fullNum = 100;
  let funNum = 50;
  let strengthNum = 100;
  let energyNum = 50;

  // Elisteners for the buttons
  document.getElementById('healthBtn').addEventListener('click', () => { fullNum += 10; }); // healthy
  document.getElementById('junkBtn').addEventListener('click', () => { fullNum -= 3; }); // junk food

  document.getElementById('codeBtn').addEventListener('click', () => { funNum += 50; }); // code
  document.getElementById('gameBtn').addEventListener('click', () => { funNum += 2; }); // game

  document.getElementById('runBtn').addEventListener('click', () => { strengthNum += 1; }); // run
  document.getElementById('punchBtn').addEventListener('click', () => { strengthNum -= 10; }); // punch

  document.getElementById('napBtn').addEventListener('click', () => { energyNum += 50; }); // nap
  document.getElementById('deepSleepBtn').addEventListener('click', () => { energyNum += 60; }); // sleep

  // showing the % in the quads
  document.getElementById('eatProgPer').innerHTML = `${fullNum} %`;
  document.getElementById('playProgPer').innerHTML = `${funNum} %`;
  document.getElementById('fightProgPer').innerHTML = `${strengthNum} %`;
  document.getElementById('sleepProgPer').innerHTML = `${energyNum} %`;

  // This lowers all the progress bars by 1% every second
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
  }, 1000);

  // This updates everything, and puts a cap on the % + prevents it from dropping below 0%
  setInterval(() => {
    // 0-100%
    if (fullNum >= 100) { fullNum = 100; }
    if (strengthNum >= 100) { strengthNum = 100; }
    if (energyNum >= 100) { energyNum = 100; }
    if (funNum >= 100) { funNum = 100; }
    if (fullNum <= 0) { fullNum = 0; }
    if (strengthNum <= 0) { strengthNum = 0; }
    if (energyNum <= 0) { energyNum = 0; }
    if (funNum <= 0) { funNum = 0; }
    document.getElementById('eatProgPer').innerHTML = `${fullNum} %`;
    document.getElementById('playProgPer').innerHTML = `${funNum} %`;
    document.getElementById('fightProgPer').innerHTML = `${strengthNum} %`;
    document.getElementById('sleepProgPer').innerHTML = `${energyNum} %`;
    fullProg.setAttribute('value', fullNum.toString());
    strengthProg.setAttribute('value', strengthNum.toString());
    energyProg.setAttribute('value', energyNum.toString());
    funProg.setAttribute('value', funNum.toString());
    // calling the color changing function here
    colorChange('eat', 'eatProg');
    colorChange('play', 'playProg');
    colorChange('fight', 'fightProg');
    colorChange('sleep', 'sleepProg');
  }, 1);
};

export default { progress };
