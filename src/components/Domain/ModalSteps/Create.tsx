import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React, { memo, useMemo } from 'react';
import { EStepDomain } from '../../../types';
import { useTextField } from '../../../hooks/useTextField';
import { useSearchParams } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export interface ICreateModal {
  handleChangeStep: (step: EStepDomain) => void;
}

const CreateModal: React.FC<ICreateModal> = memo(({ handleChangeStep }) => {
  const [, setSearchParams] = useSearchParams();
  const { onInputValue, haveError, error, value, onValidate } = useTextField();

  const helperText: string = useMemo(() => {
    if (!value) return '';
    return haveError ? error : 'Tên miền hợp lệ';
  }, [value, haveError, error]);

  const isError = useMemo(() => {
    if (!value) return false;
    return haveError;
  }, [value, haveError]);

  const isDisable = useMemo(() => {
    if (!value) return true;
    return haveError;
  }, [value, haveError]);

  const handleNextStep = () => {
    setSearchParams({
      domain: value,
      step: EStepDomain.MODIFY,
    });
    handleChangeStep(EStepDomain.MODIFY);
  };

  const IconCheck = () => {
    if (value.length > 0) {
      return isError ? (
        <ErrorIcon color="error" />
      ) : (
        <CheckCircleRoundedIcon color="success" />
      );
    }
    return null;
  };

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
        <Box component="form" autoComplete="off">
          <FormControl
            sx={{ borderRadius: 2, width: '100%' }}
            variant="outlined"
          >
            <InputLabel error={isError} htmlFor="outlined-adornment-domain">
              Nhập tên miền của bạn
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-domain"
              onChange={onInputValue}
              onInput={onValidate}
              endAdornment={
                <InputAdornment position="end">
                  <IconCheck />
                </InputAdornment>
              }
              label="Nhập tên miền của bạn"
              error={isError}
            />
            <FormHelperText error={isError} id="outlined-weight-helper-text">
              {helperText}
            </FormHelperText>
          </FormControl>
        </Box>
        <Box display={'flex'} justifyContent="end">
          <Button
            variant="contained"
            type="submit"
            sx={{
              marginTop: 4,
              padding: '8px 24px',
            }}
            disabled={isDisable}
            onClick={handleNextStep}
          >
            Tiếp tục
          </Button>
        </Box>
      </Box>
    </Box>
  );
});

export default CreateModal;
