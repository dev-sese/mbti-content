import { useEffect } from "react";

const AdsenseUnit = ({ slot }: { slot: string }) => {
  useEffect(() => {
    if (window) {
      //@ts-expect-error fot adsense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);
  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6564220155140596"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdsenseUnit;
