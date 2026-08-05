import Image from "next/image";
import RechargeBillsPreviewPage from "./recharge-bills-preview/page";
import TravelPreviewPage from "./travel-preview/page";
import HomePartners from "../../components/HomePartners";
import HomeSecurity from "../../components/HomeSecurity";
import HomeOnboarding from "../../components/HomeOnboarding";
import UtilitiesHome from "../../components/UtilitiesHome";
import TestimonialSlider from "../../components/TestimonialSlider";
import ComplianceSection from "../../components/ComplianceSection";
import HomeMap from "../../components/HomeMap";
import APi from "../../components/APi";
import HomeRechargeSection from "../../components/HomeRechargeSection";
import HomeCreditScoreSection from "../../components/HomeCreditScore";
import HomePaymentGatewaySection from "../../components/HomePaymentGateway";
import HomeTrustedSecureSection from "../../components/HomeSecure";
import HomeAppDownload from "../../components/HomeAppDownload";
import ContactBanner from "../../components/ContactBanner";
import HomeFAQ from "../../components/HomeFAQ";
import HomePromoBanners from "../../components/HomePromoBanners";
import AnimatedHeroPreview from "./animated-hero-preview/page";

export default function Home() {
  return (
    <>
      <AnimatedHeroPreview />
      <RechargeBillsPreviewPage />
      <TravelPreviewPage />
      <HomePromoBanners />
      <HomeCreditScoreSection />
      <HomeAppDownload />
      {/* <HomePartners /> */}
      {/* <APi /> */}
      {/* <HomeOnboarding /> */}
      {/* <HomeRechargeSection /> */}
      {/* <HomeSecurity /> */}
      {/* <HomeTrustedSecureSection /> */}
      {/* <UtilitiesHome /> */}
      {/* <HomePaymentGatewaySection /> */}
      <HomeMap />
      <TestimonialSlider />
      <ComplianceSection />
      <HomeFAQ />
      <ContactBanner variant="home" />
    </>
  );
}
