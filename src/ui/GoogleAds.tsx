import Script from 'next/script';
import { useEffect } from 'react';

const GoogleAds = () => {
  useEffect(() => {
    if ((window as any).adsbygoogle && typeof (window as any).adsbygoogle.push === 'function') {
      (window as any).adsbygoogle.push({});
    }
  }, []);

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4056776825481824`}
        onLoad={() => {
          if ((window as any).adsbygoogle && typeof (window as any).adsbygoogle.push === 'function') {
            (window as any).adsbygoogle.push({});
          }
        }}
      />
      
      <ins
        id="google-ads"
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4056776825481824"
        data-ad-slot="4284247248"
        data-ad-format="auto"
        data-full-width-responsive={true}
      ></ins>
    </>
  );
};

export default GoogleAds;