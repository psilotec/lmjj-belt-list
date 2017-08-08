import React from 'react';
import { Button } from 'antd';

const Belts = ({ belts, selectBelt }) => {
  return (
    <div>
      {belts.map(belt => {
        return (
          <div
            className="item"
            key={belt.beltId}
            onClick={() => selectBelt(belt.beltColor)}
          >
            <Button size="large" key={belt.beltId}>
              {belt.beltName}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Belts;
