import { formatTime } from './formatTime';

describe('formatTime', () => {
  it('should add two times together', () => {
    const text = formatTime('8:00', '12:00');
    expect(text).toEqual('8:00 – 12:00');
  });
});
