import '../styles/main.scss';

import progress from './components/progress/progress';

import pet from './components/pet/pet';

import sprite from './components/sprite/sprite';

const init = () => {
  pet.quadBuild();
  progress.progress();
  sprite.spriteChanges();
};

init();
