import Link from "next/link";

export default function LoginSelectPage(){
    return (<>
        <div style={{height: '80vh'}} className="flex items-center justify-center">
            <div>
                <Link href="/generalLogin">
                    <button className="block py-5 px-32 my-8 bg-blue-500 hover:bg-blue-400 text-white rounded-md">
                        일반 회원 로그인 
                    </button>
                </Link>
                <Link href="/institution/login"> 
                    <button className="block py-5 px-32  my-8 bg-blue-500 hover:bg-blue-400 text-white rounded-md">
                        기관 회원 로그인 
                    </button>
                </Link> 
            </div>
        </div>
    </>);
}