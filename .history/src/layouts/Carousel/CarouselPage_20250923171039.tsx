import React from 'react';
import { Carousel, Calendar, Radio } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: '#fff',
  height: '335px',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79'
};

const RotationMap: React.FC = () => (
  <>
    <Carousel arrows infinite={false} className='carousel'>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </>
);

export default RotationMap;