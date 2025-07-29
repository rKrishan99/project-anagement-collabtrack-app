import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items bg-background  min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Welcome to CollabTrack</h1>
      <p className="text-lg text-center">
        A collaborative platform for tracking projects and tasks.
      </p>
    </div>
  );
}
