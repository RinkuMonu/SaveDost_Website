import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Handshake,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import ScrollReveal from "../../../components/ScrollReveal";

export const metadata = {
  title: "Our Team | SaveDost",
  description:
    "Meet the technology, growth and engagement teams working together to build and support SaveDost.",
};

const technicalTeam = [
  {
    name: "Rajyavardhan Singh",
    role: "Technical Team",
    designation: "Backend Developer",
    image: "/teams/RajRajyavardhan Singh.jpeg",
  },
  {
    name: "Rahul Singh",
    role: "Technical Team",
    designation: "Backend Developer",
    image: "/teams/Rahul Singh.jpeg",
  },
  {
    name: "Rinku Yadav",
    role: "Technical Team",
    designation: "Server Administrator",
    image: "/teams/Rinku yadav.jpeg",
  },
  {
    name: "Devika Chhipa",
    role: "Technical Team",
    designation: "Senior Frontend Developer",
    image: "/teams/Devika Chhipa.jpeg",
  },
  {
    name: "Khyati Jain",
    role: "Technical Team",
    designation: "UI/UX Designer",
    image: "/teams/Khyati Jain.jpeg",
  },
  {
    name: "Rahul Jain",
    role: "Technical Team",
    designation: "Frontend Developer Intern",
    image: "/teams/Rahul Jain.png",
  },
];

const growthTeam = [
  {
    name: "Chandan Sharma",
    role: "Growth & Engagement",
    designation: "SEO Specialist",
    image: "/teams/Chandan Sharma.jpeg",
  },
  {
    name: "Vishal Prajapat",
    role: "Growth & Engagement",
    designation: "Data Analyst & Social Media Manager",
    image: "/teams/Vishhal_Prajapat.jpeg",
  },
  {
    name: "Devika Jain",
    role: "Growth & Engagement",
    designation: "Content Writer & Social Media Manager",
    image: "/teams/Devika Jain.jpeg",
  },
  {
    name: "Sejal Gupta",
    role: "Growth & Engagement",
    designation: "Junior AI/ML Engineer",
    image: "/teams/sejal gupta.jpeg",
  },
];

const values = [
  {
    icon: Heart,
    title: "Customer First",
    text: "We start with the needs and experience of every SaveDost user.",
  },
  {
    icon: ShieldCheck,
    title: "Work with Integrity",
    text: "We value honest communication, responsible decisions and trust.",
  },
  {
    icon: Users,
    title: "Grow Together",
    text: "Technology, engagement and support work as one connected team.",
  },
  {
    icon: Lightbulb,
    title: "Keep Improving",
    text: "We learn, test and improve the experience one useful step at a time.",
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

function TeamMemberCard({ member, tone = "blue" }) {
  const isGreen = tone === "green";

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#dbe9ec] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(12,61,76,.12)]">
      <div
        className={`relative h-[330px] overflow-hidden ${isGreen ? "bg-[#f1f8ec]" : "bg-[#edf7f9]"}`}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role} at SaveDost`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
          />
        ) : (
          <div className="grid h-full place-items-center">
            <span
              className={`grid h-28 w-28 place-items-center rounded-full text-3xl font-extrabold ${isGreen ? "bg-[#dceecd] text-[#4f8c25]" : "bg-[#d6edf2] text-[#026381]"}`}
            >
              {initials(member.name)}
            </span>
          </div>
        )}
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.13em] ${isGreen ? "bg-[#e2f2d6] text-[#4f8c25]" : "bg-white/90 text-[#026381]"} shadow-sm backdrop-blur`}
        >
          {member.role}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-extrabold text-[#0C3D4C]">{member.name}</h3>
        <p
          className={`mt-2 text-sm font-semibold ${isGreen ? "text-[#57932d]" : "text-[#0289ad]"}`}
        >
          {member.designation}
        </p>
      </div>
    </article>
  );
}

