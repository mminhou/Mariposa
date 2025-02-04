import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../stores/useUserStore';
import useAuthStore from '../../stores/useAuthStore';
import texts from '../../constants/texts';

const LoginForm = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberId, setRememberId] = useState(false);
  const [error, setError] = useState('');
  const { setUser } = useUserStore(); // userStore에서 setUser를 가져옴
  const { login } = useAuthStore();

  // 컴포넌트가 마운트될 때 localStorage에서 저장된 아이디 불러오기
  useEffect(() => {
    const storedUserId = localStorage.getItem('rememberedUserId');
    if (storedUserId) {
      setUserId(storedUserId);
      setRememberId(true); // 저장된 아이디가 있으면 체크박스 활성화
    }
  }, []);

  // 아이디 저장 상태 변경 시 처리
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (!userId) {
      setError(texts.login.emptyId);
      return;
    }
    if (!password) {
      setError(texts.login.emptyPassword);
      return;
    }

    // 체크박스가 활성화된 경우에만 아이디 저장
    if (rememberId) {
      localStorage.setItem('rememberedUserId', userId);
    }

    // 실제 로그인 API 호출 예시 (여기서는 가짜 로그인 처리)
    if (userId === 'test' && password === '123') {
      // 1. 로그인 API 요청 -> Todos
      const userData = {
        userId: 'test',
        name: '최민호',
        email: 'alsgh1003@hanmail.net',
      };

      // 2. authStore에 토큰 저장
      login('token');

      // 3. 로그인 성공 시 userStore에 유저 정보 저장
      setUser(userData);
      alert('로그인 성공!');
      navigate('/');
    } else {
      setError('Error!');
      alert(texts.login.failureMessage);
    }
  };

  return (
    <div className="w-full mx-auto justify-center items-center">
      <form onSubmit={handleLogin}>
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
            placeholder={texts.login.id}
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
            placeholder={texts.login.password}
          />
        </div>

        {/* 아이디 저장 체크박스 */}
        <div className="flex items-center w-full">
          <div
            className="w-1/2 text-left flex items-center"
            onClick={handleCheckboxChange}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${rememberId ? 'fill-black-500' : 'fill-gray-300'} size-6`}
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>

            <label
              htmlFor="rememberId"
              className="ml-2 text-sm text-gray-400 font-medium"
            >
              {texts.login.saveIdLabel}
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
          {texts.login.title}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
