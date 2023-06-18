"use client";

import Link from "next/link";
import { CraftCard } from "@/components";
import { useAppSelector } from "@/hooks";

export default function Home() {
  const { crafts } = useAppSelector((state) => state.craft);

  return (
    <main>
      <div className="flex">
        {crafts.map((craft) => (
          <Link href={`/craft/${craft._id}`} key={craft._id}>
            <CraftCard craft={craft} />
          </Link>
        ))}
      </div>
    </main>
  );
}
