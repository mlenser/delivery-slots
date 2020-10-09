import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import H2 from '../../components/Headings/H2';
import { formatTime } from '../../utils/formatTime';
import { TimeData } from '../../types/types';
import { useDeliveryContext } from './DeliveryContext';

const sortByStartTime = (
  a: { startTime: string },
  b: { startTime: string },
): number => a.startTime.localeCompare(b.startTime);

const filterForHomeDelivery = ({
  homeDelivery,
  time,
}: {
  homeDelivery: boolean;
  time: TimeData;
}): boolean => {
  if (homeDelivery) {
    return time.inHomeAvailable;
  }
  return true;
};

const Times: React.FC = () => {
  const {
    homeDelivery,
    selectedDate,
    selectedTime,
    setSelectedTime,
    setTimesData,
    timesData,
  } = useDeliveryContext();

  useEffect(() => {
    if (selectedDate) {
      (async () => {
        const response = await fetch(
          `https://api.mathem.io/mh-test-assignment/delivery/times/${selectedDate}`,
        );
        const data = await response.json();
        setTimesData(data);
      })();
    }
  }, [selectedDate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedTime((event.target as HTMLInputElement).value);
  };

  if (!selectedDate) {
    return null;
  }

  /* UX comments: it is better to disable the time instead of removing it as that can be very confusing for the user. I left the filter above if you'd like to see that code. It can be called with
  .filter((time) => filterForHomeDelivery({ homeDelivery, time }))
   */
  return (
    <section>
      <H2>Times</H2>
      <FormControl component="fieldset">
        <FormLabel component="legend">Select a time</FormLabel>
        <RadioGroup
          aria-label="time"
          name="time"
          value={selectedTime}
          onChange={handleChange}
        >
          {timesData
            .sort(sortByStartTime)
            .map(({ deliveryTimeId, inHomeAvailable, startTime, stopTime }) => (
              <FormControlLabel
                key={deliveryTimeId}
                control={<Radio />}
                disabled={homeDelivery && !inHomeAvailable}
                label={formatTime(startTime, stopTime)}
                value={deliveryTimeId}
              />
            ))}
        </RadioGroup>
      </FormControl>
    </section>
  );
};

export default Times;
