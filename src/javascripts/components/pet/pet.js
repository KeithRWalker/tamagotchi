import util from '../../helpers/util';
import progress from '../progress/progress';

const quadBuild = () => {
  const runBtn = util.btnBuild('fightBtn', 'Run Away!', 'runBtn');
  const punchBtn = util.btnBuild('fightBtn', 'Punch!', 'healthBtn');
  const fightProg = util.progBuild('100', '100', 'fightProg');

  const codeBtn = util.btnBuild('playBtn', 'Code', 'codeBtn');
  const gameBtn = util.btnBuild('playBtn', 'Video Games', 'gameBtn');
  const playProg = util.progBuild('50', '100', 'playProg');

  const napBtn = util.btnBuild('sleepBtn', 'Nap', 'napBtn');
  const deepSleepBtn = util.btnBuild('sleepBtn', 'Sleep', 'deepSleepBtn');
  const sleepProg = util.progBuild('50', '100', 'sleepProg');

  const junkBtn = util.btnBuild('eatBtn', 'Junk Food', 'junkBtn');
  const healthBtn = util.btnBuild('eatBtn', 'Healthy Food', 'healthBtn');
  const eatProg = util.progBuild('100', '100', 'eatProg');

  const fightQuad = `${runBtn} ${punchBtn} ${fightProg}`;
  const playQuad = `${codeBtn} ${gameBtn} ${playProg}`;
  const sleepQuad = `${napBtn} ${deepSleepBtn} ${sleepProg}`;
  const eatQuad = `${junkBtn} ${healthBtn} ${eatProg}`;

  util.printToDom('fight', fightQuad);
  util.printToDom('play', playQuad);
  util.printToDom('sleep', sleepQuad);
  util.printToDom('eat', eatQuad);
  const healthyFood = document.getElementById('healthBtn');
  healthyFood.addEventListener('click', progress.progDrain);
};

export default { quadBuild };
