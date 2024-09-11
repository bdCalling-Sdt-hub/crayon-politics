/* eslint-disable @next/next/no-before-interactive-script-outside-document */

import Script from 'next/script';
import { useEffect } from 'react';


const GoogleAds = () => {
  useEffect(() => {
    // Ensure the adsbygoogle script has loaded before pushing ads
    if ((window as any).adsbygoogle && typeof (window as any).adsbygoogle.push === 'function') {
      (window as any).adsbygoogle.push({});
    }
  }, []);

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4056776825481824`}
        strategy="beforeInteractive"
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