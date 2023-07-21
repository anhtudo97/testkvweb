import {
  Box,
  Button,
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
import React, { memo, useMemo } from 'react';
import { EStepDomain } from '../../../types';
import EditIcon from '@mui/icons-material/Edit';
import { useSearchParams } from 'react-router-dom';

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export interface IModifyModal {
  handleChangeStep: (step: EStepDomain) => void;
}

const ModifyModal: React.FC<IModifyModal> = memo(({ handleChangeStep }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const domain = useMemo(() => searchParams.get('domain'), [searchParams]);

  const onBackStep = () => {
    setSearchParams({
      step: EStepDomain.CREATE,
    });
    handleChangeStep(EStepDomain.CREATE);
  };

  const onChangeStep = () => {
    setSearchParams({
      domain,
      step: EStepDomain.REVIEW,
    });
    handleChangeStep(EStepDomain.REVIEW);
  };

  return (
    <Box
      component="div"
      border="3px solid #0672f0"
      margin="16px 0"
      borderRadius={2}
      bgcolor="white"
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
        <Box display="flex" alignItems="center">
          <Typography fontWeight={600} width={150} fontSize={14}>
            Tên miền
          </Typography>
          <Link href="#" underline="none" marginLeft={0}>
            {domain}
          </Link>
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <Typography fontWeight={600} width={150} fontSize={14}>
            IP hiện tại
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography fontSize={14} mr={1}>
              123.456.789
            </Typography>
            <CheckCircleRoundedIcon color="success" fontSize="small" />
          </Box>
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
                      <Button
                        startIcon={<ContentCopyIcon />}
                        sx={{ fontWeight: 600 }}
                      >
                        Sao chép
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box
        bgcolor="#F2E8DC"
        border="2px solid #F2B66D"
        borderRadius={2}
        margin={2}
        padding={2}
        display="flex"
        alignItems="flex-start"
      >
        <WarningAmberIcon
          color="warning"
          sx={{
            marginRight: 1,
          }}
        />
        <Box>
          <Box>
            <Typography fontWeight={600} fontSize={14} display="inline" mr={1}>
              Lưu ý:
            </Typography>
            <Typography fontSize={14} display="inline">
              Nhập đúng địa chỉ IP KVWEB sang nhà cung cấp. Thời gian kết nối IP
              sẽ tuỳ thuộc vào nhà cung cấp (Khoảng 2 - 5 tiếng)
            </Typography>
          </Box>

          <Box mt={2}>
            <Typography fontWeight={600} fontSize={14}>
              Hướng dẫn chi tiết từ nhà cung cấp:
            </Typography>
            <Typography component="div" fontSize={14}>
              <Box
                component="ul"
                sx={{ listStyleType: 'disc' }}
                paddingLeft={2}
              >
                <Typography component="li" fontSize={14}>
                  matbao.vn <Link href="#"> xem chi tiết</Link>
                </Typography>
                <Typography component="li" fontSize={14}>
                  cloundflare <Link href="#"> xem chi tiết</Link>
                </Typography>
                <Typography component="li" fontSize={14}>
                  pavietnam <Link href="#"> xem chi tiết</Link>
                </Typography>
                <Typography component="li" fontSize={14}>
                  Nhà cung cấp khác <Link href="#"> xem chi tiết</Link>
                </Typography>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end" padding={2}>
        <Button
          variant="contained"
          type="submit"
          sx={{
            padding: '8px 24px',
          }}
          onClick={onChangeStep}
        >
          Kết nối
        </Button>
      </Box>
    </Box>
  );
});

export default ModifyModal;
