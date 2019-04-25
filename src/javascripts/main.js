import '../styles/main.scss';

import progress from './components/progress/progress';

import pet from './components/pet/pet';

const init = () => {
  pet.quadBuild();
  progress.progDrain();
};

init();
