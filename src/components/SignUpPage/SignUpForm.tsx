import React, { useState } from 'react';
import FormDataUserId from './FormDataUserId';
import FormDataPassword from './FormDataPassword';
import FormDataConfirmPassword from './FormDataConfirmPassword';
import FormDataName from './FormDataName';
import FormDataAddress from './FormDataAddress';
import FormDataPhone from './FormDataPhone';
import FormDataEmail from './FormDataEmail';
import FormDataAgreeToTerms from './FormDataAgreeToTerms';

interface FormData {
  userId: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  allAgreements: boolean;
  agreeTo14Plus: boolean;
  agreeToPrivacy: boolean;
  agreeToTermsOfService: boolean;
}

const SignupForm = () => {
  const [formData, setFormData] = useState<FormData>({
    userId: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    allAgreements: false,
    agreeTo14Plus: false,
    agreeToPrivacy: false,
    agreeToTermsOfService: false,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 체크박스 변경 처리
  const handleCheckboxChange = (name: string): void => {
    setFormData((prev) => {
      const updatedFormData = {
        ...prev,
        [name]: !prev[name as keyof FormData],
      };

      // 전체 약관 동의 체크박스가 클릭되면 모든 항목 업데이트
      if (name === 'allAgreements') {
        updatedFormData.agreeTo14Plus = !prev.allAgreements;
        updatedFormData.agreeToPrivacy = !prev.allAgreements;
        updatedFormData.agreeToTermsOfService = !prev.allAgreements;
      }

      // 개별 항목에 따라 전체 동의 여부 갱신
      updatedFormData.allAgreements =
        updatedFormData.agreeTo14Plus &&
        updatedFormData.agreeToPrivacy &&
        updatedFormData.agreeToTermsOfService;

      return updatedFormData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 필수 약관 확인
    if (
      !formData.allAgreements ||
      !formData.agreeTo14Plus ||
      !formData.agreeToPrivacy ||
      !formData.agreeToTermsOfService
    ) {
      alert('약관에 동의해주세요.');
      return;
    }

    console.log('회원가입 데이터:', formData);
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 아이디 */}
        <FormDataUserId userId={formData.userId} handleChange={handleChange} />
        {/* 비밀번호 */}
        <FormDataPassword
          password={formData.password}
          handleChange={handleChange}
        />
        {/* 비밀번호 확인 */}
        <FormDataConfirmPassword
          confirmPassword={formData.confirmPassword}
          handleChange={handleChange}
        />
        {/* 이름 */}
        <FormDataName name={formData.name} handleChange={handleChange} />
        {/* 휴대폰번호 */}
        <FormDataPhone phone={formData.phone} handleChange={handleChange} />
        {/* 이메일 */}
        <FormDataEmail email={formData.email} handleChange={handleChange} />

        {/* 주소 */}
        <FormDataAddress />

        {/* 약관 동의 */}
        <FormDataAgreeToTerms
          allAgreements={formData.allAgreements}
          agreeTo14Plus={formData.agreeTo14Plus}
          agreeToPrivacy={formData.agreeToPrivacy}
          agreeToTermsOfService={formData.agreeToTermsOfService}
          handleCheckboxChange={handleCheckboxChange}
        />

        {/* 제출 버튼 */}
        <div>
          <button
            type="submit"
            className="w-full lg:w-[300px] mt-[15px] mb-[15px]  mt-[30px] mb-[30px] p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
