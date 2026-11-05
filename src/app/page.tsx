
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Leaf,
  Menu,
  MoveUpRight,
  Sparkles,
  Star,
} from "lucide-react";

const products = [
  {
    number: "01",
    name: "Nespresso Compatible Pods",
    category: "COFFEE CAPSULES",
    description: "Exceptional coffee. Effortlessly prepared.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=900&q=85",
  },
  {
    number: "02",
    name: "Specialty Coffee",
    category: "FRESHLY ROASTED",
    description: "Discover the character of carefully selected beans.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=85",
  },
  {
    number: "03",
    name: "Gourmet Roastery",
    category: "ARTISAN ROASTING",
    description: "A deeper appreciation of every single roast.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85",
  },
];

const services = [
  ["01", "Gourmet Roastery", "Precision roasting. Exceptional flavour."],
  ["02", "Barista Course", "Learn the craft behind every perfect cup."],
  ["03", "Café Operations", "Building memorable coffee experiences."],
  ["04", "Specialty Coffee", "Curated beans with distinctive character."],
];

const values = [
  {
    icon: Coffee,
    title: "Quality Without Compromise",
    text: "Every detail matters, from carefully selected beans to the final cup.",
  },
  {
    icon: Leaf,
    title: "Conscious Craft",
    text: "A thoughtful approach to coffee, people and the planet.",
  },
  {
    icon: Sparkles,
    title: "A Culture of Excellence",
    text: "We believe exceptional coffee should always feel extraordinary.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  // LENIS SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      anchors: true,
    });

    let frame = 0;

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  // LUXURY GREEN CURSOR
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const moveCursor = (event: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--cursor-y",
        `${event.clientY}px`
      );
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <main>
      <div className="cursor-glow" />

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="brand" aria-label="Kohi Coffees Home">
          <img
            src="https://kohicoffees.com/wp-content/uploads/2026/05/Kohi-Coffees.png"
            alt="Kohi Coffees"
            style={{
              display: "block",
              width: "110px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </a>

        <div className="nav-links">
          <a href="#about">Our Story</a>
          <a href="#products">Coffee</a>
          <a href="#services">What We Do</a>
          <a href="#locations">Locations</a>
        </div>

        <a href="#contact" className="nav-cta">
          LET&apos;S TALK <ArrowUpRight size={15} />
        </a>

        <a href="#contact" className="mobile-menu" aria-label="Contact">
          <Menu size={23} />
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-image" />

        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="eyebrow hero-eyebrow"
          >
            <span /> THE ART OF EXCEPTIONAL COFFEE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            More than
            <br />
            just a <i>coffee.</i>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A passion for exceptional coffee.
            <br />
            A culture built around extraordinary experiences.
          </motion.p>

          <motion.a
            href="#about"
            className="hero-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            DISCOVER KOHI <ArrowUpRight size={17} />
          </motion.a>
        </div>

        <div className="hero-bottom">
          <span>CRAFTED WITH PURPOSE · SERVED WITH PASSION</span>
          <a href="#welcome">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
          <span>EST. WITH A LOVE FOR COFFEE</span>
        </div>

        <div className="hero-index">01 — 04</div>
      </section>

      {/* INTRODUCTION */}
      <section className="welcome section-pad" id="welcome">
        <Reveal>
          <div className="eyebrow dark-eyebrow">
            <span /> WELCOME TO KOHI COFFEES
          </div>
          <h2>
            Where every cup
            <br />
            tells a <i>story.</i>
          </h2>
        </Reveal>

        <div className="welcome-bottom">
          <p>
            Coffee is more than a daily ritual. It is a moment to pause, a
            reason to connect and an experience worth remembering. At Kohi,
            we bring all three together.
          </p>
          <a href="#about" className="text-link">
            GET TO KNOW US <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section-pad" id="about">
        <Reveal className="about-copy">
          <div className="eyebrow">
            <span /> OUR PHILOSOPHY
          </div>
          <h2>
            Rooted in
            <br />
            passion.
            <br />
            Driven by <i>coffee.</i>
          </h2>
          <p>
            Kohi Coffees is built around a simple belief: great coffee brings
            people together. From carefully sourced beans to thoughtfully
            crafted experiences, we celebrate the art, science and culture of
            coffee.
          </p>
          <a href="#mission" className="light-link">
            OUR STORY <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal className="about-visual">
          <div className="about-photo" />
          <div className="photo-caption">
            <span>THE PERFECT MOMENT</span>
            <span>KOHI COFFEES · 01</span>
          </div>
          <div className="round-stamp">
            <span>MADE FOR</span>
            <strong>COFFEE</strong>
            <span>LOVERS</span>
          </div>
        </Reveal>
      </section>

      {/* MISSION */}
      <section className="mission section-pad" id="mission">
        <Reveal>
          <div className="eyebrow dark-eyebrow">
            <span /> OUR MISSION
          </div>
          <h2>
            To make every coffee
            <br />
            moment <i>meaningful.</i>
          </h2>
          <p>
            We aim to elevate the coffee experience through quality,
            knowledge, innovation and a genuine commitment to the people
            behind every cup.
          </p>
        </Reveal>
      </section>

      {/* VALUES */}
      <section className="values section-pad">
        <Reveal className="section-heading">
          <div>
            <div className="eyebrow dark-eyebrow">
              <span /> WHAT WE BELIEVE IN
            </div>
            <h2>Our core <i>values.</i></h2>
          </div>
          <p>Good coffee begins with good intentions.</p>
        </Reveal>

        <div className="value-grid">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} className="value-card">
                <Icon size={27} strokeWidth={1.3} />
                <span className="value-line" />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products section-pad" id="products">
        <Reveal className="section-heading">
          <div>
            <div className="eyebrow">
              <span /> THE KOHI COLLECTION
            </div>
            <h2>
              A world of
              <br />
              <i>better coffee.</i>
            </h2>
          </div>
          <p>
            Discover carefully curated coffee experiences, created for those
            who appreciate the finer details.
          </p>
        </Reveal>

        <div className="product-grid">
          {products.map((product) => (
            <Reveal key={product.number} className="product-card">
              <div
                className="product-image"
                style={{ backgroundImage: `url("${product.image}")` }}
              >
                <span className="product-number">{product.number}</span>
                <a href="#contact" className="product-arrow">
                  <ArrowUpRight size={20} />
                </a>
              </div>
              <div className="product-info">
                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="sustainability section-pad">
        <Reveal className="sustain-image">
          <div className="sustain-photo" />
          <span>BETTER CHOICES. BETTER TOMORROWS.</span>
        </Reveal>

        <Reveal className="sustain-copy">
          <div className="eyebrow">
            <span /> OUR RESPONSIBILITY
          </div>
          <h2>
            Good coffee.
            <br />
            <i>Better future.</i>
          </h2>
          <p>
            We believe the future of coffee should be as thoughtful as its
            flavour. Sustainability is an important part of how we think,
            source and grow.
          </p>
          <a href="#contact" className="light-link">
            EXPLORE OUR APPROACH <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="services section-pad" id="services">
        <Reveal>
          <div className="eyebrow dark-eyebrow">
            <span /> BEYOND THE CUP
          </div>
          <h2>
            What we <i>do.</i>
          </h2>
          <p className="services-intro">
            More than coffee products. We help shape the complete coffee
            experience.
          </p>
        </Reveal>

        <div className="service-list">
          {services.map(([number, title, description]) => (
            <a href="#contact" className="service-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience section-pad">
        <div className="experience-image" />
        <div className="experience-overlay" />
        <Reveal className="experience-content">
          <div className="eyebrow">
            <span /> THE KOHI EXPERIENCE
          </div>
          <h2>
            Find your
            <br />
            perfect <i>pour.</i>
          </h2>
          <p>
            From the first aroma to the last sip, discover coffee made to be
            experienced.
          </p>
          <a href="#products" className="hero-button">
            EXPLORE COFFEE <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </section>

      {/* REVIEWS */}
      <section className="reviews section-pad">
        <Reveal>
          <div className="eyebrow dark-eyebrow">
            <span /> WORDS THAT MATTER
          </div>
          <div className="review-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={15} fill="currentColor" />
            ))}
          </div>
          <h2>
            Great coffee is
            <br />
            always worth <i>sharing.</i>
          </h2>
          <p>
            Every experience, every conversation and every cup inspires us to
            keep doing what we love.
          </p>
          <span className="review-note">OUR COMMUNITY · YOUR EXPERIENCE</span>
        </Reveal>
      </section>

      {/* LOCATIONS */}
      <section className="locations section-pad" id="locations">
        <Reveal className="location-content">
          <div className="eyebrow">
            <span /> FIND YOUR KOHI
          </div>
          <h2>
            Coffee brings
            <br />
            us <i>together.</i>
          </h2>
          <p>
            Discover the Kohi experience. Get in touch with our team for
            location and café information.
          </p>
          <a href="#contact" className="hero-button">
            EXPLORE LOCATIONS <ArrowUpRight size={17} />
          </a>
        </Reveal>
        <div className="location-image" />
      </section>

      {/* FRANCHISE */}
      <section className="franchise section-pad">
        <Reveal>
          <div className="eyebrow dark-eyebrow">
            <span /> GROW WITH KOHI
          </div>
          <h2>
            Have a taste
            <br />
            for <i>greatness?</i>
          </h2>
          <p>
            Let&apos;s bring exceptional coffee experiences to more people.
            Explore opportunities to grow with Kohi Coffees.
          </p>
          <a href="#contact" className="brown-button">
            FRANCHISE ENQUIRIES <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="footer section-pad" id="contact">
        <div className="footer-top">
          <div>
            <a
              href="#home"
              className="brand footer-brand"
              aria-label="Kohi Coffees Home"
            >
              <img
                src="https://kohicoffees.com/wp-content/uploads/2026/05/Kohi-Coffees.png"
                alt="Kohi Coffees"
                style={{
                  display: "block",
                  width: "125px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </a>
            <p>
              Exceptional coffee.
              <br />
              Meaningful connections.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>EXPLORE</span>
              <a href="#about">Our Story</a>
              <a href="#products">Our Coffee</a>
              <a href="#services">What We Do</a>
              <a href="#locations">Locations</a>
            </div>
            <div>
              <span>CONNECT</span>
              <a href="mailto:hello@kohicoffees.com">Email Us</a>
              <a href="#contact">Franchise</a>
              <a href="#contact">Get In Touch</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 KOHI COFFEES. ALL RIGHTS RESERVED.</span>
          <span>CRAFTED WITH A LOVE FOR COFFEE.</span>
          <a href="#home">
            BACK TO TOP <MoveUpRight size={14} />
          </a>
        </div>
      </footer>
    </main>
  );
}
