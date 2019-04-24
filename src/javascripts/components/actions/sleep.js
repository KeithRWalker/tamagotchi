import util from '../../helpers/util';

const sleepBuild = () => {
  const napBtn = util.btnBuild('sleepBtn', 'Nap', 'napBtn');
  const deepSleepBtn = util.btnBuild('sleepBtn', 'Sleep', 'deepSleepBtn');
  const sleepProg = util.progBuild('50', '100', 'sleepProg');
  const sleepBtns = `${napBtn} ${deepSleepBtn} ${sleepProg}`;
  util.printToDom('sleep', sleepBtns);
};

export default { sleepBuild };
