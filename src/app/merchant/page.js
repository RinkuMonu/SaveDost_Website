"use client";

import Empowering from "../../../components/Empowering";
import MerchantBannerSection from "../../../components/merchant/Merchantbanner";
import UserMerchantSection from "../../../components/merchant/UserMerchant";
import WhiteLabelSection from "../../../components/merchant/WhiteLabel";

function MerchantPage() {
  return (
    <main>
      <MerchantBannerSection />
      <UserMerchantSection />
      <Empowering />
      <WhiteLabelSection />
    </main>
  );
}

export default MerchantPage;
