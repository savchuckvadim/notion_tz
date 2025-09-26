import { cn } from "../../shadcn/lib/utils";

export function PageDescription({
    description,
    children,
    size
}: { description?: string, children?: React.ReactNode, size?: "sm" | "md" | "lg" | "xs" }) {
    return (<>
        {description && <p className={
            cn(
                "font-mono list-inside list-decimal text-center",
                `text-${size}`
            )}>
            {description}

        </p>
        }
        {children && children}
    </>);
}
