import Image from "next/image";

const programs = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopment() {
  return (
    <section
      id="management-development"
      className="bg-white px-5 py-12 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl rounded-lg bg-[#3b062f] p-5 sm:p-8 lg:p-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
          <Image
            src="/images/management-development.jpg"
            alt="Professionals participating in a management development program"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-medium leading-tight sm:text-3xl">
            Management Development
            <br />
            Program
          </h2>

          <p className="mt-4 text-[10px] leading-5 text-white/80 sm:text-xs sm:leading-6">
             Tobams Group offers a comprehensive Management
             Development Program designed to equip corporate
             organisations with the high
             -performing leaders they need to
             thrive.
             <br></br>
             <br></br>

             Our program includes workshops, seminars, coaching
             sessions, online courses, and experiential learning
             opportunities designed to improve leadership, strategic
             thinking, communication, and other essential managerial
             competencies for corporate organisations.
             

           
          </p>

          <ul className="mt-5 space-y-2">
            {programs.map((program) => (
              
              <li
                key={program}
                className="flex items-center gap-1 rounded-sm bg-[#7a155d] px-4 py-3 text-[10px] sm:text-xs"
                >
            
               <span aria-hidden="true">⚡</span>
                {program}
                </li>
              
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}