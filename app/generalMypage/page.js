"use client"

import Sidebar from "./_components/layouts/sidebar.js"
import MypageSearchBtn from "./_components/mypageSearchBtn.js"
import { useState } from "react";

export default function generalMypage() {
    
        const [interestsv, setInterestsv] = useState([]);
    
        const CheckboxValue = () => {
    
            // document 사용 위한 조건문
            if (typeof document !== "undefined") {
                
                let location;
                location = document.location;
    
                // 체크된 목록 가져오기
                const query = 'input[name="interests"]:checked';
                const selectedEls = document.querySelectorAll(query);
    
                // 선택된 목록에서 value 찾기
                const values = [];
            
                // values 배열 안에 선택된 값 넣기
                selectedEls.forEach((e) => {
                    values.push(' ' + e.value);
                });
                
                setInterestsv(values)
            }
        }

    return (
        <>
            <Sidebar/>
            <div className="pl-64 grid">
                <div className="justify-self-center pt-16">
                    <p className="text-xl pb-6">안녕하세요, 모아캠프님</p>
                    <div className="text-lg font-light pb-1 justify-self-center w-96"> 거주 지역 </div>
                    <div className="flex justify-self-center">
                        <input type="text" placeholder="지역" className="w-80 rounded-lg border border-gray-300" />
                        <MypageSearchBtn/>
                    </div>
                    <div className="justify-self-center w-96 pt-5">
                        <div className="text-lg font-light pb-1"> 관심 분야 </div>
                    </div>
                    {/* 관심 분야 목록 백엔드 구현 필요 */}
                    <div className="flex flex-wrap justify-self-center w-96 bg-gray-50 border border-gray-300 text-gray-900 mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <div className="mr-2">
                            <input type="checkbox" name="interests" value="백엔드" onClick={CheckboxValue}/> 백엔드
                        </div>
                        <div className="mr-2">
                            <input type="checkbox" name="interests" value="프론트엔드" onClick={CheckboxValue}/> 프론트엔드
                        </div>
                        <div className="mr-2">
                            <input type="checkbox" name="interests" value="AI 개발자" onClick={CheckboxValue}/> AI 개발자
                        </div>
                    </div>
                    <div className="justify-self-center">
                        <div className="overflow-auto bg-white w-96 h-64 rounded-lg p-2 border border-gray-300">
                            {interestsv.map(item =>
                                <div key={item} className="flex flex-wrap text-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    {item}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-lg font-light pt-6 pb-1 justify-self-center w-96"> 구직 여부 </div>
                    <div className="flex items-center mb-4 bg-white border border-gray-300 w-96 justify-self-center">
                        <div className="p-2 m-2">
                            <input id="default-radio-1" type="radio" value="nonworking" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">구직 중 </label>
                        </div>
                        <div className="p-2 m-2">
                            <input id="default-radio-1" type="radio" value="working" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 재직 중 </label>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded ml-2 justify-self-center"> 수정하기 </button>
                    </div>
                </div>
            </div>
        </>
    )
}