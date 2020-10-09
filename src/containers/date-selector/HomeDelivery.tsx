import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDeliveryContext } from './DeliveryContext';

const HomeDelivery: React.FC = () => {
  const { homeDelivery, setHomeDelivery } = useDeliveryContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHomeDelivery((event.target as HTMLInputElement).checked);
  };

  return (
    <section>
      <FormControlLabel
        control={
          <Checkbox
            checked={homeDelivery}
            name="homeDelivery"
            onChange={handleChange}
          />
        }
        label="Home delivery"
      />
    </section>
  );
};

export default HomeDelivery;
