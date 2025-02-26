import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Terminal, Cpu } from "lucide-react";
import "./Home.css";

// Feature Section Component
function FeatureSection({ icon: Icon, title, description, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="feature-card"
    >
      <Icon className="feature-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

// Home Page Component
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1 className="gradient-text">Automata & Language Visualizer</h1>
        <p>Explore the world of automata, regular expressions, and Turing machines with our interactive tools.</p>
        <div className="hero-buttons">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </section>

      {/* Terminal Animation */}
      <div className="terminal">
        <div className="terminal-header">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="terminal-content">
          <p className="command">$ automata --visualize</p>
          <p className="output">Loading automata visualizer...</p>
          <p className="output">Ready to explore!</p>
          <div className="cursor"></div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="features">
        <FeatureSection
          icon={Code2}
          title="Automata Builder"
          description="Build and simulate finite automata with an intuitive drag-and-drop interface."
          index={0}
        />
        <FeatureSection
          icon={Terminal}
          title="Regex Tester"
          description="Test and visualize regular expressions with real-time feedback."
          index={1}
        />
        <FeatureSection
          icon={Cpu}
          title="Turing Machine Simulator"
          description="Simulate Turing machines step-by-step with a customizable tape."
          index={2}
        />
      </section>

      

    </div>
  );
};

export default Home;