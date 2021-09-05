import React from 'react';
import { Divider, Button } from '@/ui';

const MultiStepFormFooter = ({ disabled, handleBack, activeStep, isLastStep }) => {
  return (
    <>
      <Divider />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end',
          padding: '20px 0px',
        }}
      >
        {activeStep !== 0 && (
          <Button size="secondary" type="button" onClick={handleBack}>
            Back
          </Button>
        )}
        <Button disabled={disabled} size="primary" type="submit">
          {isLastStep ? 'Save' : 'Next'}
        </Button>
      </div>
    </>
  );
};

export default MultiStepFormFooter;
