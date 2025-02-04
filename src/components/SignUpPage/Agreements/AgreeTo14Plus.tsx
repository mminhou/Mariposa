import React from 'react';
import texts from '../../../constants/texts';

interface AgreeTo14PlusProps {
  agreeTo14Plus: boolean;
  handleCheckboxChange: (name: string) => void;
}

const AgreeTo14Plus = ({
  agreeTo14Plus,
  handleCheckboxChange,
}: AgreeTo14PlusProps) => {
  return (
    <div className="w-full pt-2">
      <div
        className="w-full text-left flex items-center"
        onClick={() => handleCheckboxChange('agreeTo14Plus')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`${agreeTo14Plus ? 'fill-black-500' : 'fill-gray-300'} size-6`}
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>

        <label
          htmlFor="agreeTo14Plus"
          className="ml-2 text-sm text-gray-400 font-medium"
        >
          {texts.signup.agreeTo14Plus} <span className="text-red-500">*</span>
        </label>
      </div>
    </div>
  );
};

export default AgreeTo14Plus;
