import React from 'react';
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';

const myFunc = () => {
    alert('button clicked!');
}

const MapButton = (props) => {
  const styles = useGradientBtnStyles();
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  return (
    <div>
        <Button classes={chubbyStyles}>{props.buttonText}</Button>
    </div>
  );
};

export default MapButton;