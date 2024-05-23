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
                <div>
                    <div className="divide-y pr-12 h-screen">
                        {/**부트캠프 제목*/}
                        <div className="space-y-4 pb-4">
                            <div className="text-4xl font-bold">부트캠프 제목</div>
                            <div className="">2024.03.21 ~ 2024.04.20</div>
                        </div>

                        {/**부트캠프 내용*/}
                        <div className="space-y-12 pt-8">
                            {/**부트캠프 상세정보 */}
                            <div className="">
                                <div className="text-xl font-bold">교육기관</div>
                                <div>과학기술정보통신부</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


