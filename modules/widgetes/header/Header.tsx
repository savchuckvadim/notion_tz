'use client'

import { ThemeToggler } from "@/modules/shared/theme"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Header() {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    return <div
        className={'sticky top-0 left-0  w-full  bg-background z-50'}
    >
        <header>
            <div className="w-full  mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Логотип */}
                    <div className="flex items-center space-x-3">

                        <Link
                            href="/home"
                            className="text-xl font-semibold text-primary-foreground hover:text-blue-600 transition-colors"
                        >
                            Notion
                        </Link>

                    </div>

                    {/* Навигация */}
                    {/* <NavMenu /> */}
                    <div className="flex items-center space-x-2">
                        {isClient && <ThemeToggler />}
                    </div>
                </div>

            </div>

        </header>

    </div>

}