interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  variant: "mobile" | "tablet" | "desktop";
}

export default function PageHeader({ title, subtitle, image, variant }: PageHeaderProps) {
  const getMaxWidth = () => {
    if (variant === "mobile") return "w-full";
    if (variant === "tablet") return "max-w-[1120px]";
    if (variant === "desktop") return subtitle ? "max-w-[1120px]" : "max-w-[960px]";
    return "max-w-[1120px]";
  };

  const variants = {
    mobile: {
      container: "min-h-[237px]",
      padding: "px-[16px] py-[64px]",
      titleSize: "text-[32px]",
      subtitleSize: "text-[24px]",
      gap: "gap-[16px]",
      overlay: "bg-[rgba(4,18,3,0.6)]",
    },
    tablet: {
      container: "min-h-[217px]",
      padding: "p-[64px]",
      titleSize: "text-[32px]",
      subtitleSize: "text-[24px]",
      gap: "gap-[24px]",
      overlay: "bg-[rgba(4,18,3,0.6)]",
    },
    desktop: {
      container: "min-h-[274px]",
      padding: "p-[80px]",
      titleSize: "text-[48px]",
      subtitleSize: "text-[32px]",
      gap: "gap-[24px]",
      overlay: "bg-[rgba(4,18,3,0.65)]",
    },
  };

  const styles = variants[variant];
  const maxWidth = getMaxWidth();

  return (
    <div className={`${styles.container} relative shrink-0 w-full`} data-name="navhero page">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={image} />
        <div className={`absolute ${styles.overlay} inset-0`} />
      </div>
      <div className="flex flex-col items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className={`content-stretch flex flex-col items-center justify-center min-h-[inherit] ${styles.padding} relative w-full`}>
          <div className={`content-stretch flex flex-col ${styles.gap} items-center ${maxWidth} relative shrink-0 w-full text-center`} data-name="max w">
            <p className={`[text-shadow:rgba(0,0,0,0.35)_2px_2px_7px] font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.15] relative shrink-0 text-[#f6eee5] ${styles.titleSize} text-center text-nowrap whitespace-pre`}>
              {title}
            </p>
            {subtitle && (
              <h3 className={`block font-['EB_Garamond:Regular',sans-serif] font-normal ${variant === "desktop" ? "leading-[1.15]" : "leading-[1.18]"} min-w-full relative shrink-0 ${styles.subtitleSize} text-white w-[min-content]`}>
                {subtitle}
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
