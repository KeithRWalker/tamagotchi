import '../styles/main.scss';

import eat from './components/actions/eat';
import fight from './components/actions/fight';
import play from './components/actions/play';
import sleep from './components/actions/sleep';

const init = () => {
  eat.eatBuild();
  fight.fightBuild();
  play.playBuild();
  sleep.sleepBuild();
};

init();
