export default function StoryTemplate({ title, blocks }) {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      {blocks.map((block, idx) => (
        <div key={idx} className="mb-8 text-center">
          {block.image && (
            <img
              src={block.image}
              alt=""
              className="mb-4 rounded-xl shadow-md max-w-full"
            />
          )}
          <p className="text-lg text-gray-700">{block.text}</p>
        </div>
      ))}
    </div>
  );
}