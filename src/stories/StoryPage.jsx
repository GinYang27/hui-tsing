import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StoryTemplate from "../components/StoryTemplate";
import stories from "./storiesData";

export default function StoryPage() {
  const { id } = useParams();
  let story = null;
  if (id === 'start') {
    story = {
      title: "月下沙利叶",
      date: "11/12/2022",
      blocks: [
        {
          image: "https://jinstaticasset.blob.core.windows.net/photos/start_1.jpeg",
          text: "这是第一个故事。",
        },
        {
          image: "https://jinstaticasset.blob.core.windows.net/photos/start_2.jpeg",
          text: "吴同学，很高兴认识你。",
        },
      ],
    };
  } else if (id === 'now') {
    story = {
      title: "老婆，生日快乐。",
      date: "05/16/2025",
      blocks: [
        {
          image: "https://jinstaticasset.blob.core.windows.net/photos/now_1.jpeg",
          text: "谢谢你一直以来，是我故事里的唯一女主角。"
        }
      ],
    };
  } else {
    story = stories[id];
  }

  const prevId = String(parseInt(id) - 1);
  const nextId = String(parseInt(id) + 1);

  if (!story) {
    return <div className="p-8 text-red-500">故事不存在</div>;
  }

  useEffect(() => {
    const key = 'readIds';
    const stored = JSON.parse(localStorage.getItem(key) || '[]');
    
    if (!stored.includes(id)) {
      stored.push(id);
      localStorage.setItem(key, JSON.stringify(stored));
    }
  }, []);

    return (
    <>
      <StoryTemplate title={story.title} subtitle={story.date} blocks={story.blocks} />
      <div className="flex flex-row justify-between gap-4 max-w-lg mx-auto mt-8 px-4 text-center h-16">
        {stories[prevId] ? (
          <a
            href={`/story/${prevId}`}
            className="text-blue-500 hover:underline text-base text-center w-20"
          >
            ← Prev
          </a>
        ) : <div className="w-20" />} {/* 占位 */}

        <a
          href="/"
          className="text-gray-500 underline hover:text-gray-700 text-base text-center w-20"
        >
          Home
        </a>

        {stories[nextId] ? (
          <a
            href={`/story/${nextId}`}
            className="text-blue-500 hover:underline text-base text-cente w-20"
          >
            Next →
          </a>
        ) : <div className="w-20" />} {/* 占位 */}
      </div>
    </>
  );
}