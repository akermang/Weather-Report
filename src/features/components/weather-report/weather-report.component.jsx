import React from 'react';
import PropTypes from 'prop-types';


const WeatherReportComponent = (props) => (
  <div>
    {
      props.data.map((prop, i) => {
        return <div key={i}>{prop.example}</div>
      })
    }
  </div>
);

export default WeatherReportComponent;