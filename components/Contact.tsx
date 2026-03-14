import React from "react";
import SectionWrapper from "./SectionWrapper";
import AnimatedItem from "./AnimatedItem";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-32 flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-3xl px-6">

        <AnimatedItem animationType="fade-in" delay={0}>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Let's Work Together
          </h2>
        </AnimatedItem>

        <AnimatedItem animationType="fade-in" delay={100}>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            If you have a project idea, collaboration, or opportunity,
            feel free to reach out. I'm always excited to work on
            meaningful and innovative projects.
          </p>
        </AnimatedItem>

        {/* Contact Info */}
        <AnimatedItem animationType="slide-up" delay={200}>
          <div className="space-y-6 text-xl">

            <p className="text-white">
              📞 <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:7736415612"
                className="text-accent-light hover:underline"
              >
                +91  7736415612
              </a>
            </p>

            <p className="text-white">
              ✉️ <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:archanarajvk123@gmail.com"
                className="text-accent-light hover:underline"
              >
                archanarajvk123@gmail.com
              </a>
            </p>

          </div>
        </AnimatedItem>

      </div>
    </section>
  );
};

export default Contact;