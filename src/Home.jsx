import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import stories from "./stories/storiesData";

export default function Home() {
  const [allRead, setAllRead] = useState(false);

  useEffect(() => {
    const key = 'readIds';
    const stored = JSON.parse(localStorage.getItem(key) || '[]');

    // Check if all 1–34 are present
    const fullSet = Object.keys(stories);
    const isComplete = fullSet.every(id => stored.includes(id));
    setAllRead(isComplete);
  }, []);


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">目录</h1>
      <ul className="list-disc pl-6 space-y-2">
        {allRead && (
          <li>
            <Link to={'/story/start'} className="text-orange-500 hover:underline font-bold">
              0 - 11/12/2022 - 月下沙利叶
            </Link>
          </li>
        )}
        {Object.entries(stories).map(([id, story]) => (
          <li key={id}>
            <Link to={`/story/${id}`} className="text-blue-500 hover:underline">
              {id} - {story.date} - {story.title}
            </Link>
          </li>
        ))}
        {allRead && (
          <li>
            <Link to={'/story/now'} className="text-orange-500 hover:underline font-bold">
              X - 05/16/2025 - 现在
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}