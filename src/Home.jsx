import { Link } from "react-router-dom";
import stories from "./stories/storiesData";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">目录</h1>
      <ul className="list-disc pl-6 space-y-2">
        {Object.entries(stories).map(([id, story]) => (
          <li key={id}>
            <Link to={`/story/${id}`} className="text-blue-500 hover:underline">
              {story.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}