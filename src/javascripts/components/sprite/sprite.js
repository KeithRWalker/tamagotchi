const spriteChanges = () => {
  const bg = document.getElementById('pet');

  document.getElementById('junkBtn').addEventListener('click', () => {
    bg.style.backgroundImage = "url('./src/imgs/junkFood.gif')";
  });

  document.getElementById('healthBtn').addEventListener('click', () => {
    bg.style.backgroundImage = "url('./src/imgs/healthFood.gif')";
  });

  document.getElementById('codeBtn').addEventListener('click', () => {
    bg.style.backgroundImage = "url('./src/imgs/coding.gif')";
  });

  document.getElementById('gameBtn').addEventListener('click', () => {
    bg.style.backgroundImage = "url('./src/imgs/game.gif')";
  });

  document.getElementById('runBtn').addEventListener('click', () => {
    bg.style.backgroundImage = "url('./src/imgs/running.gif')";
  });

  document.getElementById('punchBtn').addEventListener('click', () => {
    bg.style.backgroundImage = "url('./src/imgs/punch2.gif')";
  });

  document.getElementById('napBtn').addEventListener('click', () => {
    bg.style.backgroundImage = "url('./src/imgs/nap.gif')";
  });

  document.getElementById('deepSleepBtn').addEventListener('click', () => {
    bg.style.backgroundImage = "url('./src/imgs/deepSleep.gif')";
  });
  setInterval(() => {
    bg.style.backgroundImage = "url('./src/imgs/default.gif')";
  }, 10000);
};

export default { spriteChanges };
