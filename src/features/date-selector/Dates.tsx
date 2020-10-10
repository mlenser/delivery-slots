import React, { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { DATES_API } from '../../constants/constants';
import H2 from '../../components/Headings/H2';
import { useDeliveryContext } from './DeliveryContext';

const sortByDate = (a: string, b: string): number => a.localeCompare(b);

const Dates: React.FC = () => {
  const [datesData, setDatesData] = useState<string[]>([]);
  const { selectedDate, setSelectedDate } = useDeliveryContext();

  useEffect(() => {
    (async () => {
      const response = await fetch(DATES_API);
      const data = await response.json();
      setDatesData(data);
    })();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedDate((event.target as HTMLInputElement).value);
  };

  return (
    <section>
      <H2>Dates</H2>
      <FormControl component="fieldset" required>
        <FormLabel component="legend">Select a date</FormLabel>
        <RadioGroup
          aria-label="date"
          name="date"
          value={selectedDate}
          onChange={handleChange}
        >
          {datesData.sort(sortByDate).map((date) => (
            <FormControlLabel
              key={date}
              control={<Radio required />}
              label={date}
              value={date}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </section>
  );
};

export default Dates;
