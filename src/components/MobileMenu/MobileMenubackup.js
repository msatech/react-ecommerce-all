import React, { useState } from 'react';
import { Drawer } from 'antd';
import './MobileMenu.css'
import { Dehaze, Close, Search, Apps } from '@material-ui/icons';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Avatar, Image, Tabs } from 'antd';


import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import { AudioOutlined } from '@ant-design/icons';

function MobileMenu() {


    const { SubMenu } = Menu;
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    const [openKeys, setOpenKeys] = React.useState(['sub1']);
    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          setOpenKeys(keys);
        } else {
          setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
      };

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
      };

      const onClose = () => {
        setVisible(false);
      };

      const { TabPane } = Tabs;
      
      const callback = (key) => {
        console.log(key);
      }

    return (
        <div className="mobilemenu">
    
      <div className="mobilemenu__navbar">
           
            <div className="mobilemenu__left">
                    <img className="mobilemenu__logo" src={process.env.PUBLIC_URL + './img/logo.svg'} alt="logo" />
            </div>
            <div className="mobilemenu__right">
                <div className="mobilemenu__option">
                    {
                        visible
                        ?<Close className="mobilemenu__drawer__icon" onClick={showDrawer} />
                        
                        :<Dehaze className="mobilemenu__drawer__icon" onClick={showDrawer} />
                    }
                
                </div>
                <div className="mobilemenu__option">
                    
                            <ShoppingCartOutlinedIcon className="mobilemenu__cart__icon" />
                    
                </div>
                <div className="mobilemenu__option">
                       <Avatar src={<Image src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-3.png" />}
                />
                </div>
                
            
                
            </div>
            
      </div>

      <Drawer
        className="mobilemenu__sidenav"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={400}
      >
          <div className="search__seaction">
            <div className="search__input">
                <Search />
                <input type="text" placeholder="Search Cateogory" />
            </div>
          </div>
        <div className="mobilemenu__sidenav__menus">
          <Tabs onChange={callback}  type="card"  type="card">
              
              <TabPane  className="mobilemenu__sidenav__menus"  tab={<div className="mobilemenu__sidenav__menu"><span><Dehaze /></span><span>Menu</span></div>} key="1" >


              <Menu mode="inline" className="mobilemenu__sidenav__menu__options" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: '83%' }}>
                <SubMenu className="mobilemenu__sidenav__menu__option" key="sub1"  icon={<MailOutlined />} title="Navigation One">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu className="mobilemenu__sidenav__menu__option" key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu className="mobilemenu__sidenav__menu__option" key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>







            </TabPane>
          
            <TabPane className="mobilemenu__sidenav__menus"  tab={<div className="mobilemenu__sidenav__menu"><span><Apps /></span><span>Category</span></div>} key="2">
            Category
            </TabPane>
          </Tabs>
        </div>
        
      </Drawer>
        </div>
    )
}

export default MobileMenu
