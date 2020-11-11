import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
  label: string;
  isRequired?: boolean;
  isQuestion?: boolean;
  children: ReactNode;
};

export function InputField({
  label,
  isRequired = false,
  isQuestion = false,
  children,
}: Props): JSX.Element {
  return (
    <div className={`InputField ${isQuestion ? '-question' : ''}`}>
      <div className="InputField_label">
        {label}
        {isRequired && <span className="InputField_required">*Required</span>}
      </div>
      {children}
    </div>
  );
}
