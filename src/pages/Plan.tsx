
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlanningDashboard from "@/components/plan/PlanningDashboard";
import ItineraryBuilder from "@/components/plan/ItineraryBuilder";
import AccommodationFinder from "@/components/plan/AccommodationFinder";
import TransportationGuide from "@/components/plan/TransportationGuide";
import PracticalInformation from "@/components/plan/PracticalInformation";
import SeasonalGuide from "@/components/plan/SeasonalGuide";

const Plan = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen bg-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t('plan.title')}
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            {t('plan.subtitle')}
          </p>
          
          {/* Trip Planning Dashboard */}
          <section id="planning-dashboard" className="mb-16">
            <PlanningDashboard />
          </section>
          
          {/* Interactive Itinerary Builder */}
          <section id="itinerary-builder" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('plan.itinerary.title')}</h2>
            <ItineraryBuilder />
          </section>
          
          {/* Accommodation Finder */}
          <section id="accommodation" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('plan.accommodation.title')}</h2>
            <AccommodationFinder />
          </section>
          
          {/* Transportation Guide */}
          <section id="transportation" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('plan.transportation.title')}</h2>
            <TransportationGuide />
          </section>
          
          {/* Practical Information */}
          <section id="practical-info" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('plan.practical.title')}</h2>
            <PracticalInformation />
          </section>
          
          {/* Seasonal Planning Guide */}
          <section id="seasonal-guide" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('plan.seasonal.title')}</h2>
            <SeasonalGuide />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plan;
