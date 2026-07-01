"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[500px] w-[500px] items-center justify-center">
      Loading...
    </div>
  ),
});

export default function EarthGlobe() {
  return (
    <div className="h-[500px] w-[500px]">
      <Globe
        width={500}
        height={500}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      />
    </div>
  );
}