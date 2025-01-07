import React from 'react';
import AgreeTo14Plus from './Agreements/AgreeTo14Plus';
import AgreeToPrivacy from './Agreements/AgreeToPrivacy';
import AgreeToTermsOfService from './Agreements/AgreeToTermsOfService';
import AllAgreements from './Agreements/AllAgreements';

interface FormDataAgreeToTermsProps {
  allAgreements: boolean;
  agreeTo14Plus: boolean;
  agreeToPrivacy: boolean;
  agreeToTermsOfService: boolean;
  handleCheckboxChange: (name: string) => void;
}

const FormDataAgreeToTerms = ({
  allAgreements,
  agreeTo14Plus,
  agreeToPrivacy,
  agreeToTermsOfService,
  handleCheckboxChange,
}: FormDataAgreeToTermsProps) => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:flex-wrap max-w-screen-lg mx-auto items-center">
      {/* 전체 동의합니다. */}
      <AllAgreements
        allAgreements={allAgreements}
        handleCheckboxChange={handleCheckboxChange}
      />
      {/* 만 14세 이상 가입 동의 */}
      <AgreeTo14Plus
        agreeTo14Plus={agreeTo14Plus}
        handleCheckboxChange={handleCheckboxChange}
      />
      {/* 이용약관 동의 */}
      <AgreeToPrivacy
        agreeToPrivacy={agreeToPrivacy}
        handleCheckboxChange={handleCheckboxChange}
      />
      {/* 개인정보처리방침 동의 */}
      <AgreeToTermsOfService
        agreeToTermsOfService={agreeToTermsOfService}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default FormDataAgreeToTerms;
