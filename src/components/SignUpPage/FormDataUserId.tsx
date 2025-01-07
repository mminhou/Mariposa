import React from 'react';

interface FormDataUserIdProps {
  userId: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormDataUserId = ({ userId, handleChange }: FormDataUserIdProps) => {
  return (
    <div className="w-full flex flex-col lg:flex-row max-w-screen-lg mx-auto items-center">
      <div className="w-full lg:w-[135px] text-left mb-1 lg:mb-0">
        <label
          htmlFor="userId"
          className="w-full text-sm font-medium text-gray-700 font-extrabold text-left"
        >
          아이디 <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="w-full lg:w-[320px]">
        <input
          type="text"
          id="userId"
          name="userId"
          value={userId}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          placeholder="영문/숫자 조합 3~15자"
        />
      </div>
    </div>
  );
};

export default FormDataUserId;
