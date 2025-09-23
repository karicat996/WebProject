import React, {useState} from  "react";
import { HomeOutlined, FileSearchOutlined, CarryOutOutlined ,UserOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './index.less';

type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
    {
      label: '首页',
      key: 'home',
      icon: <HomeOutlined />
    },
    {
      label: '计划',
      key: 'plan',
      icon: <FileSearchOutlined />
    },
    {
      label: '任务',
      key: 'task',
      icon: <CarryOutOutlined />
    },
  ];
  
const rightItems: MenuItem[] = [
  {
    label: '个人中心',
    key: 'center',
    icon: <UserOutlined />,
    className: 'personal-center-menu-item'
  }
  ];
export const TopNav = () => {
    const [current, setCurrent] = useState('mail');
    
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
      
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Menu 
        onClick={onClick} 
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
          />
          <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={rightItems}
          className="personal-center-menu"
        />
      </div>
    )
}

export default TopNav;