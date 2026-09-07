import Image from "next/image";

const capacityItems = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

export default function CapacityDevelopment() {
  return (
    <section
      id="capacity-development"
      className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1150px] items-center gap-8 md:grid-cols-2 lg:gap-12">
        {/* Content */}
        <div>
          <h2 className="text-2xl font-medium leading-tight text-[#222222] sm:text-3xl">
            Capacity Development
          </h2>

          <p className="mt-2 text-[10px] leading-5 text-[#666666] sm:text-xs sm:leading-6">
             At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success.

           
          </p>

          <ul className="mt-4 space-y-2">
            {capacityItems.map((item) => (
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

        {/* Image */}
        <div className="relative mx-auto aspect-[1.55] w-full max-w-[500px] overflow-hidden rounded-md">
          <Image
            src="/images/capacity-development.jpg"
            alt="Professionals participating in a capacity development session"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}