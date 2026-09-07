import Image from "next/image";

const trainingItems = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

export default function CorporateTraining() {
  return (
    <section
      id="corporate-trainings"
      className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1150px]">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-medium leading-tight text-[#222222] sm:text-3xl">
              Corporate Trainings
            </h2>

            <p className="mt-2 max-w-[540px] text-[10px] leading-5 text-[#666666] sm:text-xs sm:leading-6">
              Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.
              
            </p>

            <ul className="mt-4 space-y-2">
              {trainingItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[10px] text-[#666666] sm:text-[11px]"
                >
                  <span
                    aria-hidden="true"
                    className="text-[#7a155d]"
                  >
                    ⚡
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative mx-auto aspect-[1.55] w-full max-w-[500px] overflow-hidden rounded-sm">
            <Image
              src="/images/corporate-training.jpg"
              alt="Corporate training session with professionals"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}