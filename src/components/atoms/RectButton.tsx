import React from 'react';
import Button from '@material-ui/core/Button';

interface ButtonProps {
    children?: React.ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    color?: "inherit" | "default" | "primary" | "secondary" | undefined
  };

  
const RectButton: React.FC<ButtonProps> = (props) => {

  return (
    <Button
      variant="contained"  
      component="span"
      color={props.color}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      { props.children }
    </Button>
  );
};


RectButton.defaultProps = {
  children: "Button",
  color: "primary"
}

export default RectButton;
