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
	  value: 18000,
	  label: '$1.8W',
	},
	{
	  value: 100000,
	  label: '$10W',
	},
	{
	  value: 200000,
	  label: '$20W',
	},
	{
	  value: 300000,
	  label: '$30W',
	},
	{
	  value: 400000,
	  label: '$40W',
	},
 ];

export default function SliderPrice() {
  const classes = useStyles();
  const [value, setValue] = React.useState([18000, 400000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
		  min={18000}
		  max={400000}
		  marks={marks}
		  
      />
    </div>
  );
}