import Firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import progress from './components/progress/progress';
import pet from './components/pet/pet';
import sprite from './components/sprite/sprite';

import '../styles/main.scss';

const init = () => {
  Firebase.initializeApp(apiKeys.firebaseKeys);
  pet.quadBuild();
  progress.progress();
  sprite.spriteChanges();
};

init();
