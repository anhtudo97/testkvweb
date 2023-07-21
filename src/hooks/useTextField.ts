import { useCallback, useState } from 'react';
import { isValidUrl } from '../helpers';

export const useTextField = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue || '');
  const [error, setError] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const validate = useCallback(() => {
    // this function will check if the form values are valid
    if (!isValidUrl(value)) {
      setError('Tên miền không đúng định dạng');
      setIsError(true);
    } else {
      setError('');
      setIsError(false);
    }
  }, [value]);

  const handleInputValue = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      // this function will be triggered by the text field's onBlur and onChange events
      event.preventDefault();
      setValue(event.target.value);
    },
    [],
  );

  return {
    onInputValue: handleInputValue,
    haveError: isError,
    error,
    value,
    onValidate: validate,
  };
};
