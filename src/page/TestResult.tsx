import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResultTestData, TestData, TESTS } from "../data/TESTS";
import TestResultRenderer from "../components/testResult/TestResultRenderer";
import ShareButtonGroup from "../components/testResult/ShareButtonGroup";
import ResultButtonGroup from "../components/testResult/ResultButtonGroup";
import ResultThumbnailList from "../components/testResult/ResultThumbnailList";
import KakaoAdfit from "../components/KakaoAdfit";

const TestResult = () => {
  const { testParam, resultParam } = useParams();
  const navigate = useNavigate();

  const [typeResult, setTypeResult] = useState<ResultTestData | undefined>(
    undefined
  );
  const [currentTest, setCurrentTest] = useState<TestData | undefined>(
    undefined
  );

  useEffect(() => {
    const testInfo = TESTS.find((test) => test.info.mainUrl === testParam);
    if (!testInfo) {
      window.alert("존재하지 않는 테스트입니다");
      navigate("/");
    } else {
      setCurrentTest(testInfo);
    }

    const resultInfo = testInfo?.results.find(
      (result) => result.query === resultParam
    );

    if (!resultInfo) {
      window.alert("존재하지 않는 결과값입니다");
      navigate(`/${testInfo?.info.mainUrl}`);
    } else {
      setTypeResult(resultInfo);
    }
  }, [testParam, resultParam, navigate]);

  return (
    <div>
      {testParam && resultParam && currentTest && (
        <div>
          <KakaoAdfit />
          <TestResultRenderer typeResult={typeResult} />
          <ShareButtonGroup
            testParam={testParam}
            resultParam={resultParam}
            currentTest={currentTest}
          />
          <ResultButtonGroup testParam={testParam} resultParam={resultParam} />
          <ResultThumbnailList testParam={testParam} />
        </div>
      )}
    </div>
  );
};

export default TestResult;
