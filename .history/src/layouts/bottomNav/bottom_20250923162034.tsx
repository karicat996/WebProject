import React from 'react';
import { Divider, Space, Typography } from 'antd';
import './index.less';
const Bottom: React.FC = () => (
    <Space size="large">
    <div className="title-first bottom-section">
        <Typography.Title level={5}>Copyright © 2025</Typography.Title>
        <div className="links">
          <Typography.Link>Link</Typography.Link>
          <Typography.Link>Link</Typography.Link>
          <Typography.Link>Link</Typography.Link>
        </div>
    </div>

    <Divider type="vertical" />

    <div className="title-second bottom-section">
        <Typography.Title level={5}>个人网站</Typography.Title>
        <div className="links">
          <Typography.Link>Link</Typography.Link>
          <Typography.Link>Link</Typography.Link>
          <Typography.Link>Link</Typography.Link>
        </div>
    </div>
    
    <Divider type="vertical" />

    <div className="title-third bottom-section">
        <Typography.Title level={5}>联系我们</Typography.Title>
        <div className="links">
          <Typography.Link>手机号</Typography.Link>
          <Typography.Link>QQ号</Typography.Link>
          <Typography.Link>git</Typography.Link>
        </div>
    </div>
  </Space>
);

export default Bottom;