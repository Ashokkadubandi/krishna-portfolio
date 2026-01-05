import { useEffect, useRef, useState } from "react";

function SkillCard({ skill }) {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="
        relative
        bg-blue-700
        text-white
        p-6
        rounded-lg
        flex
        flex-col
        items-center
        justify-center
        text-center
        overflow-hidden
        group
        min-h-[200px]
        w-full
      "
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-16 h-16 mb-3"
      />

      <h3 className="text-xl font-semibold mb-2">
        {skill.name}
      </h3>

      <p
        className={`
          text-sm
          transition-opacity duration-1000
          md:opacity-0 md:group-hover:opacity-100
          ${inView ? "opacity-100" : "opacity-0"}
        `}
      >
        {skill.description}
      </p>
    </div>
  );
}

export default SkillCard;
