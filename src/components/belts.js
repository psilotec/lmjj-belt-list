import React from 'react';
import { Button, message } from 'antd';

const Belts = ({ belts, selectBelt, userDbInfo }) => {
  return (
    <div>
      {belts.map(belt => {
        if (userDbInfo.beltPermissionId >= belt.beltId) {
          return (
            <div
              className="item"
              key={belt.beltId}
              onClick={() => selectBelt(belt.beltColor)}
            >
              <Button size="large" type="primary" key={belt.beltId}>
                {belt.beltName}
              </Button>
            </div>
          );
        } else {
          return (
            <div
              className="item"
              key={belt.beltId}
              onClick={() =>
                message.warning(
                  'You do not have access to this belt yet. Please select another belt.'
                )}
            >
              <Button size="large" type="dashed" key={belt.beltId}>
                {belt.beltName}
              </Button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Belts;
