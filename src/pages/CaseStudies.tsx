import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import directFileHomepage from "@/assets/direct-file-homepage.png";
import forsMarshWebsite from "@/assets/fors-marsh-website.png";
import healthyPeople2030 from "@/assets/healthy-people-2030.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

type CaseStudy = {
  id: string;
  title: string;
  client: string;
  role: string;
  timeline?: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  overview: string;
  sections: { heading: string; body: string[] }[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "healthy-people-2030",
    title: "Shaping the Healthy People 2030 Data Experience",
    client: "U.S. Office of Disease Prevention and Health Promotion (ODPHP)",
    role: "Lead UX Researcher",
    timeline: "2025",
    tags: ["Government", "Public Health", "Generative"],
    image: healthyPeople2030,
    imageAlt: "Healthy People 2030 homepage with the tagline ‘Building a healthier future for all’",
    overview:
      "I led and conducted UX concept testing for the U.S. Office of Disease Prevention and Health Promotion (ODPHP) Healthy People 2030 website, which sets data-driven national objectives to improve health and well-being over the next decade.",
    sections: [
      {
        heading: "Research Objective",
        body: [
          "The main objectives of this research were to get input on whether the subnational data and navigation elements were clear, relevant, and easy to find."
        ]
      },
      {
        heading: "Approach",
        body: [
          "I conducted 9 remote concept testing sessions, where each participant reviewed the wireframes for the subnational data pages. Participants were given different tasks, including using filters, accessing and saving charts, and using an interactive map, and were also asked about their impressions of the navigation, data presentation, and overall layout."
        ]
      },
      {
        heading: "Key Insights",
        body: [
          "1. Most participants successfully navigated to state-level data using the homepage call-to-action or Search and were able to apply filters by year, state, age group, and health conditions.",
          "2. Most participants said the maps, charts, and tables are helpful for spotting trends across states, but wanted more interactivity out of the map.",
          "3. Participants rated their likelihood of using subnational data features as 4 or 5 out of 5, noting relevance for public health planning, teaching, and tracking infrastructure."
        ]
      },
      {
        heading: "Challenges",
        body: [
          "Participants reviewed mostly static wireframes, not a fully designed, working prototype, so there were challenges in understanding the natural workflow and usage of the site since not everything was active and clickable."
        ]
      },
      {
        heading: "Impact & Recommendations",
        body: [
          "Findings from this research helped refine the wireframes and guided the final development of the state data display.",
          "Recommendations included:",
          "1. Simplifying the homepage layout to make state-level data even easier to find.",
          "2. Conducting a more in-depth assessment of the search information architecture and filter interface, since some participants expressed confusion.",
          "3. Investigating whether adding a \"print, save, or share\" button is feasible, desirable, and viable, since some participants expressed wanting to share maps and charts in different formats."
        ]
      }
    ]
  },
  {
    id: "improving-taxpayer-experiences",
    title: "Improving Taxpayer Experiences",
    client: "Internal Revenue Service, Direct File Pilot",
    role: "Lead UX Researcher",
    timeline: "2023–2024",
    tags: ["Government", "Accessibility", "Evaluative"],
    image: directFileHomepage,
    imageAlt: "Screenshot of the IRS Direct File homepage",
    overview:
      "The IRS launched Direct File, a new e-filing system piloted in 2024 for the 2023 tax season (since discontinued). This project focused on evaluating the experience for Spanish-speaking taxpayers, with the goal of identifying usability issues and improving how complex tax concepts were communicated.",
    sections: [
      {
        heading: "My Role",
        body: [
          "UX Researcher (Project Lead). I led the study end-to-end, including: research design and planning, moderator coordination (Spanish-speaking), development of materials (moderator guide, mock data, protocols), participant recruitment oversight, and stakeholder communication and delivery of insights."
        ]
      },
      {
        heading: "The Problem",
        body: [
          "Filing taxes is already complex, and even more so when interfaces are not fully optimized for non-English users, technical tax language is difficult to understand, and users lack clear guidance or progress visibility.",
          "The IRS needed to ensure that Direct File was accessible, intuitive, and trustworthy for Spanish-speaking users."
        ]
      },
      {
        heading: "Approach",
        body: [
          "Methodology: moderated usability testing through 90-minute sessions with Spanish-speaking taxpayers, using scenario-based tasks built on realistic mock tax data.",
          "What we evaluated: the end-to-end filing experience, comprehension of translated tax terminology, points of confusion, hesitation, or drop-off, and overall user confidence and trust in the system."
        ]
      },
      {
        heading: "Key Insights",
        body: [
          "1. Lack of progress visibility increased anxiety. Users were unsure how long the process would take or how far along they were, leading to frustration and uncertainty.",
          "2. No \"Save & Return\" created risk. Participants expressed concern about losing progress, especially given the length and complexity of the process.",
          "3. Complex tax language reduced comprehension. Even when translated, certain tax concepts (e.g., legal status) were unclear or misinterpreted.",
          "4. Users needed contextual help, not just instructions. Participants wanted support in the moment, rather than having to search externally for answers."
        ]
      },
      {
        heading: "Impact & Recommendations",
        body: [
          "Based on research findings, I delivered actionable recommendations that directly informed product improvements: a progress bar to increase transparency and reduce uncertainty; \"Save & Continue\" functionality to support longer sessions and reduce risk; contextual help tooltips and FAQ sections for just-in-time guidance; and refined language around legal status and key tax concepts to improve clarity and comprehension.",
          "These changes improved usability, confidence, and accessibility for a critical user group."
        ]
      },
      {
        heading: "Challenges",
        body: [
          "Ensuring accuracy and clarity in Spanish-language research materials; coordinating across multiple stakeholders and timelines for a high-visibility federal project; and designing realistic mock data that accurately reflected tax scenarios."
        ]
      },
    ]
  },
  {
    id: "fors-marsh-website-usability",
    title: "Sharpening the Fors Marsh Website",
    client: "Fors Marsh",
    role: "UX Researcher & Project Lead",
    timeline: "2023",
    tags: ["Website", "Evaluative"],
    image: forsMarshWebsite,
    imageAlt: "Screenshot of the Fors Marsh website navigation menu",
    imageCaption:
      "The Fors Marsh website as it looks today. The sixth nav item now reads \"Serve\", it used to say \"SERV,\" an internal acronym that confused users in our sessions. The change came directly out of this research.",
    overview:
      "Executed task-based usability testing on the Fors Marsh website to assess how intuitively visitors could navigate, find information, and complete key actions, identifying usability concerns that informed targeted improvements.",
    sections: [
      {
        heading: "My Role",
        body: [
          "UX Researcher. I led the planning and execution of the study, including defining task scenarios, building the moderator guide, conducting sessions, and synthesizing findings into actionable recommendations."
        ]
      },
      {
        heading: "The Problem",
        body: [
          "The Fors Marsh website is the front door for prospective clients, partners, and talent. Stakeholders wanted to understand how intuitive the experience truly was: whether visitors could quickly orient themselves, find what they came for, and form an accurate impression of the company's work."
        ]
      },
      {
        heading: "Approach",
        body: [
          "Methodology: task-based usability testing with 10 participants, 5 on desktop and 5 on mobile, to capture how the experience held up across devices.",
          "Participants represented the site's two primary audiences: prospective employees (job seekers) and prospective clients or partners. Each group received tailored, realistic scenarios/tasks to complete on the site.",
          "What we evaluated: navigation clarity, information findability, content comprehension, and overall confidence in the site experience."
        ]
      },
      {
        heading: "Key Insights",
        body: [
          "1. Jargon-heavy labels eroded trust. Parts of the site were unclear and jargon-heavy, which confused users and made them feel like they were missing something. Several participants flagged the nav label \"SERV\" as an internal acronym, the last thing you want, since it isolates users to the point where they get frustrated and leave. (That label has since been changed to \"Serve\" on the live site as a direct result of this research.)",
          "2. Job seekers found what they needed quickly. On the positive side, job opportunities were easy to find, along with information about the benefits Fors Marsh offers, two of the highest-priority tasks for the prospective-employee audience.",
          "3. Important context was buried. Key information, including team member biographies, was hard to surface. That's a real risk: if users get frustrated enough, they'll exit the site and just go to LinkedIn to look up an employee, taking the relationship off-platform entirely."
        ]
      },
      {
        heading: "Impact & Recommendations",
        body: [
          "As a next step, I led a recommendations workshop using an Impact/Effort matrix with the team that built the website, Creative, developers, members of leadership, and marketing experts. It's not ideal to drop a list of usability issues onto people who have worked so hard on a product, so we worked through the recommendations together to gauge feasibility and weigh impact against effort.",
          "The team implemented several of the recommendations directly and committed to keeping the rest in mind as they continue to iterate on the website."
        ]
      },
      {
        heading: "Challenges",
        body: [
          "Recruitment was uneven. We were only able to recruit 3 prospective clients/partners compared to 7 prospective employees, which skewed the dataset toward the job-seeker audience.",
          "Getting fully honest reactions during sessions was also a challenge since I had to disclose that I work at Fors Marsh. It was a useful reminder of how much insider proximity can shape what users feel comfortable saying out loud."
        ]
      }
    ]
  }
];

