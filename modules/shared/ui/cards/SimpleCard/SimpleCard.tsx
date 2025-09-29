'use client';

import { Card, CardHeader } from '@/modules/shared/shadcn';
import { CardTitle } from '@/modules/shared/shadcn/components/ui/card';
import { CardContent } from '@/modules/shared/shadcn/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export interface SimpleCardProps {
    title?: string;
    header?: React.ReactNode;
    description?: string;
    children: React.ReactNode;
    withCollapse?: boolean;
    // collapsed?: boolean
    onToggleCollapse?: (collapsed: boolean) => void;
}

export const SimpleCard = ({
    title,
    header,
    description,
    children,
    withCollapse,
    // collapsed: initialCollapsed = true,
    onToggleCollapse,
}: SimpleCardProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        const newCollapsed = !collapsed;
        setCollapsed(newCollapsed);
        onToggleCollapse?.(newCollapsed);
    };

    return (
        <Card>
            {(title || description || withCollapse) && (
                <CardHeader
                    className="cursor-pointer"
                    onClick={withCollapse ? handleToggleCollapse : undefined}
                >
                    <div className="flex items-center justify-between">
                        <div className="min-w-full">
                            {title && !header && <div className="mb-3"> <CardTitle>{title}</CardTitle>  </div>}
                            {!title && header && <div className="mb-3 min-w-full"> {header}  </div>}
                            {description && <p>{description}</p>}
                        </div>
                        {withCollapse && (
                            <div className="text-sm text-gray-700">
                                {collapsed ? (
                                    <ChevronDown
                                        color="gray"
                                        className="w-4 h-4"
                                    />
                                ) : (
                                    <ChevronUp
                                        color="gray"
                                        className="w-4 h-4"
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </CardHeader>
            )}
            {!collapsed && <CardContent>{children}</CardContent>}
        </Card>
    );
};
