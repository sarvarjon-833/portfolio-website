import EduCard from "./CardTemplates/EduCard";

const Education = () => {
  const certificationData = [
    {
      role: "Frontend React JS Developer Certification",
      company: "Mohirdev Academy",
      date: "2025",
      location: "Uzbekistan / Online",
      description:
        "A comprehensive program focusing on modern web development principles, component-based architecture, and serverless technology. Built scalable applications with efficient state management and modern deployment pipelines.",
      techStack: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React.js",
        "Next.js",
        "Supabase",
      ],
      certLink: "/Certificate/sarvar_mohirdevCertificate.pdf",
    },
    {
      role: "The Complete Node.js, Express & MongoDB Bootcamp Certification",
      company: "Udemy - Jonas Schmedtmann",
      date: "2026",
      location: "Online / Udemy Platform",
      description:
        "A deep dive into backend engineering, building scalable and secure APIs with server-side JavaScript, NoSQL databases, and modern deployment practices. Covers advanced concepts like authentication, authorization, error handling, performance optimization, and clean architecture.",
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
        "Error Handling",
        "Performance Tuning",
      ],
      certLink: "/Certificate/sarvar_UdemyCertificate.pdf",
    },
  ];

  return (
    <section
      id="education"
      className=" mx-auto w-full px-4 md:px-6 lg:px-8 sm:px-6 pt-32 py-20 bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto space-y-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl text-gray-100">
          Education & Certifications
        </h2>
        <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base">
          Highlighting the structured courses and professional certifications
          completed to master modern web technologies, database management, and
          industry best practices.
        </p>
      </div>
      <div className="mx-auto max-w-7xl flex flex-col gap-6 w-full">
        {certificationData.map((cert, index) => (
          <EduCard
            key={index}
            role={cert.role}
            company={cert.company}
            certLink={cert.certLink}
            date={cert.date}
            description={cert.description}
            location={cert.location}
            techStack={cert.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
