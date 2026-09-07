import Image from "next/image";

const trainingItems = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

export default function PersonalisedTraining() {
  return (
    <section
      id="personalised-training"
      className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1150px] items-center gap-8 md:grid-cols-2 lg:gap-12">
        {/* Image */}
        <div className="relative mx-auto aspect-[1.55] w-full max-w-[500px] overflow-hidden rounded-md">
          <Image
            src="/images/personalised-training.jpg"
            alt="Professional participating in personalised training"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-medium leading-tight text-[#222222] sm:text-3xl">
            Personalised Individual Training
          </h2>

          <p className="mt-2 text-[10px] leading-5 text-[#666666] sm:text-xs sm:leading-6">
             Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.  

          </p>

          <ul className="mt-4 space-y-2">
            {trainingItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[10px] text-[#666666] sm:text-[11px]"
              >
                <span aria-hidden="true" className="text-[#7a155d]">
                  ⚡
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}