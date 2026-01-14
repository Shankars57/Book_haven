import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import useAuthStore from "../store/useAuthStore";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Hero() {
  const { token } = useAuthStore();
  return (
    <section
      className="relative overflow-hidden
     bg-gradient-to-br from-secondary 
     via-card to-muted "
    >
      <div
        className="absolute inset-0 opacity-5
       pointer-events-none"
      >
        <div
          className="absolute
         top-10 left-10 w-64 h-64
          bg-red-700 
         rounded-full blur-xl"
        />
        <div
          className="absolute 
        bottom-10 right-10 w-96 h-96 bg-red-600
         rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32">
        <motion.div
          className="max-w-3xl space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center
             gap-2 px-4 py-2 bg-red-100/10
              rounded-full
             shadow-xs 
            "
          >
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Welcome to The Book Haven
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brown-600 leading-tight"
          >
            Discover Your Next
            <span className="text-red-900"> Literary Adventure</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground font-accent max-w-2xl leading-relaxed"
          >
            Explore our curated collection of timeless classics and contemporary
            masterpieces. Every book tells a story waiting to be discovered.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href="#featured"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center
               gap-2 px-6 py-3 rounded-md bg-primary
               text-primary-foreground font-medium bg-red-900 text-white flex items-center justify-center hover:gap-3"
            >
              Browse Collection
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={`${!token ? "/auth" : ''}`}
                className="inline-flex items-center px-6 py-3 rounded-md border border-border font-medium"
              >
                Create Account
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}

export default Hero;
