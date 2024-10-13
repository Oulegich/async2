import GameSavingLoader from '../GameSavingLoader';

describe('tests container', () => {
  test('test case', async () => {
    const expectedData = {
      id: 9,
      created: 1546300800,
      userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
    };

    const saving = await GameSavingLoader.load();

    expect(saving).toEqual(expectedData);
  });
});