export default function CaseStudies() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-accent selection:text-white">
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link href="/" className="text-lg font-serif font-medium hover:text-accent transition-colors">
            Sara Mannan
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={STAGGER}
          className="mb-16"
        >
          <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="text-accent font-medium tracking-wide uppercase text-sm">Case Studies</span>
          </motion.div>
          <motion.h1 variants={FADE_UP} className="text-4xl md:text-5xl font-serif font-medium mb-4">
            Selected Work in Depth
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A closer look at the research projects shaping how I think about people, products, and the systems they live within.
          </motion.p>
        </motion.div>

        <div className="space-y-32">
          {CASE_STUDIES.map((cs) => (
            <motion.article
              key={cs.id}
              id={cs.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
              className="scroll-mt-24"
            >
              <motion.div variants={FADE_UP} className="flex flex-wrap gap-3 mb-6">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium border border-border px-3 py-1 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-serif font-medium mb-4">
                {cs.title}
              </motion.h2>

              <motion.p variants={FADE_UP} className="text-lg text-muted-foreground leading-relaxed mb-10">
                {cs.overview}
              </motion.p>

              {cs.image && (
                <motion.figure variants={FADE_UP} className="mb-12">
                  <div className="overflow-hidden bg-muted border border-black">
                    <img src={cs.image} alt={cs.imageAlt ?? ""} className="w-full h-auto block" />
                  </div>
                  {cs.imageCaption && (
                    <figcaption className="mt-3 text-sm text-muted-foreground italic leading-relaxed">
                      {cs.imageCaption}
                    </figcaption>
                  )}
                </motion.figure>
              )}

              <motion.dl
                variants={FADE_UP}
                className={`grid gap-6 mb-16 pb-12 border-b border-border ${
                  cs.timeline ? "sm:grid-cols-3" : "sm:grid-cols-2"
                }`}
              >
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Client</dt>
                  <dd className="text-sm font-medium">{cs.client}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Role</dt>
                  <dd className="text-sm font-medium">{cs.role}</dd>
                </div>
                {cs.timeline && (
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Timeline</dt>
                    <dd className="text-sm font-medium">{cs.timeline}</dd>
                  </div>
                )}
              </motion.dl>

              <div className="space-y-12">
                {cs.sections.map((section) => (
                  <motion.div key={section.heading} variants={FADE_UP}>
                    <h3 className="text-2xl font-serif font-medium mb-4">{section.heading}</h3>
                    <div className="space-y-4">
                      {section.body.map((para, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-base text-muted-foreground italic">Additional work available upon request.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-base font-medium text-primary hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
        </div>
      </main>

      <footer className="py-8 px-6 md:px-12 border-t border-border bg-background flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Sara Mannan. All rights reserved.</p>
        <p className="text-sm text-muted-foreground">Designed with intent.</p>
      </footer>
    </div>
  );
}
