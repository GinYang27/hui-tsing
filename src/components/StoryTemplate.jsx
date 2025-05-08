function StoryTemplate({ title, blocks }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-wide text-pink-700 text-center mb-10 font-serif">
          {title}
        </h1>
        {blocks.map((block, idx) => (
          <div key={idx} className="mb-12 text-center">
            {block.image && (
              <img
                src={block.image}
                alt=""
                className="rounded-xl shadow-lg mx-auto mb-4 max-w-full md:max-w-md"
              />
            )}
            <p className="text-gray-700 text-lg leading-relaxed font-serif">{block.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryTemplate;