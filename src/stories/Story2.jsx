import StoryTemplate from "../components/StoryTemplate";

export default function Story2() {
  return (
    <StoryTemplate
      title="我们的浪漫纪念日"
      blocks={[
        {
          image: "https://your-blob-url.com/photo1.jpg",
          text: "那天你牵着我的手走过人群，我仿佛整个世界都安静了。",
        },
        {
          image: "https://your-blob-url.com/photo2.jpg",
          text: "你说：“以后无论多远，我们一起走。”",
        },
      ]}
    />
  );
}