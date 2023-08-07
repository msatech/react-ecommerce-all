import * as React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import {FavoriteBorderOutlined, HomeOutlined, LocalMallOutlined, AccountCircleOutlined} from '@material-ui/icons';

const BottomNavigationLabel = () => {
  const [value, setValue] = React.useState('Home');

  

  return (
    <BottomNavigation style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: "999", boxShadow: '5px 5px 21px 11px rgba(6, 0, 0, 0.05)' }} elevation={19} value={value} onChange={(event, newValue) => {
      setValue(newValue);
    }}>
      <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<HomeOutlined />}
      />
      <BottomNavigationAction
        label="Shop"
        value="Shop"
        icon={<LocalMallOutlined />}
      />
      <BottomNavigationAction
        label="Wishlist"
        value="Wishlist"
        icon={<FavoriteBorderOutlined />}
      />
      <BottomNavigationAction label="profile" value="profile" icon={<AccountCircleOutlined />} />
    </BottomNavigation>
  );
}

export default BottomNavigationLabel