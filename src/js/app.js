import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving); // вывод сохранения в консоль
  } catch (error) {
    console.error(error); // вывод ошибки в консоль
  }
})();
