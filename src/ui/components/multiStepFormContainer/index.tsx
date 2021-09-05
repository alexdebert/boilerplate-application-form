import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { FormDataProps, QuestionsProps } from '@/ui/components/multiStepForm/types';
import MultiStepFormHeader from '@/ui/components/multiStepFormHeader';
import MultiStepFormContent from '@/ui/components/multiStepFormContent';
import MultiStepFormFooter from '@/ui/components/multiStepFormFooter';

const MultiStepFormContainer = ({ formData }: FormDataProps): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === formData.steps.length - 1;

  const getFormInitialValues = (questions: QuestionsProps[]): Record<string, any> => {
    return questions.reduce((prev, curr) => {
      prev[curr.fieldName] = curr.defaultValue;
      return prev;
    }, {});
  };

  const getYupValidation = (question: QuestionsProps): Record<string, any> => {
    const { inputType, required, isInputNullable } = question.validation;
    switch (inputType) {
      case 'string':
        return required ? Yup.string().nullable(isInputNullable).required('Field is required') : {};
      case 'number':
        return required ? Yup.number().nullable(isInputNullable).required('Field is required') : {};
      default:
        return null;
    }
  };

  const getValidationSchema = (questions: QuestionsProps[]): Record<string, any> => {
    const validationSchema = questions.reduce((prev, curr) => {
      if (Object.keys(curr.validation).length > 0) {
        prev[curr.fieldName] = getYupValidation(curr);
      }
      return prev;
    }, {});
    return Yup.object().shape({ ...validationSchema });
  };

  const submitForm = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = (): void => setActiveStep(activeStep - 1);

  return (
    <Formik
      initialValues={getFormInitialValues(formData.steps[activeStep].questions)}
      validationSchema={getValidationSchema(formData.steps[activeStep].questions)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid }) => {
        return (
          <Form id={formData.formCoverage}>
            <MultiStepFormHeader
              title={formData.steps[activeStep].title}
              subtitle={formData.steps[activeStep].subtitle}
            />
            <MultiStepFormContent questions={formData.steps[activeStep].questions} />
            <MultiStepFormFooter
              disabled={isSubmitting || !isValid}
              handleBack={handleBack}
              activeStep={activeStep}
              isLastStep={isLastStep}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default MultiStepFormContainer;
