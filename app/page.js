import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-5">
      <div className="bg-blue-500 text-white text-center py-4 mb-8">
        <h1 className="text-lg font-bold">광고 배너</h1>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">부트캠프 정보</h2>
            <Link href="/bootcamp">
              <button className="p-2 rounded-full bg-blue-500 text-white">+</button>
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            {[...Array(5)].map((_, i) => (
              <button key={i} className="p-3 border border-gray-300 rounded text-left">
                부트캠프 정보 미리보기
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">커뮤니티</h2>
            
            <Link href="/community">
              <button className="p-2 rounded-full bg-blue-500 text-white">+</button>
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            {[...Array(5)].map((_, i) => (
              <button key={i} className="p-3 border border-gray-300 rounded text-left">
                커뮤니티 글 미리보기
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
