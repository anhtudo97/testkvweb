import React, { useCallback, useMemo } from 'react';

import { Box, Chip, Divider, Link, Typography } from '@mui/material';
import { EStepDomain } from '../../../types';
import { useSearchParams } from 'react-router-dom';
import CustomOption from '../../common/CustomOption';
import { covertDateVi } from '../../../helpers';

export interface IConfirmModal {
  handleChangeStep: (step: EStepDomain) => void;
}

const ConfirmModal: React.FC<IConfirmModal> = ({ handleChangeStep }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const domain = useMemo(() => searchParams.get('domain'), [searchParams]);

  const onBackStep = useCallback(() => {
    setSearchParams({
      step: EStepDomain.CREATE,
    });
    handleChangeStep(EStepDomain.CREATE);
  }, []);

  const options = useMemo(
    () => [{ name: 'Huỷ kết nối', onClick: onBackStep }],
    [],
  );

  const createdDate = useMemo(() => covertDateVi(new Date()), []);

  return (
    <Box
      component="div"
      sx={{ bgcolor: 'white', borderRadius: '8px', margin: '16px 0' }}
    >
      <Box
        padding={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontWeight={600} fontSize={16}>
          Tên miền mặc định
        </Typography>
        <CustomOption options={options} />
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
            {domain}
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

export default ConfirmModal;
