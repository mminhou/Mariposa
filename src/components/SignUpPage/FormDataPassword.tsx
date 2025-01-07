import React from 'react';

interface FormDataPasswordProps {
  password: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormDataPassword = ({
  password,
  handleChange,
}: FormDataPasswordProps) => {
  return (
    <div className="w-full flex flex-col lg:flex-row max-w-screen-lg mx-auto items-center">
      <div className="w-full lg:w-[135px] text-left mb-1 lg:mb-0">
        <label
          htmlFor="password"
          className="w-full text-sm font-medium text-gray-700 font-extrabold text-left"
        >
          비밀번호 <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="w-full lg:w-[320px]">
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          placeholder="영문/숫자 조합 6~15자"
        />
      </div>
    </div>

    // <div className="flex flex-col lg:flex-row items-center lg:w-[450px]">
    //   <label
    //     htmlFor="password"
    //     className="w-full lg:w-[200px] text-sm font-medium text-gray-700 font-extrabold text-left"
    //   >
    //     비밀번호 <span className="text-red-500">*</span>
    //   </label>
    //   <input
    //     type="password"
    //     id="password"
    //     name="password"
    //     value={password}
    //     onChange={handleChange}
    //     required
    //     className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
    //     placeholder="영문/숫자 조합 6~15자"
    //   />
    // </div>
  );
};

export default FormDataPassword;
