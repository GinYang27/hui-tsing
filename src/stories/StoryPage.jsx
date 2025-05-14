import React from "react";
import { useParams } from "react-router-dom";
import StoryTemplate from "../components/StoryTemplate";
import stories from "./storiesData";

export default function StoryPage() {
  const { id } = useParams();
  const story = stories[id];
  const prevId = String(parseInt(id) - 1);
  const nextId = String(parseInt(id) + 1);

  if (!story) {
    return <div className="p-8 text-red-500">故事不存在</div>;
  }

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