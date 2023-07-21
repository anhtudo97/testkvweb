import { Box, Link, Typography } from '@mui/material';
import Card from '../common/Card';
import React from 'react';
import Modal from './Modal';

const Domain: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        padding: '16px 0',
      }}
    >
      <Typography variant="h4" align="left" fontWeight={600}>
        Tên miền
      </Typography>
      <Typography align="left" color="#a2b0ba">
        Tăng khả năng hiển thị trang website của bạn
      </Typography>
      <Typography align="left" color="#a2b0ba">
        Bạn có thể <Link href="#">{'xem hướng dẫn tại đây'}</Link>
      </Typography>
      <Card />
      <Modal />
    </Box>
  );
};

export default Domain;
