import React from 'react';
import { Divider, Space, Typography } from 'antd';

const Bottom: React.FC = () => (
  <Space split={<Divider type="vertical" />}>
    <div className="title">
        <Typography.Title level={5}>Copyright © 2025</Typography.Title>
        <Typography.Link>Link</Typography.Link>
        <Typography.Link>Link</Typography.Link>
        <Typography.Link>Link</Typography.Link>
    </div>
    
  </Space>
);

export default Bottom;