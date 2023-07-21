import {
  Box,
  Button,
  Chip,
  Divider,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { memo, useMemo, useEffect } from 'react';
import { EStepDomain } from '../../../types';
import EditIcon from '@mui/icons-material/Edit';
import { useSearchParams } from 'react-router-dom';

import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { useCountdown } from '../../../hooks/useTimer';

export interface IModifyModal {
  handleChangeStep: (step: EStepDomain) => void;
}

const ReviewModal: React.FC<IModifyModal> = memo(({ handleChangeStep }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const domain = useMemo(() => searchParams.get('domain'), [searchParams]);
  const queryParams = Object.fromEntries(searchParams.entries());

  // The state for our timer
  const timer = useCountdown(600);

  const minutes = useMemo(() => Math.floor(timer / 60), [timer]);
  const seconds = useMemo(() => Math.floor(timer % 60), [timer]);

  useEffect(() => {
    if (!timer) {
      onChangeStep();
    }
  }, [timer]);

  const onBackStep = () => {
    setSearchParams({
      step: EStepDomain.CREATE,
    });
    handleChangeStep(EStepDomain.CREATE);
  };

  const onChangeStep = () => {
    setSearchParams({
      ...queryParams,
      step: EStepDomain.CONFIRM,
    });
    handleChangeStep(EStepDomain.CONFIRM);
  };

  return (
    <Box
      component="div"
      sx={{
        bgcolor: 'white',
        borderRadius: '8px',
        margin: '16px 0',
        border: '3px solid #0672f0',
      }}
    >
      <Box
        padding={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontWeight={600} fontSize={16}>
          Tên miền tuỳ chỉnh
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#6DB4F2',
            color: '#0583F2',
            borderRadius: 2,
            boxShadow: 'none',
          }}
          onClick={onBackStep}
          startIcon={<EditIcon />}
        >
          Thay đổi tên miền
        </Button>
      </Box>
      <Divider />
      <Box padding={2}>
        <Box
          width="fit-content"
          display="flex"
          alignItems="center"
          padding={2}
          borderRadius={2}
          sx={{ backgroundColor: '#363B40' }}
        >
          <HourglassEmptyIcon sx={{ color: '#fff', marginRight: 1 }} />
          <Typography fontWeight={600} fontSize={24} color="#fff">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}s
          </Typography>
        </Box>

        <Box mt={2} display="flex" alignItems="center">
          <Typography fontWeight={600} width={150} fontSize={14}>
            Tên miền
          </Typography>
          <Link href="#" underline="none" marginLeft={0}>
            {domain}
          </Link>
        </Box>
        <Box mt={2} display="flex" alignItems="center">
          <Typography fontWeight={600} width={150} fontSize={14}>
            Trạng thái
          </Typography>
          <Chip
            label="Hệ thống đang kết nối"
            color="warning"
            clickable={false}
          />
        </Box>
        <Box mt={2}>
          <Typography fontWeight={600} width={150} fontSize={14}>
            IP KiotVietWeb
          </Typography>
          <TableContainer
            sx={{
              border: '1px solid #dee0da',
              borderRadius: 2,
              marginTop: 2,
            }}
          >
            <Table aria-label="simple table">
              <TableHead
                sx={{
                  backgroundColor: '#dee0da',
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{ borderRight: '1px solid #aeb1b2', fontWeight: 600 }}
                  >
                    Host
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: '1px solid #aeb1b2', fontWeight: 600 }}
                  >
                    Loại
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Giá trị</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{ borderRight: '1px solid #aeb1b2', borderBottom: 0 }}
                  >
                    @
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: '1px solid #aeb1b2', borderBottom: 0 }}
                  >
                    A
                  </TableCell>
                  <TableCell sx={{ borderBottom: 0 }}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography>123.456.789</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#F2E8DC',
        }}
        borderRadius={2}
        border="2px solid #F2B66D"
        margin={2}
        marginTop={0}
        padding={2}
        display="flex"
        alignItems="flex-start"
      >
        <Typography fontSize={14} display="inline-block">
          Hệ thống đang thiết lập tên miền. Bạn có thể truy cập tên miền sau
          <strong> 10 phút</strong>, nếu không được vui lòng liên hệ hotline
          <strong>1900 5522</strong> được hỗ trợ.
        </Typography>
      </Box>
    </Box>
  );
});

export default ReviewModal;
