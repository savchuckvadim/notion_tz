import { appData } from "@/data";
import Link from "next/link";

export function Navigation() {

    return (
        <div className="flex items-center justify-end gap-7 mr-5">
            {appData.items.map((item) => (
                <Link
                    key={item.link}
                    href={item.link}
                    className="text-primary hover:text-blue-600 transition-colors"
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
}
