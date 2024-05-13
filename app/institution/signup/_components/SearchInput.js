"use client"

import { useState } from "react";
import SearchBox from "./SearchBox";

export default function SearchInput(props) {

    const [isShow, setIsShow] = useState(false);
    const [value, setValue] = useState('');

    const changeModalState = () => {
        setIsShow(!isShow);
    }

    return (
        <>
            <label 
                htmlFor="institutionName" 
                className="block text-sm font-medium leading-6 text-gray-900">
                기관명
            </label>
            <div className="mt-2">
                <input
                    type="text"
                    name="institutionName"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="검색"
                    readOnly
                    onClick={changeModalState}
                    value={value}
                />
            </div>
            {isShow &&  
                // 모달 창 밖에서 클릭 시 모달창 off 
                <div onClick={changeModalState} 
                    className= "fixed inset-0 t-0 left-0 w-full h-full bg-gray-500  bg-opacity-75 transition-opacity flex justify-center align-middle"
                >
                    <div className="flex flex-col justify-center">
                        <div onClick={(e) => e.stopPropagation()} // 모달 창 안에선 클릭해도 안꺼지게 이벤트 전달을 막음 
                            className = "h-1/2 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg"
                        >
                            <SearchBox changeModalState={changeModalState} setInputValue={setValue}/>
                        </div>
                    </div>
                </div>

            }
        </>
    );
}