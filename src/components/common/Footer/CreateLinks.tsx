import Link from "next/link";
import { FC } from "react";

interface CreateLinksProps {
  title: string;
  links: Array<{ name: string; href: string }>;
  isLink?: boolean;
}

const CreateLinks: FC<CreateLinksProps> = ({ title, links, isLink = true }) => {
  
  const CreateAsLink = links.map((link, index: number) => (
    <Link key={index} href={link.href} className="hover:text-white">
      {link.name}
    </Link>
  ));

  const CreateAsSpan = links.map((link, index: number) => (
    <span key={index} className="max-sm:text-center">{link.name}</span>
  ));

  return (
    <div className="flex flex-col justify-end max-md:items-center items-start h-fit">
      <h1 className="font-Peyda-500 text-xl mb-[20px]">{title}</h1>
      <div className="flex flex-col gap-y-4 max-md:items-center text-[#AAAAAA] font-Peyda-400">
        {isLink ? CreateAsLink : CreateAsSpan}
      </div>
    </div>
  );
};

export default CreateLinks;
