import React from 'react';
import PropTypes from 'prop-types';
import CharBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dtp) => dtp.value);
  const maximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {
        dataPoints.map((dataPoint) => (
          <CharBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={maximum}
            label={dataPoint.label}
          />
        ))
      }
    </div>
  );
}

Chart.propTypes = {
  dataPoints: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chart;
