import { useEffect, useState } from "react";
import { TestData } from "../../data/TESTS";
import { TEST_MODE } from "./TestRenderer";
import { arrayShuffler } from "../../tools/util";
import { Progress } from "antd";

interface QuizProps {
  questions: TestData["questions"];
  setMbtiScore: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
  setMode: React.Dispatch<
    React.SetStateAction<(typeof TEST_MODE)[keyof typeof TEST_MODE]>
  >;
}

const Quiz = ({ questions, setMbtiScore, setMode }: QuizProps) => {
  const [questionNum, setQuestionNum] = useState<number>(0);

  const onOptionClickHandler = (type: string) => {
    setQuestionNum((prev) => prev + 1);
    setMbtiScore((prev) => {
      return { ...prev, [type]: prev[type] + 1 };
    });
  };

  useEffect(() => {
    if (questionNum === questions.length) {
      setMode(TEST_MODE.loading);
    }
  }, [questionNum, questions.length, setMode]);

  return (
    <div className="flex flex-col justify-center gap-6">
      <h3 className="text-2xl font-bold my-8">
        {questions[questionNum]?.question}
      </h3>
      {questions[questionNum] &&
        arrayShuffler(questions[questionNum].answers).map((answer) => {
          return (
            <button
              key={`${questionNum}-${answer.type}`}
              className="cursor-pointer w-full max-w-full text-wrap break-keep h-36 border-2 p-4 border-blue-400 rounded-lg bg-blue-50 hover:bg-blue-100 text-lg"
              onClick={() => onOptionClickHandler(answer.type)}
            >
              {answer.content}
            </button>
          );
        })}
      <Progress
        percent={(questionNum / questions.length) * 100}
        showInfo={false}
      />
    </div>
  );
};

export default Quiz;
