import React, { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import H2 from '../../components/Headings/H2';
import { useDeliveryContext } from './DeliveryContext';

const sortByStartTime = (
  a: { startTime: string },
  b: { startTime: string },
): number => a.startTime.localeCompare(b.startTime);

type TimeData = {
  deliveryDate: string;
  deliveryTimeId: string;
  inHomeAvailable: boolean;
  startTime: string;
  stopTime: string;
};

const Times: React.FC = () => {
  const [timesData, setTimesData] = useState<TimeData[]>([]);
  const { selectedDate, selectedTime, setSelectedTime } = useDeliveryContext();

  useEffect(() => {
    if (!selectedDate) {
      return undefined;
    }
    (async () => {
      const response = await fetch(
        `https://api.mathem.io/mh-test-assignment/delivery/times/${selectedDate}`,
      );
      const data = await response.json();
      setTimesData(data);
    })();
  }, [selectedDate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime((event.target as HTMLInputElement).value);
  };

  if (!selectedDate) {
    return null;
  }

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
            .map(({ deliveryTimeId, startTime, stopTime }) => (
              <FormControlLabel
                key={deliveryTimeId}
                value={deliveryTimeId}
                control={<Radio />}
                label={`${startTime} – ${stopTime}`}
              />
            ))}
        </RadioGroup>
      </FormControl>
    </section>
  );
};

export default Times;
