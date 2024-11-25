import Banner from "@/components/FrontPage/Banner";
import DiscountBanner from "@/components/FrontPage/DiscountBanner";
import FeaturedProduct from "@/components/FrontPage/FeaturedProduct";
import PolicyInformation from "@/components/FrontPage/PolicyInformation";
import ProductCollection from "@/components/FrontPage/ProductCollection";
import SummerCollection from "@/components/FrontPage/SummarCollection";

export default function Home() {
  return (
    <div className="bg-[#F4F8FF]">
      <Banner />
      <PolicyInformation />
      <FeaturedProduct />
      <DiscountBanner />
      <ProductCollection />
      <SummerCollection />
    </div>
  );
}
