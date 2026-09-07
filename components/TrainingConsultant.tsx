const trainingFeatures = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function TrainingConsultant() {
  return (
    <section
      id="training-consultant"
      className="bg-[#eee5eb] px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-16"
    >
      <div className="mx-auto max-w-[1150px]">
        <h2 className="text-2xl font-medium text-[#6f1558] sm:text-3xl">
          Training The Consultant
        </h2>

        <p className="mt-1 text-[10px] font-medium text-[#6f1558] sm:text-xs">
          Maximise Your Potential as a Certified Trainer:
        </p>

        <p className="mt-3 max-w-[1080px] text-[10px] leading-5 text-[#444444] sm:text-xs sm:leading-6">
          With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
        
        </p>

        <div className="mt-5 grid gap-5 rounded-md bg-[#6f1255] p-4 text-white sm:grid-cols-2 sm:p-5">
          {trainingFeatures.map((feature) => (
            <article key={feature.title}>
              <h3 className="text-[10px] font-semibold sm:text-xs">
                {feature.title}
              </h3>

              <p className="mt-2 text-[9px] leading-4 text-white/85 sm:text-[10px] sm:leading-5">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <a
          href="#consultation"
          className="mt-4 inline-flex items-center gap-2 rounded-sm bg-[#741354] px-5 py-2.5 text-[10px] font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#741354] focus:ring-offset-2"
        >
          Learn More
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}