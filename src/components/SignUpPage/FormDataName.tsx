import React from 'react';

interface FormDataNameProps {
  name: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormDataName = ({ name, handleChange }: FormDataNameProps) => {
  return (
    <div className="w-full flex flex-col lg:flex-row max-w-screen-lg mx-auto items-center">
      <div className="w-full lg:w-[135px] text-left mb-1 lg:mb-0">
        <label
          htmlFor="name"
          className="w-full text-sm font-medium text-gray-700 font-extrabold text-left"
        >
          이름 <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="w-full lg:w-[320px]">
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          placeholder="이름"
        />
      </div>
    </div>
  );
};

export default FormDataName;
