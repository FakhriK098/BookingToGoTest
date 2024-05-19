export type PaymentStepsProps = {
  activeStep: number;
};

export interface Step {
  step: number;
  lable: string;
}

export interface StepProps extends Step {
  isActive: boolean;
}
