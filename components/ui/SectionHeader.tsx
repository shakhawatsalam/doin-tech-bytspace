interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  size?: "default" | "small";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
  size = "default",
}: SectionHeaderProps) {
  const titleClasses =
    size === "small"
      ? "text-[30px] leading-[1.1] tracking-[-0.025em]"
      : "text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[56px]";

  return (
    <div className={`mx-auto max-w-[760px] text-center ${className}`}>
      {eyebrow && (
        <p className='mb-4 font-poppins text-sm font-medium text-brand-blue'>
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-poppins font-medium text-brand-dark ${titleClasses}`}>
        {title}
      </h2>

      {description && (
        <p className='mx-auto mt-5 max-w-[760px] font-sans text-[15px] leading-6 text-[#858585]'>
          {description}
        </p>
      )}
    </div>
  );
}
