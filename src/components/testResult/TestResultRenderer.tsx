import { ResultTestData } from "../../data/TESTS";

const TestResultRenderer = ({
  typeResult,
}: {
  typeResult: ResultTestData | undefined;
}) => {
  return (
    <div>
      <h3 className="text-3xl font-bold">결과는...</h3>
      <span>{typeResult?.type}</span>
    </div>
  );
};

export default TestResultRenderer;
