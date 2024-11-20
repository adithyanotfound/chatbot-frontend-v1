import { useTheme } from "next-themes";

import { MagicCard } from "@/components/ui/magic-card";

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "	#f5f5f5" : "#D9D9D955"}
      >
        
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "	#f5f5f5" : "#D9D9D955"}
      >
        
      </MagicCard>
    </div>
  );
}
