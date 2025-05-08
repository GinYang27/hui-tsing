import { useParams } from "react-router-dom";
import StoryTemplate from "../components/StoryTemplate";
import stories from "./storiesData";

export default function StoryPage() {
  const { id } = useParams();
  const story = stories[id];

  if (!story) {
    return <div className="p-8 text-red-500">故事不存在</div>;
  }

  return <StoryTemplate title={story.title} blocks={story.blocks} />;
}