import util from '../../helpers/util';

const playBuild = () => {
  const codeBtn = util.btnBuild('playBtn', 'Code', 'codeBtn');
  const gameBtn = util.btnBuild('playBtn', 'Video Games', 'gameBtn');
  const playProg = util.progBuild('50', '100', 'playProg');
  const playBtns = `${codeBtn} ${gameBtn} ${playProg}`;
  util.printToDom('play', playBtns);
};

export default { playBuild };
