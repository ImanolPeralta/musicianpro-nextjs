import LogoMusicianPro from "./icons/Logo";
import { MonteCarlo } from "next/font/google";

const montecarlo = MonteCarlo({
  weight: '400',
  subsets: ['latin'],
});

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F5EFE6]">
      <LogoMusicianPro className="mb-4 text-[#8B2C2C]" width={80} height={80} />
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#8B2C2C] border-opacity-30 mb-4" />
      <h2 className={`text-2xl font-bold text-[#8B2C2C] ${montecarlo.className}`}>MusicianPro</h2>
      <p className="text-sm text-[#1C1C1C] mt-2">Cargando...</p>
    </div>
  );
}