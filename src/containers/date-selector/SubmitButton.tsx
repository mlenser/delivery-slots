import React from 'react';
import Button from '@material-ui/core/Button';
import { useDeliveryContext } from './DeliveryContext';

const SubmitButton: React.FC = () => {
  const { selectedDate, selectedTime } = useDeliveryContext();

  // UX comments: It is not a good practice to disable a button like this as the user then has no means of knowing what steps must be completed before they can proceed. It would be much better to always have it enabled and show an error message if the required fields are not set. But for this code exercise I have followed the specifications. If you remove the disabled property it will use html5 validation instead which is much better and could be improved with custom error messages
  return (
    <section>
      <Button
        className={selectedDate && selectedTime ? '' : 'disabled'}
        color="primary"
        disabled={!(selectedDate && selectedTime)}
        type="submit"
        variant="contained"
      >
        Submit
      </Button>
    </section>
  );
};

export default SubmitButton;
