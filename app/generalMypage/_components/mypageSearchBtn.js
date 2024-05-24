"use client"

import { useState } from "react";
import MypageModal from "./mypageModal.js";

export default function MypageSearchBtn() {

    const [isShow, setIsShow] = useState(false);

    const onClickModal = () => {
        setIsShow(!isShow);
    }

    return (
        <>
            <button onClick={onClickModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded ml-2"> 검색 </button>
            {isShow && <MypageModal onClickModal={onClickModal}/>}
        </>
    );
}