import { sortByStartTime } from './sortByStartTime';

describe('sortByStartTime', () => {
  it('should order an array by startTime', () => {
    const data = [
      {
        deliveryTimeId: '8631cbba-7f07-4f8b-a988-a95906ab6ed0',
        startTime: '20:00',
        stopTime: '22:00',
      },
      {
        deliveryTimeId: '9be9c31f-e129-486b-9b3e-111025299d0f',
        startTime: '19:00',
        stopTime: '21:00',
      },
      {
        deliveryTimeId: '09e45cf5-ec04-4a7f-aebc-06fdb3ccf9d6',
        startTime: '10:00',
        stopTime: '12:00',
      },
    ];

    const sorted = data.sort(sortByStartTime);
    expect(sorted).toEqual([
      {
        deliveryTimeId: '09e45cf5-ec04-4a7f-aebc-06fdb3ccf9d6',
        startTime: '10:00',
        stopTime: '12:00',
      },
      {
        deliveryTimeId: '9be9c31f-e129-486b-9b3e-111025299d0f',
        startTime: '19:00',
        stopTime: '21:00',
      },
      {
        deliveryTimeId: '8631cbba-7f07-4f8b-a988-a95906ab6ed0',
        startTime: '20:00',
        stopTime: '22:00',
      },
    ]);
  });
});
