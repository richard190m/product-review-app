import formatDate from '../formatDate';

describe('FormatDate', () => {
  test('should return date with rigth format', () => {
    const date = new Date('2022-11-11');
    const dateForamted = formatDate(date);

    expect(dateForamted).toEqual('11/11/2022');
  });

  test('should return date with day and month with two digits if < 10', () => {
    const date = new Date('2022-01-01');
    const dateForamted = formatDate(date);

    expect(dateForamted).toEqual('01/01/2022');
  });
});
