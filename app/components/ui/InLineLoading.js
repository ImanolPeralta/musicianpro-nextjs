import LogoMusicianPro from "../../icons/Logo";
import { MonteCarlo } from "next/font/google";

const montecarlo = MonteCarlo({
  weight: "400",
  subsets: ["latin"],
});

export default function InlineLoading() {
  return (
    <div className="flex flex-col justify-center items-center py-6">
      <LogoMusicianPro className="mb-2 text-[#8B2C2C]" width={40} height={40} />
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-[#8B2C2C] border-opacity-30 mb-2" />
      <h2
        className={`text-lg font-bold text-[#8B2C2C] ${montecarlo.className}`}
      >
        MusicianPro
      </h2>
      <p className="text-sm text-[#1C1C1C] mt-1">Creando producto...</p>
    </div>
  );
}
