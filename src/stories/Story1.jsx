

export default function Story1() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">我的猫和狗</h1>
      <p className="mb-4">
        从我小时候开始，我就特别喜欢小动物。直到现在，我的家里有一只狗叫 Yao Yao，还有一只猫叫 Mi Mi。
      </p>
      <img
        src="https://jinstaticasset.blob.core.windows.net/photos/ranshao_1.jpg"
        alt="Yao Yao"
        className="mb-4 rounded-xl shadow-md"
      />
      <p>
        Mi Mi 是一只安静的猫，喜欢坐在窗边晒太阳。她和 Yao Yao 是非常不一样的性格，但也能和平相处。
      </p>
    </div>
  );
}