import CopyToClipboard from "react-copy-to-clipboard";
import { useNavigate } from "react-router-dom";
import { HomeOutlined, LinkOutlined, RedoOutlined } from "@ant-design/icons";

interface ResultButtonGroupProps {
  testParam: string;
  resultParam: string;
}

const ResultButtonGroup = ({
  testParam,
  resultParam,
}: ResultButtonGroupProps) => {
  const navigate = useNavigate();

  const redoClickHandler = () => {
    navigate(`/${testParam}`);
  };

  const goHomeClickHandler = () => {
    navigate("/");
  };

  return (
    <div className="w-3/5 flex flex-col gap-3 justify-center items-center mx-auto my-6">
      <div className="w-full flex justify-between items-center gap-3">
        <CopyToClipboard
          text={`${
            import.meta.env.BASE_URL
          }/${testParam}/result/${resultParam}`}
        >
          <button
            onClick={() => window.alert("URL이 복사되었습니다")}
            className="flex-1 p-2 border-2 border-blue-400 rounded-md hover:bg-blue-400 cursor-pointer text-blue-400 hover:text-white"
          >
            <LinkOutlined />
            <span className="ml-1 font-semibold">링크 복사</span>
          </button>
        </CopyToClipboard>
        <button
          onClick={redoClickHandler}
          className="flex-1 p-2 border-2 border-blue-400 rounded-md hover:bg-blue-400 cursor-pointer text-blue-400 hover:text-white"
        >
          <RedoOutlined />
          <span className="ml-1 font-semibold">다시하기</span>
        </button>
      </div>
      <button
        onClick={goHomeClickHandler}
        className="w-full p-2 border-2 border-blue-400 rounded-md hover:bg-blue-400 cursor-pointer text-blue-400 hover:text-white"
      >
        <HomeOutlined />
        <span className="ml-1 font-semibold">다른 테스트 하러가기</span>
      </button>
    </div>
  );
};
export default ResultButtonGroup;
