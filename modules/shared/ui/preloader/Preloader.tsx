import { cn } from "../../shadcn/lib/utils";

interface PreloaderProps {
    className?: string;
}

export const Preloader = ({ className }: PreloaderProps) => {
    return (
        <div className={cn(
            "fixed inset-0 z-50 flex items-center justify-center",
            "bg-background/80 backdrop-blur-md",
            className
        )}>
            {/* Основной контейнер с анимацией */}
            <div className="relative flex flex-col items-center justify-center space-y-6">
                {/* Анимированный спиннер */}
                <div className="relative">
                    {/* Внешнее кольцо */}
                    <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin">
                        <div className="w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
                    </div>

                    {/* Внутреннее кольцо */}
                    <div className="absolute inset-2 w-12 h-12 border-4 border-primary/30 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}>
                        <div className="w-full h-full border-4 border-transparent border-b-primary rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
                    </div>

                    {/* Центральная точка */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Текст загрузки */}
                <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-foreground animate-pulse">
                        Загрузка...
                    </h3>
                    <div className="flex space-x-1 justify-center">
                        <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                </div>
            </div>

            {/* Дополнительные декоративные элементы */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Плавающие частицы */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary/25 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>
        </div>
    )
}
