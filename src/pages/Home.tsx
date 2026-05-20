import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import directFileHomepage from "@/assets/direct-file-homepage.png";
import forsMarshWebsite from "@/assets/fors-marsh-website-home.png";
import healthyPeople2030 from "@/assets/healthy-people-2030.png";
import saraPortrait from "@/assets/sara-portrait.jpeg";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border/40">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-baseline gap-3 hover:text-accent transition-colors group"
        >
          <span className="font-serif font-medium text-2xl tracking-tight">Sara Mannan</span>
          <span className="hidden sm:inline text-xs font-medium tracking-widest uppercase text-muted-foreground group-hover:text-accent transition-colors">UX Researcher & Strategist</span>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <button
            onClick={() => scrollTo("case-studies")}
            className={`transition-colors hover:text-accent ${
              activeSection === "case-studies" ? "text-accent" : ""
            }`}
          >
            selected work
          </button>
          <Link
            href="/about"
            className="transition-colors hover:text-accent"
          >
            about
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            resume
          </a>
          <button
            onClick={() => scrollTo("about")}
            className={`transition-colors hover:text-accent ${
              activeSection === "about" ? "text-accent" : ""
            }`}
          >
            work with me
          </button>
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-200 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-200 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[73px] left-0 right-0 z-40 bg-background border-b border-border shadow-sm px-6 py-6 flex flex-col gap-5 text-sm font-medium text-muted-foreground">
          <button
            onClick={() => scrollTo("case-studies")}
            className="text-left hover:text-accent transition-colors"
          >
            selected work
          </button>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">
            about
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-accent transition-colors"
          >
            resume
          </a>
          <button
            onClick={() => scrollTo("about")}
            className="text-left hover:text-accent transition-colors"
          >
            work with me
          </button>
        </div>
      )}

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            <motion.div
              className="md:col-span-8 z-10"
              initial="hidden"
              animate="visible"
              variants={STAGGER}
            >
              <motion.h1
                variants={FADE_UP}
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-[1.1] tracking-tight mb-8 text-primary"
              >
                Turning <span className="text-muted-foreground italic">complexity</span><br /> into clarity.
              </motion.h1>
              <motion.p
                variants={FADE_UP}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
              >
                I translate user behavior and complex data into human-centered insights that drive better digital experiences.
              </motion.p>
              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("case-studies")}
                  className="bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  View Selected Work <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo("about")}
                  className="bg-transparent text-primary border border-border px-8 py-4 text-sm font-medium hover:border-primary transition-colors"
                >
                  About Me
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:col-span-4 relative w-2/3 mx-auto md:w-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted border border-black rounded-t-full">
                <img
                  src={saraPortrait}
                  alt="Sara Mannan"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="case-studies" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-accent"></div>
                <span className="text-accent font-medium tracking-wide uppercase text-sm">Selected Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium">Case Studies</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              A selection of foundational research projects that fundamentally shifted product strategy.
            </p>
          </motion.div>

          <div className="space-y-32">
            {/* Case Study: Healthy People 2030 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
              className="grid md:grid-cols-12 gap-12 md:gap-20 items-center"
            >
              <motion.div variants={FADE_UP} className="md:col-span-7 order-2 md:order-1">
                <div className="aspect-[4/3] overflow-hidden bg-muted relative group cursor-pointer border border-black">
                  <img
                    src={healthyPeople2030}
                    alt="Healthy People 2030 homepage with the tagline ‘Building a healthier future for all’"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div variants={FADE_UP} className="md:col-span-5 order-1 md:order-2">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="text-xs font-medium border border-border px-3 py-1 text-muted-foreground">Government</span>
                  <span className="text-xs font-medium border border-border px-3 py-1 text-muted-foreground">Public Health</span>
                  <span className="text-xs font-medium border border-border px-3 py-1 text-muted-foreground">Generative</span>
                </div>
                <h3 className="text-3xl font-serif font-medium mb-4">Shaping the Healthy People 2030 Data Experience</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Led UX concept testing for the U.S. Office of Disease Prevention and Health Promotion (ODPHP) Healthy People 2030 website, gathering input on whether subnational data and navigation elements were clear, relevant, and easy to find.
                </p>
                <Link
                  href="/case-studies#healthy-people-2030"
                  className="text-primary font-medium inline-flex items-center gap-2 hover:text-accent transition-colors group"
                >
                  View full process <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Case Study: Improving Taxpayer Experiences */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
              className="grid md:grid-cols-12 gap-12 md:gap-20 items-center"
            >
              <motion.div variants={FADE_UP} className="md:col-span-5">
                <div className="flex gap-3 mb-6">
                  <span className="text-xs font-medium border border-border px-3 py-1 text-muted-foreground">Government</span>
                  <span className="text-xs font-medium border border-border px-3 py-1 text-muted-foreground">Accessibility</span>
                </div>
                <h3 className="text-3xl font-serif font-medium mb-4">Improving Taxpayer Experiences</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Led UX research for the Internal Revenue Service Direct File pilot, evaluating the e-filing experience for Spanish-speaking taxpayers during its 2023 rollout.
                </p>
                <Link
                  href="/case-studies#improving-taxpayer-experiences"
                  className="text-primary font-medium inline-flex items-center gap-2 hover:text-accent transition-colors group"
                >
                  View full process <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div variants={FADE_UP} className="md:col-span-7">
                <div className="aspect-[4/3] overflow-hidden bg-muted relative group cursor-pointer border border-black">
                  <img
                    src={directFileHomepage}
                    alt="Screenshot of the IRS Direct File homepage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Case Study: Fors Marsh Website Usability */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
              className="grid md:grid-cols-12 gap-12 md:gap-20 items-center"
            >
              <motion.div variants={FADE_UP} className="md:col-span-7 order-2 md:order-1">
                <div className="aspect-[3/2] overflow-hidden bg-muted relative group cursor-pointer border border-black">
                  <img
                    src={forsMarshWebsite}
                    alt="Fors Marsh website navigation menu showing About Us, Our Work, Our Approach, Join Us, Learn, and Serve"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div variants={FADE_UP} className="md:col-span-5 order-1 md:order-2">
                <div className="flex gap-3 mb-6">
                  <span className="text-xs font-medium border border-border px-3 py-1 text-muted-foreground">Website</span>
                  <span className="text-xs font-medium border border-border px-3 py-1 text-muted-foreground">Evaluative</span>
                </div>
                <h3 className="text-3xl font-serif font-medium mb-4">Sharpening the Fors Marsh Website</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Executed task-based usability testing on the Fors Marsh website to evaluate how intuitively visitors could navigate, find information, and complete key actions, surfacing usability concerns that informed targeted improvements to the site experience.
                </p>
                <Link
                  href="/case-studies#fors-marsh-website-usability"
                  className="text-primary font-medium inline-flex items-center gap-2 hover:text-accent transition-colors group"
                >
                  View full process <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-32 px-6 md:px-12 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
              className="space-y-8"
            >
              <div>
                <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-accent"></div>
                  <span className="text-accent font-medium tracking-wide uppercase text-sm">About</span>
                </motion.div>
                <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-serif font-medium">
                  Nice to meet you.
                </motion.h2>
              </div>
              <motion.p variants={FADE_UP} className="text-lg text-muted-foreground leading-relaxed">
                I'm Sara, a UX researcher and strategist with 7+ years of experience helping teams build products people actually want to use. I've worked across public health, government, and digital products, conducting hundreds of user interviews and turning complex behavioral data into clear, actionable insights.
              </motion.p>
              <motion.p variants={FADE_UP} className="text-lg text-muted-foreground leading-relaxed">
                Recently, I graduated from a 6-month pastry program, where I combined a long-standing love of pastry and desserts with a focus on iteration, precision, and craft, an approach I now bring into my research and problem-solving.
              </motion.p>
              <motion.div variants={FADE_UP} className="pt-2 flex flex-wrap items-center gap-6">
                <a
                  href="mailto:sara.mannan5@gmail.com"
                  className="inline-flex items-center gap-2 text-base font-medium border-b-2 border-accent pb-1 hover:text-accent transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Get in touch
                </a>
                <a
                  href="https://www.linkedin.com/in/sara-mannan-a13722124/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-medium bg-[#0A66C2] text-white px-4 py-2 rounded hover:bg-[#004182] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect with me
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-border bg-background flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Sara Mannan. All rights reserved.</p>
        <p className="text-sm text-muted-foreground">Designed with intent.</p>
      </footer>
    </div>
  );
}
