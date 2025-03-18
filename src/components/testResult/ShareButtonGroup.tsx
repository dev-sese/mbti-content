import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
import { TestData } from "../../data/TESTS";
import CopyToClipboard from "react-copy-to-clipboard";

interface ShareButtonGroupProps {
  testParam: string;
  resultParam: string;
  currentTest: TestData;
}

const ShareButtonGroup = ({
  testParam,
  resultParam,
  currentTest,
}: ShareButtonGroupProps) => {
  return (
    <div className="my-4">
      <h3 className="text-lg font-bold mb-2">친구에게 공유하기</h3>
      <div className="h-13 flex justify-center items-center gap-3">
        <FacebookShareButton
          url={`${import.meta.env.BASE_URL}/${testParam}/result/${resultParam}`}
          hashtag={`#${currentTest.info.mainTitle}`}
        >
          <FacebookIcon round size={48} />
        </FacebookShareButton>
        <TwitterShareButton
          title={currentTest.info.mainTitle}
          url={`${import.meta.env.BASE_URL}/${testParam}/result/${resultParam}`}
          hashtags={[`#${currentTest.info.mainTitle}`]}
        >
          <XIcon round size={48} />
        </TwitterShareButton>
        <CopyToClipboard
          text={`${
            import.meta.env.BASE_URL
          }/${testParam}/result/${resultParam}`}
        >
          <button
            onClick={() => window.alert("URL이 복사되었습니다")}
            className="rounded-full bg-lime-400 w-12 h-12 hover:bg-lime-500 cursor-pointer"
          >
            <span className="font-semibold text-lg text-white">URL</span>
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShareButtonGroup;
