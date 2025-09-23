import React, {useState} from  "react";
import { HomeOutlined, FileSearchOutlined, CarryOutOutlined ,UserOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';


type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
    {
      label: '首页',
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: '计划',
      key: 'plan',
      icon: <FileSearchOutlined />,
      children:[
        {
          type: 'group',
          label: 'Item 1',
          children: [
            { label: 'Option 1', key: 'setting:1' }
          
          ],
        },
      ]
    },
    {
      label: '任务',
      key: 'task',
      icon: <CarryOutOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            { label: 'Option 1', key: 'setting:1' }
          
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
    
          ],
        },
      ],
    },
    {
      label: '个人中心',
      key: 'center',
      icon: <UserOutlined />
    }
  ];
export const TopNav = () => {
    const [current, setCurrent] = useState('mail');
    
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
      
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default TopNav;