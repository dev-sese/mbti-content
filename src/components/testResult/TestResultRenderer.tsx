import { ResultTestData } from "../../data/TESTS";

const TestResultRenderer = ({
  typeResult,
}: {
  typeResult: ResultTestData | undefined;
}) => {
  return (
    <div>
      <h3 className="text-3xl font-bold my-4">결과는...</h3>
      <img
        src={typeResult?.img_src}
        alt={typeResult?.zodiac}
        className="w-2/5 m-auto rounded-lg"
      />
      <div className="w-3/5 m-auto text-center my-4">
        <p className="mb-3 text-xl font-semibold">{typeResult?.zodiac}</p>
        <p>{typeResult?.description}</p>
      </div>
    </div>
  );
};

export default TestResultRenderer;
