import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
	 width: 245,
	 color:'#96DAF0',
  },
});

function valuetext(value) {
  return `${value}天`;
}

const SliderDays = (props)=> {
  const classes = useStyles();
  const [value, setValue] = React.useState([4,30]);

  const handleChange = (event, newValue) => {
	 setValue(newValue);
	 props.select5(newValue)
  };

  const marks = [
	{
	  value: 4,
	  label: '4天',
	},
	{
	  value: 15,
	  label: '15天',
	},
	{
	  value: 30,
	  label:'30天',
	},
	
 ];

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
		  min={4}
		  max={30}
		  marks={marks}
      />
    </div>
  );
}
export default SliderDays;