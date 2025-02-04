import React from 'react';
import SignupForm from './SignUpForm';

const SignUpPage = () => {
  return (
    <div className="p-4 md:px-16 pb-5">
      <h1 className="text-2xl font-bold m-12 mb-8">회원가입</h1>
      <div className="lg:w-[70%] mx-auto p-4">
        <div className="border-b-2 border-gray-600 w-full mb-7">
          <div className="w-1/2 text-left flex items-center pb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>

            <label
              htmlFor="rememberId"
              className="ml-2 text-md font-bold text-gray-800"
            >
              회원가입 정보
            </label>
          </div>
        </div>

        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpPage;
