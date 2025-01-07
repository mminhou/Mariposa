import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressForm = () => {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const [address, setAddress] = useState({
    zonecode: '',
    roadAddress: '',
    detailedAddress: '',
  });

  // 주소를 입력받고 setState로 상태를 갱신하는 함수
  const handleComplete = (data: any) => {
    const { address, addressType, zonecode } = data;
    let fullAddress = address;
    let extraAddress = '';

    if (data.bname !== '') {
      extraAddress += data.bname;
    }
    if (data.buildingName !== '') {
      extraAddress +=
        extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
    }
    fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';

    setAddress({
      zonecode: zonecode,
      roadAddress: fullAddress,
      detailedAddress: '',
    });

    setIsPostcodeOpen(false);
  };

  return (
    <div className="border-b border-gray-200 w-full pb-7">
      {/* 우편번호 */}
      <div className="w-full flex flex-col lg:flex-row max-w-screen-lg mx-auto items-center">
        <div className="w-full lg:w-[135px] text-left mb-1 lg:mb-0">
          <label
            htmlFor="zonecode"
            className="w-full text-sm font-medium text-gray-700 font-extrabold text-left"
          >
            배송주소 <span className="text-red-500"></span>
          </label>
        </div>
        <div className="w-full lg:w-[320px] flex">
          <input
            type="text"
            id="zonecode"
            name="zonecode"
            value={address.zonecode}
            onChange={(e) =>
              setAddress({ ...address, zonecode: e.target.value })
            }
            // required
            disabled
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="우편번호"
          />
          <button
            type="button"
            onClick={() => setIsPostcodeOpen(true)}
            className="w-[90px] flex-shrink-0 ml-2 bg-white-600 text-black text-sm font-medium rounded-md border border-gray-600 hover:bg-gray-200 transition"
          >
            주소검색
          </button>
        </div>
      </div>

      {/* 기본주소 */}
      <div className="w-full flex flex-col lg:flex-row max-w-screen-lg mx-auto items-center mt-2">
        <div className="w-full flex-shrink-0 lg:w-[135px] text-left">
          <label
            htmlFor="roadAddress"
            className="w-full text-sm font-medium text-gray-700 font-extrabold text-left"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            id="roadAddress"
            name="roadAddress"
            value={address.roadAddress}
            onChange={(e) =>
              setAddress({ ...address, roadAddress: e.target.value })
            }
            // required
            disabled
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="기본주소"
          />
        </div>
      </div>

      {/* 나머지주소 */}
      <div className="w-full flex flex-col lg:flex-row max-w-screen-lg mx-auto items-center mt-2">
        <div className="w-full flex-shrink-0 lg:w-[135px] text-left">
          <label
            htmlFor="detailedAddress"
            className="w-full text-sm font-medium text-gray-700 font-extrabold text-left"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            id="detailedAddress"
            name="detailedAddress"
            value={address.detailedAddress}
            onChange={(e) =>
              setAddress({ ...address, detailedAddress: e.target.value })
            }
            // required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="나머지주소"
          />
        </div>
      </div>

      {/* DaumPostcode 사용하여 주소 찾기 모달 팝업 */}
      {isPostcodeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
            <DaumPostcode
              autoClose
              onComplete={handleComplete}
              style={{ height: '400px' }}
            />
            <button
              onClick={() => setIsPostcodeOpen(false)}
              className="mt-4 w-full p-2 bg-gray-300 text-sm rounded-md hover:bg-gray-400"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
