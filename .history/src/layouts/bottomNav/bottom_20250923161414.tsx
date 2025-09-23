import React from 'react';
import { Divider, Space, Typography } from 'antd';
import './index.less';
const Bottom: React.FC = () => (
  <Space split={<Divider type="vertical" />}>
    <div className="title-first">
        <Typography.Title level={5}>Copyright © 2025</Typography.Title>
        <Typography.Link>Link</Typography.Link>
        <Typography.Link>Link</Typography.Link>
        <Typography.Link>Link</Typography.Link>
    </div>
    <Divider type="vertical" />
    <div className="title-second">
        <Typography.Title level={5}>个人网站</Typography.Title>
        <Typography.Link>Link</Typography.Link>
        <Typography.Link>Link</Typography.Link>
        <Typography.Link>Link</Typography.Link>
    </div>
    <Divider type="vertical" />
    <div className="title-third">
        <Typography.Title level={5}>联系我们</Typography.Title>
        <Typography.Link>Link</Typography.Link>
        <Typography.Link>Link</Typography.Link>
        <Typography.Link>Link</Typography.Link>
    </div>
    
  </Space>
);

export default Bottom;