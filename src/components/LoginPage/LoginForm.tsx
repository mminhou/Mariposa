import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberId, setRememberId] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 컴포넌트가 마운트될 때 localStorage에서 저장된 아이디 불러오기
  useEffect(() => {
    const storedUserId = localStorage.getItem('rememberedUserId');
    if (storedUserId) {
      setUserId(storedUserId);
      setRememberId(true); // 저장된 아이디가 있으면 체크박스 활성화
    }
  }, []);

  // 체크박스 상태 변경 시 처리
  const handleCheckboxChange = () => {
    const newRememberState = !rememberId;

    setRememberId(newRememberState);

    if (!newRememberState) {
      // 체크박스를 해제하면 저장된 아이디 삭제
      localStorage.removeItem('rememberedUserId');
      setUserId(''); // 아이디 필드도 초기화
      setPassword(''); // 패스워드 필드도 초기화
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (!userId) {
      setError('아이디를 입력해주세요.');
      return;
    }
    if (!password) {
      setError('비밀번호를 입력해주세요.');
      return;
    }

    // 체크박스가 활성화된 경우에만 아이디 저장
    if (rememberId) {
      localStorage.setItem('rememberedUserId', userId);
    }

    // 로그인 성공 처리 (예: 서버 API 호출)
    console.log('로그인 시도:', { userId, password, rememberId });

    // 에러 초기화 및 후속 처리
    setError('');
    alert('로그인 성공!');
    navigate('/');
  };

  return (
    <div className="w-full mx-auto justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="userId"
            className="block text-sm font-medium text-gray-600 text-left"
          />
          <input
            id="userId"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:border-gray-600 focus:border-b-2 focus:outline-none focus:ring-0 placeholder:text-sm"
            placeholder="아이디"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600 text-left"
          />

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:border-gray-600 focus:border-b-2 focus:outline-none focus:ring-0 placeholder:text-sm"
            placeholder="비밀번호"
          />
        </div>

        {/* 아이디 저장 체크박스 */}
        <div className="flex items-center w-full">
          <div className="w-1/2 text-left flex items-center">
            {rememberId ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
                onClick={handleCheckboxChange}
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-gray-400"
                onClick={handleCheckboxChange}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            )}

            <label htmlFor="rememberId" className="ml-2 text-sm text-gray-400 font-medium">
              아이디 저장
            </label>
          </div>
          <div className="w-1/2">
            {/* 아이디, 패스워드 예외처리 */}
            {error && (
              <div className="w-full mx-auto justify-center items-center">
                <div className="text-red-500 font-bold text-sm text-right">
                  {error}
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-4 mt-8 bg-gray-800 text-white text-sm font-bold rounded-md border border-gray-800"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
