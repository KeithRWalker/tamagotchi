import util from '../../helpers/util';

const fightBuild = () => {
  const runBtn = util.btnBuild('fightBtn', 'Run Away!', 'runBtn');
  const punchBtn = util.btnBuild('fightBtn', 'Punch!', 'healthBtn');
  const fightProg = util.progBuild('100', '100', 'fightProg');
  const fightBtns = `${runBtn} ${punchBtn} ${fightProg}`;
  util.printToDom('fight', fightBtns);
};

export default { fightBuild };
