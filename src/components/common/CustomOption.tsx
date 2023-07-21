import React, { memo } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export interface ICustomOption {
  options: Array<{ name: string; onClick: () => void }>;
}

const CustomOption: React.FC<ICustomOption> = memo(({ options }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onMenuItemClick = (callback: () => void) => {
    callback();
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {options.map((item, index) => {
          return (
            <MenuItem
              key={`${item.name}_${index}`}
              onClick={() => onMenuItemClick(item.onClick)}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
});

export default CustomOption;
