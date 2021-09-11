import React from 'react';
import PropTypes from 'prop-types';
import CharBar from './ChartBar';

import './Chart.css';
import Card from '../UI/Card';

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dtp) => dtp.value);
  const maximum = Math.max(...dataPointsValues);

  return (
    <Card className="chart-container">
      <p>Positive Balance over the last 12 months</p>
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
    </Card>
  );
};

Chart.propTypes = {
  dataPoints: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chart;
