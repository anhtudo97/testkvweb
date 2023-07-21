import React, { useCallback, useEffect, useState } from 'react';
import { EStepDomain } from '../../types';

import CreateModal from './ModalSteps/Create';
import ModifyModal from './ModalSteps/Modify';
import ReviewModal from './ModalSteps/Review';
import { useSearchParams } from 'react-router-dom';
import ConfirmModal from './ModalSteps/Confirm';

const Modal: React.FC = () => {
  const [searchParams, _] = useSearchParams();
  const [step, setStep] = useState<EStepDomain>(EStepDomain.CREATE);

  const changeStep = useCallback((step: EStepDomain) => {
    setStep(step);
  }, []);

  useEffect(() => {
    const step = searchParams.get('step') as EStepDomain;
    if (step) {
      setStep(step);
    }
  }, [searchParams]);

  const Create = () => {
    return step === EStepDomain.CREATE ? (
      <CreateModal handleChangeStep={changeStep} />
    ) : null;
  };

  const Modify = () => {
    return step === EStepDomain.MODIFY ? (
      <ModifyModal handleChangeStep={changeStep} />
    ) : null;
  };

  const Review = () => {
    return step === EStepDomain.REVIEW ? (
      <ReviewModal handleChangeStep={changeStep} />
    ) : null;
  };

  const Confirm = () => {
    return step === EStepDomain.CONFIRM ? (
      <ConfirmModal handleChangeStep={changeStep} />
    ) : null;
  };

  return (
    <>
      <Create />
      <Modify />
      <Review />
      <Confirm />
    </>
  );
};

export default Modal;
