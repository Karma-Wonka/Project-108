import { SectionEyebrow } from "../ui/SectionEyebrow";

export function ReadinessSection() {
  return (
    <section className="section-container">
      <SectionEyebrow>Readiness</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl mb-4">This is already in motion</h2>
      <p className="text-xl italic text-ink-soft/60 mb-16">
        Ambitious sacred projects require both devotion and rigour. Project{" "}
        <span className="onum">108</span> is being shaped by both.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            status: "Confirmed",
            title: "Site",
            desc: "The site stretches over 12 km along the Mao River.",
          },
          {
            status: "Locked",
            title: "Design",
            desc: "The project is proceeding with the Jangchub Chorten design.",
          },
          {
            status: "Underway",
            title: "Engineering",
            desc: "Technical planning and foundation preparation are already active.",
          },
          {
            status: "In Progress",
            title: "Materials",
            desc: "Sourcing and vendor discussions are in full swing.",
          },
          {
            status: "Active",
            title: "Guidance",
            desc: "Eminent Buddhist masters are already involved in the project.",
          },
          {
            status: "Ongoing",
            title: "Conversations",
            desc: "The project welcomes dialogue from around the world.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="card-premium text-left group hover:-translate-y-1"
          >
            <span className="font-utility text-[0.6rem] uppercase tracking-widest text-gold font-bold mb-2 block">
              {card.status}
            </span>
            <h3 className="text-xl font-medium mb-4 group-hover:text-gold transition-colors">
              {card.title}
            </h3>
            <p className="text-ink-soft text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
