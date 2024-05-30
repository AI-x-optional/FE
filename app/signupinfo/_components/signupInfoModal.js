export default function SignInfoModal(props) {

    const {onClickModal} = props;

    return (
        <div onClick={onClickModal} className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-20 text-center">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded w-10/12 md:w-1/3">
                <div className="border-b-2 p-2 align-middle font-bold">
                    지역 선택
                </div>
                <div className="flex">
                    <div className="flex-1 border-r-2 border-b-2"> 시/도 </div>
                    <div className="flex-1 border-b-2"> 시/군/구 </div>
                </div>
                {/* 시/도, 시/군/구 목록 open API 사용 */}
                <div className="flex">
                    <div className="flex-1 overflow-scroll h-96 overflow-x-hidden text-left p-3">
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                        <div>서울</div>
                    </div>
                    <div className="flex-1 overflow-scroll h-96 overflow-x-hidden text-left p-3">
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                        <div>강남구</div>
                    </div>
                </div>
                <button onClick={onClickModal} className="bg-blue-500 hover:bg-blue-700 text-white w-full p-2"> 선택 </button>
            </div>
        </div>
    );
}