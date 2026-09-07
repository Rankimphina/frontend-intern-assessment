import Image from "next/image";

export default function LearningManagement() {
  return (
    <section
      id="learning-management"
      className="bg-[#f0e7ec] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1150px] items-center gap-8 md:grid-cols-2 lg:gap-14">
        {/* Image */}
        <div className="relative mx-auto aspect-square w-full max-w-[390px] overflow-hidden rounded-full">
          <Image
            src="/images/learning-management.jpg"
            alt="Professionals participating in a learning and development program"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-medium text-[#6f1558] sm:text-3xl">
            Learning Management System
          </h2>

          <div className="mt-4 rounded-md bg-[#e2d4dd] p-5 sm:p-6">
            <p className="text-[11px] leading-5 text-[#333333] sm:text-xs sm:leading-6">
               TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.

             
            </p>

            <p className="mt-4 text-[11px] font-semibold text-[#6f1558]">
              Some of our courses include:
            </p>

            <ul className="mt-2 grid grid-cols-1 gap-y-2 text-[10px] text-[#333333] sm:grid-cols-3 sm:gap-x-5 sm:text-[11px]">
              <li>• Business Analysis</li>
              <li>• Design Thinking</li>
              <li>• Effective Communication</li>
              <li>• Entrepreneurship</li>
              <li>• Career Development</li>
              <li>• Business Model</li>
            </ul>
          </div>

          <a
            href="#training"
            className="mt-4 inline-flex items-center gap-2 rounded-sm bg-[#761456] px-5 py-2.5 text-[10px] font-medium text-white transition hover:bg-[#5d1045] focus:outline-none focus:ring-2 focus:ring-[#761456] focus:ring-offset-2"
          >
            Learn More
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}