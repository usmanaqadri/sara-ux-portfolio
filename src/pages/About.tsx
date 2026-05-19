import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
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

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <motion.div initial="hidden" animate="visible" variants={STAGGER}>
          <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="text-accent font-medium tracking-wide uppercase text-sm">About</span>
          </motion.div>

          <motion.h1
            variants={FADE_UP}
            className="text-3xl md:text-4xl font-serif font-medium text-primary mb-8"
          >
            About Me
          </motion.h1>

          <motion.div variants={FADE_UP} className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I help teams build products people actually want to use, across public health, government, and digital. My work involves listening carefully to the user, asking the right questions, and translating what I hear into recommendations that move products forward.
            </p>
            <p>
              I recently graduated from a 6-month pastry school program, which has been one of the most clarifying things I've done for my life and my work. Pastry is precision, iteration, patience, and craft, exactly the qualities good research demands.
            </p>
            <p>
              At work, I'm interested in how to create digital experiences that are impactful, intuitive, and memorable. Offline, you can find me chasing my toddler around or frosting a cake.
            </p>
          </motion.div>

          <motion.div variants={FADE_UP} className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="mailto:sara.mannan5@gmail.com"
              className="inline-flex items-center gap-2 text-base font-medium border-b-2 border-accent pb-1 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" /> Get in touch
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

        <div className="pt-16 border-t border-border mt-16">
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
