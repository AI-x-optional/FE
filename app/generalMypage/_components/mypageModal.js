import { useEffect } from "react";

export default function MypageModal(props) {

    const { onClickModal } = props;
    
    // 모달 창 켜졌을 때 배경 스크롤 방지 & 위치 고정
    useEffect(() => {

        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;

        // top 위치를 지정해 배경 페이지가 위로 올라가지 않게
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);
      

    return (
        <div onClick={onClickModal} className="pl-64 h-screen w-full fixed left-0 top-0 flex justify-center items-center text-center">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded border-gray-300 border w-10/12 md:w-1/3">
                <div className="flex border-b-2">
                    <div className="p-2 align-middle font-bold w-full pl-7"> 지역 선택 </div>
                        <button onClick={onClickModal} className="pr-4 float-end text-gray-400 text-lg align-middle">x</button>
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