"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] w-[420px] items-center justify-center text-cyan-300">
      Loading...
    </div>
  ),
});

export default function EarthGlobe() {
  return (
    <div className="h-[420px] w-[420px] sm:h-[500px] sm:w-[500px]">
      <Globe
        width={500}
        height={500}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      />
    </div>
  );
}