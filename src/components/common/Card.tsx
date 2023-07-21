import React, { useMemo } from 'react';

import { Box, Chip, Divider, Link, Typography } from '@mui/material';
import { covertDateVi } from '../../helpers';

const Card: React.FC = () => {
  const createdDate = useMemo(() => covertDateVi(new Date()), []);
  return (
    <Box
      component="div"
      sx={{ bgcolor: 'white', borderRadius: '8px', margin: '16px 0' }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography fontWeight={600} fontSize={16}>
          Tên miền mặc định
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ padding: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography fontWeight={600} width={150} fontSize={14}>
            Tên miền
          </Typography>
          <Link href="#" underline="none" marginLeft={0}>
            cuahangxxx.kiotviet.com
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          <Typography fontWeight={600} width={150} fontSize={14}>
            Trạng thái
          </Typography>
          <Chip label="Đã kết nối" color="success" clickable={false} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          <Typography fontWeight={600} width={150} fontSize={14}>
            Ngày thêm
          </Typography>
          <Typography fontSize={14}>{createdDate}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
