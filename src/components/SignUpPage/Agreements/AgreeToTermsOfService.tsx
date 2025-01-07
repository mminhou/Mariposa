import React, { useState } from 'react';
import Modal from '../../Modal';
import texts from '../../../constants/texts';

interface AgreeToTermsOfServiceProps {
  agreeToTermsOfService: boolean;
  handleCheckboxChange: (name: string) => void;
}

const AgreeToTermsOfService = ({
  agreeToTermsOfService,
  handleCheckboxChange,
}: AgreeToTermsOfServiceProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full grid grid-cols-[7fr_3fr] border-b border-gray-200 pb-2">
      <div className="w-full text-left pt-2 pb-2 flex-shrink-0">
        <div
          className="w-full text-left flex items-center"
          onClick={() => handleCheckboxChange('agreeToTermsOfService')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`${agreeToTermsOfService ? 'fill-black-500' : 'fill-gray-300'} size-6`}
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clip-rule="evenodd"
            />
          </svg>

          <label
            htmlFor="agreeToTermsOfService"
            className="ml-2 text-sm text-gray-400 font-medium"
          >
            개인정보처리방침 동의 <span className="text-red-500">*</span>
          </label>
        </div>
      </div>
      <div className="w-full text-left pt-2 pb-2 justify-end flex">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="w-[50px] flex-shrink-0 ml-2 bg-white-600 text-black text-xs font-medium rounded-md border border-gray-300 hover:bg-gray-200 transition"
        >
          보기
        </button>
      </div>

      {/* 이용약관 모달창 */}
      {isModalOpen && (
        <div className="h-0">
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 className="text-xl font-bold mb-4">이용약관</h2>
            <pre className="text-left text-sm tracking-tight whitespace-pre-wrap">
              {texts.agreements.agreeToTermsOfService}
            </pre>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default AgreeToTermsOfService;
