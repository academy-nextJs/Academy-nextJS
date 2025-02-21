

import Breadcrumb from "@/components/common/BreadCrumb";
import AboutUs from "@/components/landing/about";
import Hero from "@/components/landing/hero/Hero";

export default function Home() {
  return (
    <div className="text-gray border-2 bg-base border-gray space-y-8">
      <p className="font-Peyda-900"> سلام </p>
      <Hero />
      <AboutUs />
    </div>
  );
}
