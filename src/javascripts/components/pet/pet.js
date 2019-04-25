import util from '../../helpers/util';

const quadBuild = () => {
  const runBtn = util.btnBuild('fightBtn', 'Run Away!', 'runBtn');
  const punchBtn = util.btnBuild('fightBtn', 'Punch!', 'punchBtn');
  const fightProg = util.progBuild('100', '100', 'fightProg', 'Strength');

  const codeBtn = util.btnBuild('playBtn', 'Code', 'codeBtn');
  const gameBtn = util.btnBuild('playBtn', 'Video Games', 'gameBtn');
  const playProg = util.progBuild('50', '100', 'playProg', 'Fun');

  const napBtn = util.btnBuild('sleepBtn', 'Nap', 'napBtn');
  const deepSleepBtn = util.btnBuild('sleepBtn', 'Sleep', 'deepSleepBtn');
  const sleepProg = util.progBuild('50', '100', 'sleepProg', 'Energy');

  const junkBtn = util.btnBuild('eatBtn', 'Junk Food', 'junkBtn');
  const healthBtn = util.btnBuild('eatBtn', 'Healthy Food', 'healthBtn');
  const eatProg = util.progBuild('100', '100', 'eatProg', 'Hunger');

  const fightQuad = `${fightProg}${runBtn}${punchBtn} `;
  const playQuad = `${playProg}${codeBtn}${gameBtn}`;
  const sleepQuad = `${sleepProg}${napBtn}${deepSleepBtn}`;
  const eatQuad = `${eatProg}${junkBtn}${healthBtn}`;

  util.printToDom('fight', fightQuad);
  util.printToDom('play', playQuad);
  util.printToDom('sleep', sleepQuad);
  util.printToDom('eat', eatQuad);
};

export default { quadBuild };
