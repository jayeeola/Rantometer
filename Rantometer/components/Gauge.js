
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';
Chart.register(ArcElement, Tooltip);

const Gauge = ({ value }) => {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: value > 60 ? ['#ff3b3b', '#eaeaea'] :
                          value > 30 ? ['#ffc107', '#eaeaea'] :
                                       ['#4caf50', '#eaeaea'],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: '80%',
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    circumference: 180,
    rotation: 270,
    cutout: '80%',
  };

  return (
    <div style={{ width: 250, height: 150 }}>
      <Doughnut data={data} options={options} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -30%)',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        {value}
      </div>
    </div>
  );
};

export default Gauge;
