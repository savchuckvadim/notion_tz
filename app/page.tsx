import { appData } from "@/data";
import Image from "next/image";
import Link from "next/link";

// SSG - статическая генерация на build
export default function StartPage() {
    return (
        <div className="bg-background/60  font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[94vh] p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="text-2xl font-bold text-foreground">Notion</h1>
                <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">

                    {appData.items.map((item) => (
                        <li className="mb-2 tracking-[-.01em]" key={item.link}>
                            <Link href={item.link}>
                                {item.title} - {item.type} - {item.taskDiscription}
                            </Link>
                        </li>
                    ))}
                </ol>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                        href="/home"

                     
                    >
                        <Image
                            className="dark:invert"
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={20}
                            height={20}
                        />
                        Start
                    </a>
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"

                        href={appData.general.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read our docs
                    </a>
                </div>
            </main>

        </div>
    );

}
