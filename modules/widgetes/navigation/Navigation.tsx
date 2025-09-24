import Link from "next/link";

export function Navigation() {
    const navItems = [
        {
            label: "Home",
            href: "/home",
        },
        {
            label: "Posts",
            href: "/posts",
        },
        {
            label: "Users",
            href: "/users",
        },
        {
            label: "Dashboard",
            href: "/dashboard",
        },
    ];
    return (
        <div className="flex items-center justify-end gap-7 mr-5">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="text-primary hover:text-blue-600 transition-colors"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
}
