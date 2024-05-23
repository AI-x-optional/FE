"use client"

import { useRouter } from "next/navigation";
import SearchInput from "./_components/SearchInput";
import FormInput from "./_components/FormInput";

export default function Signup() {
    const router = useRouter();

    const onSubmitHandler = (e) => {
        e.preventDefault(); // onSubmit 이벤트 기본 동작 방지

        const formData = {
            name : e.target.institutionName.value,
            code : e.target.institutionCode.value,
            owner : e.target.ownerName.value,
            email : e.target.email.value,
            password: e.target.password.value,
        }

        console.log(formData);
        router.push('/institution/login');

    }

    return (<>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm px-6 py-12 lg:px-8">
            <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-gray-900  h-8">
                기관 회원가입
            </h2>
            <form onSubmit={onSubmitHandler}>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {/* 기관명 입력 영역 */}
                    <div className="sm:col-span-full">
                        <SearchInput/>
                    </div>
                                                
                    {/* 기관 코드 입력 영역 */}

                    <div className="sm:col-span-full">
                        <FormInput
                            label="기관 코드"
                            type="text"
                            name="institutionCode"
                            autoCoplete="off"
                            placeholder="입력" 
                        />
                    </div>
                    

                        {/* 대표자명 입력 영역 */}

                    <div className="sm:col-span-full">
                        <FormInput
                            label="대표자명"
                            type="text"
                            name="ownerName"
                            autoCoplete="off"
                            placeholder="입력" 
                        />
                    </div>

                    {/* 이메일 입력 영역 */}

                    <div className="sm:col-span-full">
                        <FormInput
                            label="이메일"
                            type="email"
                            name="email"
                            autoCoplete="email"
                            placeholder="입력" 
                        />
                    </div>

                    {/* 비밀 번호 입력 영역 */}

            
                    <div className="sm:col-span-full">
                        <FormInput
                            label="비밀번호"
                            type="password"
                            name="password"
                            autoCoplete="off"
                            placeholder="입력" 
                        />
                    </div>
                </div>                                      
                
                {/* 취소, 완료 버튼 영역 */}
                <div className="my-6 flex items-center justify-end gap-x-6">
                    <button 
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                        onClick={()=>{router.push('/institution')}}
                    >
                        취소 
                    </button>
                    <button 
                        type="submit"
                        className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                        완료
                    </button>
                </div>
                
            </form>  
        </div>
    </>);
}