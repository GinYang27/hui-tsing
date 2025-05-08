import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import StoryTemplate from "../components/StoryTemplate";
import stories from "./storiesData";

export default function StoryPage() {
  const { id } = useParams();
  const story = stories[id];
  const prevId = String(parseInt(id) - 1);
  const nextId = String(parseInt(id) + 1);
  const endRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    let topTimeout = null;
    let bottomTimeout = null;

    const observerBottom = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && stories[nextId]) {
          bottomTimeout = setTimeout(() => {
            window.location.href = `/story/${nextId}`;
          }, 1000);
        } else {
          clearTimeout(bottomTimeout);
        }
      },
      { threshold: 1.0 }
    );

    const observerTop = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && stories[prevId]) {
          topTimeout = setTimeout(() => {
            window.location.href = `/story/${prevId}`;
          }, 3000);
        } else {
          clearTimeout(topTimeout);
        }
      },
      { threshold: 1.0 }
    );

    if (endRef.current) observerBottom.observe(endRef.current);
    if (topRef.current) observerTop.observe(topRef.current);

    return () => {
      observerBottom.disconnect();
      observerTop.disconnect();
      clearTimeout(topTimeout);
      clearTimeout(bottomTimeout);
    };
  }, [id]);

  if (!story) {
    return <div className="p-8 text-red-500">故事不存在</div>;
  }

    return (
    <>
      <div ref={topRef} className="h-1"></div>
      <StoryTemplate title={story.title} blocks={story.blocks} />
      <div ref={endRef} className="h-1"></div>
      <div className="hidden md:flex justify-between max-w-xl mx-auto mb-4 px-4">
        {stories[prevId] ? (
          <a
            href={`/story/${prevId}`}
            className="text-blue-500 hover:underline text-sm md:text-base"
          >
            ← Previous
          </a>
        ) : <div />} {/* 占位，保持下一页在右对齐 */}

        {stories[nextId] && (
          <a
            href={`/story/${nextId}`}
            className="text-blue-500 hover:underline text-sm md:text-base ml-auto"
          >
            Next →
          </a>
        )}
      </div>
    </>
  );
}