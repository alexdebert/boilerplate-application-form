import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Box, Padding } from '@/ui';
import { FormDataProps } from './types';
import { mockedData } from './mockedData';

import MultiStepFormContainer from '@/ui/components/multiStepFormContainer';

const StyledMultiStepForm = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

const MultiStepForm = (): JSX.Element => {
  const [mockedFormData, setMockedFormData] = useState<FormDataProps | {}>({});
  useEffect(() => {
    setMockedFormData(mockedData);
  }, []);

  return (
    <StyledMultiStepForm>
      <Box border={1} borderRadius={10} style={{ width: '40%', margin: '0 auto' }} backgroundColor="white">
        <Padding size={24}>
          {Object.keys(mockedFormData).length === 0 ? (
            <span>Loading</span>
          ) : (
            // @ts-ignore
            <MultiStepFormContainer formData={mockedFormData.formData} />
          )}
        </Padding>
      </Box>
    </StyledMultiStepForm>
  );
};

export default MultiStepForm;
