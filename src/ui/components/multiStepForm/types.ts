export type FormDataProps = {
  formData: {
    id: number;
    formCoverage: string;
    name: string;
    steps: StepDataProps[];
  };
};

export type StepDataProps = {
  title: string;
  subtitle: string;
  questions: QuestionsProps[];
};

export type QuestionsProps = {
  defaultValue: string;
  description: string;
  displayOrder: number;
  fieldName: string;
  id: number;
  isCustomField: boolean;
  isSharedField: boolean;
  label: string;
  options: any[];
  placeholder: string;
  type: string;
  value: string;
  validation: {
    inputType: string;
    isInputNullable: boolean;
    required: boolean;
  };
};
