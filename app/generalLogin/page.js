import Link from 'next/link';

export default function personlogin() {

    return(
        <div className="grid">
            <div className="justify-self-center w-64 h-64">
                <Link href="/">
                    <img src="/Logo.png" alt="logo" />
                </Link>
            </div>
            <p className="justify-self-center font-bold text-2xl"> 일반 회원 로그인 / 회원가입 </p>
            <p className="justify-self-center mb-11 mt-5"> 카카오 로그인 하나로 moacamp의 모든 혜택을 누려보세요 </p>
            <div className="justify-self-center">
                {/* 로그인 api 연결 - 백엔드 구현 필요 */}
                <button type="button">
                    <Link href="/signupinfo">
                        <img src="/kakao_login_medium_wide.png" alt="카카오 로그인하기" />
                    </Link>
                </button>
            </div>
            <hr className="justify-self-center w-2/5 mt-8"/>
            <div className="justify-self-center w-80 font-extralight font-gray-500 text-xs text-slate-300">
                <p>Click “login” to agree to Moacamp’s Terms of Service and acknowledge that Moacamp’s Privacy Policy applies to you.</p>
            </div>
        </div>
    );
}