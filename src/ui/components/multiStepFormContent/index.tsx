import React from 'react';
import { Input, Padding, Field } from '@/ui';
import { Field as FormikField } from 'formik';
import { QuestionsProps } from '@/ui/components/multiStepForm/types';

const MultiStepFormContent = ({ questions }): JSX.Element => {
  const FormikInputField = (props) => {
    const {
      question: { id, fieldName, label, type },
    } = props;
    return (
      <FormikField name={fieldName}>
        {({ field, meta, form: { setFieldValue } }) => (
          <Padding bottom={16}>
            <Field fieldId={id} label={label} error={meta.touched && meta.error}>
              <Input fieldId={id} {...props} {...field} type={type} onChange={(e) => setFieldValue(fieldName, e)} />
            </Field>
          </Padding>
        )}
      </FormikField>
    );
  };

  const renderFormikInput = (question: QuestionsProps): JSX.Element => {
    const { type } = question;
    switch (type) {
      case 'text':
      case 'number':
        return <FormikInputField key={question.id} question={question} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {questions.map((question) => {
        return renderFormikInput(question);
      })}
    </div>
  );
};

export default MultiStepFormContent;
