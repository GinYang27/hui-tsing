import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">目录</h1>
      <ul className="list-disc pl-6">
        <li>
          <Link to="/story1" className="text-blue-500 hover:underline">
            故事一：我的猫和狗
          </Link>
        </li>
        {/* 继续添加目录项 */}
      </ul>
    </div>
  );
}