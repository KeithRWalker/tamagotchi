import util from '../../helpers/util';

const eatBuild = () => {
  const junkBtn = util.btnBuild('eatBtn', 'Junk Food', 'junkBtn');
  const healthBtn = util.btnBuild('eatBtn', 'Healthy Food', 'healthBtn');
  const eatProg = util.progBuild('100', '100', 'eatProg');
  const eatBtns = `${junkBtn} ${healthBtn} ${eatProg}`;
  util.printToDom('eat', eatBtns);
};

export default { eatBuild };
