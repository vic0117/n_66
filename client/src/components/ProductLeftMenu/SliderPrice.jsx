import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
	 width: 245,
	 color:'#96DAF0',
  },
  privateValueLabel:{
	'& *': {
      background: 'transparent',
      color: '#000',
    },
  }
});

function valuetext(value) {
  return `$${value}`;
}
const marks = [
	{
	  value: 5000,
	  label: '$5k',
	},
	{
	  value: 10000,
	  label: '$1W',
	},
	{
	  value: 15000,
	  label: '$1.5W',
	},
	{
	  value: 20000,
	  label: '$2W',
	},
	{
	  value: 25000,
	  label: '$2.5W',
	},
	{
		value: 30000,
		label: '$3W',
	},
 ];

const SliderPrice = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([5000, 30000]);

  const handleChange = (event, newValue) => {
	 setValue(newValue);
	 props.select6(newValue)
	 props.handlePrice(newValue)
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>

      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
		  min={5000}
		  max={30000}
		  marks={marks}
      />
    </div>
  );
}
export default SliderPrice;