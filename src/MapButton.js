import React from 'react';
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';

const MapButton = () => {
  const styles = useGradientBtnStyles();
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  return (
    <div>
        <Button classes={chubbyStyles}>Chubby</Button>
    </div>
  );
};

export default MapButton;