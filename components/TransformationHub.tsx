import Image from "next/image";

const courses = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <section
  id="transformation-hub"
  className="bg-white px-5 py-12 sm:px-8 lg:px-12"
>
  <div className="mx-auto max-w-6xl rounded-lg bg-[#f8e7ec] p-5 sm:p-8 lg:p-10">
    
    {/* Write-up */}
    <div>
      <p className="text-[10px] italic text-blue-500 sm:text-xs">
        Learning With Our CEO:
      </p>

      <h2 className="mt-1 text-xl font-medium italic text-[#6f1558] sm:text-2xl">
        Transformation Hub With Jite Newton
      </h2>

      <p className="mt-3 text-[9px] leading-4 text-[#444] sm:text-[10px] sm:leading-5">
        Transformation Hub with Jite Newton is a flagship webinar series
        curated by the CEO, Dr. Jite Newton. Designed to elevate career
        trajectories and leadership capabilities, this exclusive event offers
        invaluable insights and strategies for personal and professional
        growth. Whether you're seeking to advance your career or enhance your
        leadership skills, the Transformation Hub provides a transformative
        learning experience to unlock your full potential and drive success in
        your endeavours.
      </p>
    </div>

    {/* Image + Course List */}
    <div className="mt-5 grid gap-5 md:grid-cols-2">
      
      {/* Image */}
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src="/images/transformation-hub.jpg"
          alt="Professionals participating in the Transformation Hub webinar"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Course list */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course}
            className="flex items-center gap-2 rounded-md bg-white px-3 py-3 text-[9px] text-[#444] sm:text-[10px]"
          >
            <span className="text-[#741354]">ϟ</span>
            {course}
          </div>
        ))}

        <a
          href="#consultation"
          className="mt-1 inline-flex w-fit items-center gap-2 rounded-sm bg-[#741354] px-5 py-2.5 text-[9px] text-white focus:outline-none focus:ring-2 focus:ring-[#741354] focus:ring-offset-2"
        >
          Learn More
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}