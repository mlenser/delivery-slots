import { sortByDate } from './sortByDate';

describe('sortByDate', () => {
  it('should order an array by date', () => {
    const data = [
      '2020-10-14',
      '2020-10-10',
      '2020-10-13',
      '2020-10-12',
      '2020-10-11',
    ];

    const sorted = data.sort(sortByDate);
    expect(sorted).toEqual([
      '2020-10-10',
      '2020-10-11',
      '2020-10-12',
      '2020-10-13',
      '2020-10-14',
    ]);
  });
});