function TeamSection({
  eyebrow,
  title,
  description,
  members,
  icon: Icon,
  tone = "blue",
  alternate = false,
}) {
  return (
    <section className={`${alternate ? "bg-[#f5fafb]" : "bg-white"} px-5 py-16 sm:px-8 lg:py-24`}>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span
                className={`grid h-10 w-10 place-items-center rounded-xl ${tone === "green" ? "bg-[#e7f4dd] text-[#57932d]" : "bg-[#e5f4f7] text-[#026381]"}`}
              >
                <Icon size={20} />
              </span>
              <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#0289ad]">
                {eyebrow}
              </p>
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
              {title}
            </h2>
          </div>
          {description && (
            <p className="max-w-xl text-sm leading-7 text-slate-600 lg:text-right">{description}</p>
          )}
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <ScrollReveal key={member.name} delay={(index % 3) * 0.07} className="h-full">
              <TeamMemberCard member={member} tone={tone} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-[#edf8fa] px-5 py-14 sm:px-8 lg:py-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#00a8e8]/8 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <ScrollReveal direction="left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b8dfe7] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[.16em] text-[#026381]">
              <Sparkles size={15} /> The people at SaveDost
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0C3D4C] sm:text-5xl lg:text-[58px]">
              One team, building simpler digital experiences.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Meet the people who build our technology, support our services and help SaveDost grow
              with its users.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-extrabold text-[#026381]">40+</p>
                <p className="text-xs font-semibold text-slate-500">Total team members</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.12} className="relative h-[320px] sm:h-[430px]">
            <Image
              src="/teams/team.png"
              alt="The SaveDost team"
              fill
              priority
              className="object-contain"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-2xl border border-[#dcebed] bg-white p-6 shadow-[0_14px_35px_rgba(12,61,76,.06)] sm:grid-cols-3 sm:p-8">
          {[
            ["Technology", "Building secure, clear and useful digital journeys."],
            ["Service", "Keeping the user experience practical and dependable."],
            ["Growth", "Helping more people discover and use SaveDost."],
          ].map(([title, text], index) => (
            <ScrollReveal
              key={title}
              delay={index * 0.07}
              className="flex gap-4 sm:border-r sm:border-[#e1edef] sm:pr-6 sm:last:border-0"
            >
              <span className="text-sm font-black text-[#82bf4f]">0{index + 1}</span>
              <div>
                <h2 className="font-extrabold text-[#0C3D4C]">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <TeamSection
        eyebrow="Technical Team"
        title="The people building our platform"
        members={technicalTeam}
        icon={Code2}
        alternate
      />
      <TeamSection
        eyebrow="Growth & Engagement"
        title="The people expanding our digital reach"
        members={growthTeam}
        icon={Handshake}
        tone="green"
      />

      <section className="bg-[#0C3D4C] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#9de4ef]">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Values shared across every team
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <ScrollReveal key={title} className="h-full">
                <article className="h-full rounded-2xl border border-white/10 bg-white/6 p-6">
                  <Icon size={22} className="text-[#91d05a]" />
                  <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[30px] bg-[#123e62] px-7 py-11 text-white shadow-[0_22px_55px_rgba(12,61,76,.18)] sm:px-10 lg:grid-cols-[1fr_300px] lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[44px] border-[#8ac954]/10" />
          <div className="pointer-events-none absolute bottom-8 right-[30%] h-3 w-3 rounded-full bg-[#8ac954]" />

          <ScrollReveal direction="left" className="relative">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-[#9de4ef]">
                <BriefcaseBusiness size={22} />
              </span>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#9de4ef]">
                Careers at SaveDost
              </p>
            </div>
            <h2 className="mt-6 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Build meaningful fintech experiences with us.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Join a team where technology, service and fresh ideas come together to make everyday
              digital finance easier for users.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Technology", "Growth & Engagement", "Design", "Customer Support"].map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/15 bg-white/7 px-4 py-2 text-xs font-semibold text-white/85"
                >
                  {area}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={0.1}
            className="relative rounded-2xl border border-white/12 bg-white/8 p-6 backdrop-blur-sm"
          >
            <span className="grid h-13 w-13 place-items-center rounded-xl bg-[#8ac954] text-white shadow-lg">
              <Sparkles size={24} />
            </span>
            <h3 className="mt-5 text-xl font-extrabold">Find your next opportunity</h3>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Tell us about your skills and the kind of work you want to do.
            </p>
            <Link
              href="/coming-soon"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#123e62] transition hover:-translate-y-0.5 hover:bg-[#eef8fa]"
            >
              See Opportunities <ArrowRight size={17} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
