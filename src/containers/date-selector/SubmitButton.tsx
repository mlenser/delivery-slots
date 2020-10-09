import React from 'react';
import Button from '@material-ui/core/Button';
import { useDeliveryContext } from './DeliveryContext';

const SubmitButton: React.FC = () => {
  const { homeDelivery } = useDeliveryContext();

  // UX comments: It is not a good practice to disable a button like this as the user then has no means of knowing what steps must be completed before they can proceed. It would be much better to always have it enabled and show an error message if the required fields are not set. But for this code exercise I have followed the specifications
  return (
    <section>
      <Button
        className={homeDelivery ? '' : 'disabled'}
        color="primary"
        disabled={!homeDelivery}
        type="submit"
        variant="contained"
      >
        Submit
      </Button>
    </section>
  );
};

export default SubmitButton;
