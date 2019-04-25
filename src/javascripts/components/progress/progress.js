import { setInterval } from 'timers';

const progDrain = () => {
  const fullProg = document.getElementById('eatProg');
  const funProg = document.getElementById('playProg');
  const strengthProg = document.getElementById('fightProg');
  const energyProg = document.getElementById('sleepProg');
  let fullNum = 100;
  let strengthNum = 100;
  let energyNum = 50;
  let funNum = 50;
  setInterval(() => {
    fullProg.setAttribute('value', fullNum.toString());
    strengthProg.setAttribute('value', strengthNum.toString());
    energyProg.setAttribute('value', energyNum.toString());
    funProg.setAttribute('value', funNum.toString());
    fullNum -= 1;
    strengthNum -= 1;
    energyNum -= 1;
    funNum -= 1;
    if (fullNum <= 0) { fullNum = 0; }
  }, 100);
};

export default { progDrain };
