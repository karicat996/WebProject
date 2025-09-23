import React, {useState} from  "react";
import { HomeOutlined, FileSearchOutlined, CarryOutOutlined } from '@ant-design/icons';
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
      disabled: true,
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
            { label: 'Option 1', key: 'setting:1' },
            { label: 'Option 2', key: 'setting:2' },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
            { label: 'Option 4', key: 'setting:4' },
          ],
        },
      ],
    },
    {
      key: 'alipay',
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
    },
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