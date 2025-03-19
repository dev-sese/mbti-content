import { useEffect } from "react";
import { TestData } from "../../data/TESTS";
import IntroButtonGroup from "./IntroButtonGroup";
import { TEST_MODE } from "./TestRenderer";

const Intro = ({
  info,
  setMode,
}: {
  info: TestData;
  setMode: React.Dispatch<
    React.SetStateAction<(typeof TEST_MODE)[keyof typeof TEST_MODE]>
  >;
}) => {
  const startClickHandler = () => setMode(TEST_MODE.quiz);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl">{info.info.mainTitle}</h1>
      <h3 className="text-2xl">{info.info.subTitle}</h3>
      <div className="w-full h-80 bg-blue-200">
        <p>{info.info.mainTitle}</p>
      </div>
      <p>{info.info.mainTitle}로 여러분의 성향을 파악해보세요</p>
      <button
        className="cursor-pointer bg-blue-300 px-8 py-4 rounded-lg font-bold hover:bg-blue-400"
        onClick={startClickHandler}
      >
        시작하기
      </button>
      <IntroButtonGroup />
    </div>
  );
};

export default Intro;
