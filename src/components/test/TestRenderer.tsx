import { useState } from "react";
import type { TestData } from "../../data/TESTS";
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

  const MBTI_SCORE: { [key: string]: number } = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  };

  const [mbtiScore, setMbtiScore] = useState(MBTI_SCORE);

  if (mode === TEST_MODE.intro) {
    return <Intro info={currentTest} setMode={setMode} />;
  } else if (mode === TEST_MODE.quiz) {
    return (
      <Quiz
        questions={currentTest.questions}
        setMbtiScore={setMbtiScore}
        setMode={setMode}
      />
    );
  } else if (mode === TEST_MODE.loading) {
    return <Loading mbtiScore={mbtiScore} currentTest={currentTest} />;
  } else {
    return (
      <div>
        <p>잘못된 페이지입니다</p>
      </div>
    );
  }
};

export default TestRenderer;
