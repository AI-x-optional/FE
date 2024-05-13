"use client"
import { useState } from "react";

export default function SearchBox(props) {
    const {changeModalState, setInputValue} = props;

    const [searchWord, setSearchWord] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const onChangeContent = (e) => {
        setSearchWord(e.target.value);
    }


    const onclickSearch = () => {
        console.log("검색어:", searchWord);
        setSearchResult(["기관1", "기관2", "기관3", "기관4", "기관5"]);
    }

    const onClickResult = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
        changeModalState();
    }

    

    return (
        <>
            <div className = "bg-white h-full sm:p-9 sm:pb-8 p-5">
                <div className="flex flex-col h-full">
                    <div className = "basis-1/10 flex">
                        <input 
                            className="grow  rounded-md border-0 shadow-sm mr-3 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            name="content" placeholder="기관명 입력" onChange={onChangeContent}/>
                        <button 
                            className ="w-20 rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 text-white"
                            type="button" onClick={onclickSearch}>
                                검색
                        </button>
                    </div>
                    <div className="basis-4/5 border-2 border-solid rounded-md mt-3 mb-2 overflow-auto">
                        
                            {searchResult.length === 0 ? (
                                <p className="text-gray-500 p-4">
                                    소속된 기관명을 입력해주세요.
                                </p>
                            ) : 
                            (
                                <div className = "divide-y divide-solid"> 
                                    {searchResult.map(item => 
                                        <button 
                                            key={item}
                                            className="block w-full text-left p-3 text-gray-800"
                                            type="button"
                                            onClick={onClickResult}
                                            value={item}
                                        >
                                            {item}
                                        </button>
                                    )}
                                </div>
                            )}
                        
                    </div>
                    <div className = "basis-1/10 float-right text-end">
                        <button type="button" className = "font-semibold text-sm text-indigo-600 hover:text-indigo-500">
                            찾고 있는 기관이 없다면?
                        </button>
                    </div>             
                </div>
            </div>
            
        </>
    );
    
}