import React from 'react';
import { Padding, Text } from '@/ui';

type MultiStepFormHeaderProps = {
  title: string;
  subtitle: string | null;
};

const MultiStepFormHeader = ({ title, subtitle }: MultiStepFormHeaderProps): JSX.Element => {
  return (
    <Padding bottom={32}>
      <Text color="#000000" marginBottom={8} size="large" weight={600}>
        {title}
      </Text>
      {subtitle && <Text color="#546A83">{subtitle}</Text>}
    </Padding>
  );
};

export default MultiStepFormHeader;
