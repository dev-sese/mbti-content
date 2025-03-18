import { useState } from "react";
import { TestData } from "../../data/TESTS";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Loading from "./Loading";

export const TEST_MODE = {
  intro: "INTRO",
  quiz: "QUIZ",
  loading: "LOADING",
} as const;

const TestRenderer = ({ currentTest }: { currentTest: TestData }) => {
  const [mode, setMode] = useState<(typeof TEST_MODE)[keyof typeof TEST_MODE]>(
    TEST_MODE.intro
  );

  if (mode === TEST_MODE.intro) {
    return <Intro info={currentTest} setMode={setMode} />;
  } else if (mode === TEST_MODE.quiz) {
    return <Quiz />;
  } else if (mode === TEST_MODE.loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <p>잘못된 페이지입니다</p>
      </div>
    );
  }
};

export default TestRenderer;
