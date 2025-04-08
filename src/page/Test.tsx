import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TestData, TESTS } from "../data/TESTS";
import TestRenderer from "../components/test/TestRenderer";
import MetatagRenderer from "../components/MetatagRenderer";

const Test = () => {
  const navigate = useNavigate();
  const { testParam } = useParams();
  const [currentTest, setCurrentTest] = useState<TestData | undefined>(
    undefined
  );

  useEffect(() => {
    const theTest = TESTS.find((test) => test.info.mainUrl === testParam);
    if (theTest) {
      setCurrentTest(theTest);
    } else {
      window.alert("해당 테스트는 존재하지 않습니다");
      navigate("/");
    }
  }, [testParam, navigate]);

  return (
    <div>
      {currentTest && (
        <>
          <MetatagRenderer currentTest={currentTest} />
          <TestRenderer currentTest={currentTest} />
        </>
      )}
    </div>
  );
};

export default Test;
