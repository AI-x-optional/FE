import React from 'react';

const CourseTable = ({ courses }) => (
    <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">교육과정</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">모집상태</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">온·오프라인</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">학습기간</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">비용</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">참여 시간</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">기관</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="text-sm font-medium text-gray-900">{course.name}</div>
                            </div>
                        </td>
                        <div>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ~{course.endDate}
                                <br />
                                <span className="block text-center text-xs text-gray-400">{course.status}</span>
                            </td>
                        </div>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.online}</td>
                        <div>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {course.period}
                                <br />
                                <span className="block text-center text-xs text-gray-400 ">{course.duration}</span>
                            </td>
                        </div>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.cost}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.classTime}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.organization}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default CourseTable;