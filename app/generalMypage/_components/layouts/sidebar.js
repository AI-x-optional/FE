

const sideBar = () => {

    return (
        <>
            <div id="logo-sidebar" className="absolute left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 group bg-blue-500 text-white">
                                <span className="ms-3">개인정보 수정</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">찜한 부트캠프</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">공고 AI 분석</span>
                            </a>
                        </li>
                        <hr/>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default sideBar;