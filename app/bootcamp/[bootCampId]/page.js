async function getBootCampDetail({ bootCampId }) {
    const response = await fetch(`api 주소`);

    if (response.ok) {
        return await response.json()
    } else {
        Error("Data fetching error");
    }
}

export default async function BootCampDetail({ params }) {

    //const bootCampDetail = await getBootCampDetail(params.bootCampId);

    return (
        <div>
            <div className="mx-40 py-8">
                <div className="flex divide-x">
                    <div className="w-3/4 divide-y pr-12">
                        {/**부트캠프 제목*/}
                        <div className="space-y-4 pb-4">
                            <div className="text-4xl font-bold">메타버스 아카데미 3기</div>
                            <div class="flex items-center">
                                <div class="p-1 bg-gray-200 rounded-md">모집 기간</div>
                                <p class="ml-2">2024년 3월 20일 ~ 2024년 4월 30일</p>
                            </div>
                        </div>

                        {/**부트캠프 내용*/}
                        <div className="space-y-12 pt-8">
                            {/**부트캠프 상세정보 */}
                            {bootcampData.map((item) => (
                            <div className="space-y-4">
                                <div className="text-xl font-bold">{item.title}</div>
                                <div class="w-full p-4 border border-gray-300 rounded-md">
                                    {item.content}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/4 pl-12">
                        <div className="sticky top-8">
                            <div className="rounded-lg bg-white p-4 border border-gray-300 shadow">
                                <div className="space-y-4">
                                    <img className="rounded-lg" src="/image.jpeg"></img>
                                    <button type="button" className="w-full items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        신청하기
                                    </button>
                                    <div className="">
                                        부트캠프 요약정보
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const bootcampData = [
    {
        title: "과정 상세 설명",
        content: "서버개발"
    },
    {
        title: "교육기관",
        content: "과학기술정보부"
    },
    {
        title: "커리큘럼",
        content: "커리큘럼 내용"
    },
    {
        title: "분야",
        content: "백엔드"
    },
    {
        title: "교육비",
        content: "무료"
    },
    {
        title: "위치",
        content: "경기"
    },
    {
        title: "교육 기간",
        content: "2024/06/17 ~ 2024/11/29"
    },
    {
        title: "수업 시간",
        content: "09:00 ~ 18:00"
    },
    {
        title: "지원 절차",
        content: "지원서 접수 > 예비학습 > 선수학습 > 정규과정"
    },
    {
        title: "강사 정보",
        content: "킹"
    }
]


