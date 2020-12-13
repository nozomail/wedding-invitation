import React from 'react';
import './style.scss';

type Props = {
  label?: string;
  isRequired?: boolean;
  isQuestion?: boolean;
  children: React.ReactNode;
};

export function InputField({
  label,
  isRequired = false,
  isQuestion = false,
  children,
}: Props): JSX.Element {
  return (
    <div className={`InputField${isQuestion ? ' -question' : ''}`}>
      {label && (
        <div className="InputField_label">
          {label}
          {isRequired && <span className="InputField_required">*REQUIRED</span>}
        </div>
      )}
      {children}
    </div>
  );
}
