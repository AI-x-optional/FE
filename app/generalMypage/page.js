import Sidebar from "./_components/layouts/sidebar.js"

export default function generalMypage() {

    return (
        <>
            <Sidebar/>
            <div className="pl-64 grid">
                <div className="justify-self-center">
                    <p className="">안녕하세요, 모아캠프님</p>
                </div>
            </div>
        </>
    )
}