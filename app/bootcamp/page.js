import CourseTable from "./component/CourseTable";
import FilterSidebar from "./component/filterSideBar";
// 실제로는 DB에서 조회한 데이터로 해야한다. 
const courses = [
    {
        name: '고급 자바스크립트',
        period: '6월 1일 - 7월 1일',
        location: '온라인',
        cost: '₩200,000',
        duration: '1개월',
        classTime: '주말',
        organization: '코드 아카데미',
        status: '모집중',
        online: '온라인',
        endDate: '1월 4일',
    },
    {
        name: '풀스택 개발',
        period: '7월 10일 - 8월 10일',
        location: '뉴욕',
        cost: '₩1,500,000',
        duration: '1개월',
        classTime: '평일 저녁',
        organization: '기술 연구소',
        status: '모집중',
        online: '오프라인',
        endDate: '1월 4일',
    },
    {
        name: '데이터 과학 부트캠프',
        period: '8월 15일 - 9월 15일',
        location: '샌프란시스코',
        cost: '₩2,500,000',
        duration: '1개월',
        classTime: '풀타임',
        organization: '데이터캠프',
        status: '모집중',
        online: '오프라인',
        endDate: '1월 4일',
    },
    {
        name: '고급 자바스크립트',
        period: '6월 1일 - 7월 1일',
        location: '온라인',
        cost: '₩200,000',
        duration: '1개월',
        classTime: '주말',
        organization: '코드 아카데미',
        status: '모집중',
        online: '온라인',
        endDate: '1월 4일',
    },
    {
        name: '풀스택 개발',
        period: '7월 10일 - 8월 10일',
        location: '뉴욕',
        cost: '₩1,500,000',
        duration: '1개월',
        classTime: '평일 저녁',
        organization: '기술 연구소',
        status: '모집중',
        online: '오프라인',
        endDate: '1월 4일',
    },
    {
        name: '데이터 과학 부트캠프',
        period: '8월 15일 - 9월 15일',
        location: '샌프란시스코',
        cost: '₩2,500,000',
        duration: '1개월',
        classTime: '풀타임',
        organization: '데이터캠프',
        status: '모집중',
        online: '오프라인',
        endDate: '1월 4일',
    },
    {
        name: '고급 자바스크립트',
        period: '6월 1일 - 7월 1일',
        location: '온라인',
        cost: '₩200,000',
        duration: '1개월',
        classTime: '주말',
        organization: '코드 아카데미',
        status: '모집중',
        online: '온라인',
        endDate: '1월 4일',
    },
    {
        name: '풀스택 개발',
        period: '7월 10일 - 8월 10일',
        location: '뉴욕',
        cost: '₩1,500,000',
        duration: '1개월',
        classTime: '평일 저녁',
        organization: '기술 연구소',
        status: '모집중',
        online: '오프라인',
        endDate: '1월 4일',
    },
    {
        name: '데이터 과학 부트캠프',
        period: '8월 15일 - 9월 15일',
        location: '샌프란시스코',
        cost: '₩2,500,000',
        duration: '1개월',
        classTime: '풀타임',
        organization: '데이터캠프',
        status: '모집중',
        online: '오프라인',
        endDate: '1월 4일',
    },
    {
        name: '고급 자바스크립트',
        period: '6월 1일 - 7월 1일',
        location: '온라인',
        cost: '₩200,000',
        duration: '1개월',
        classTime: '주말',
        organization: '코드 아카데미',
        status: '모집중',
        online: '온라인',
        endDate: '1월 4일',
    },
    {
        name: '풀스택 개발',
        period: '7월 10일 - 8월 10일',
        location: '뉴욕',
        cost: '₩1,500,000',
        duration: '1개월',
        classTime: '평일 저녁',
        organization: '기술 연구소',
        status: '모집중',
        online: '오프라인',
        endDate: '1월 4일',
    },
    {
        name: '데이터 과학 부트캠프',
        period: '8월 15일 - 9월 15일',
        location: '샌프란시스코',
        cost: '₩2,500,000',
        duration: '1개월',
        classTime: '풀타임',
        organization: '데이터캠프',
        status: '모집중',
        online: '오프라인',
        endDate: '1월 4일',
    },
];

export default function BootCamp() {
    return (
        <div>
            <main className="flex">
                <div className="w-3/4 p-8">
                    <h1 className="text-3xl font-bold mb-8">모집 중인 부트캠프</h1>
                    <CourseTable courses={courses} />
                </div>
                <div className="w-1/4 p-8">
                    <FilterSidebar />
                </div>
            </main>
        </div>
    );
}
