import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";
import CorporateTraining from "@/components/CorporateTraining";
import PersonalisedTraining from "@/components/PersonalisedTraining";
import CapacityDevelopment from "@/components/CapacityDevelopment";
import ManagementDevelopment from "@/components/ManagementDevelopment";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultant from "@/components/TrainingConsultant";
import ConsultationCTA from "@/components/ConsultationCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LearningManagement />
        <CorporateTraining />
        <PersonalisedTraining />
        <CapacityDevelopment />
        <ManagementDevelopment />
        <TransformationHub />
        <TrainingConsultant />
        <ConsultationCTA />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}