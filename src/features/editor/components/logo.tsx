import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="size-8 relative mt-auto shrink-0">
        <Image
          src="/ugo.png"
          width={100}
          height={200}
          alt="The Canvas"
          className="shrink-0 hover:opacity-75 transition"
        />
      </div>
    </Link>
  );
};
