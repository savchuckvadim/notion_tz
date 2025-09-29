# Next.js Web Application

Веб-приложение на Next.js, демонстрирующее различные методы рендеринга страниц и современные паттерны разработки.

🌐 **Demo**: [notion-tz.vercel.app](https://notion-tz.vercel.app)

## 🚀 Особенности

- **4 типа рендеринга**: SSG, SSR, ISR, CSR
- **Современная архитектура**: Feature-Sliced Design
- **State Management**: Redux Toolkit + TanStack Query
- **UI Components**: Radix UI + Tailwind CSS
- **Темная/светлая тема**: 4 цветовых схем
- **Модальные окна**: С загрузкой файлов
- **API интеграция**: JSONPlaceholder
- **TypeScript**: Полная типизация

## 📋 Страницы и методы рендеринга

| Страница | Метод | Описание |
|----------|-------|----------|
| **Home** | SSG | Статическая генерация на build |
| **Posts** | SSR | Динамическая генерация на запрос |
| **Users** | ISR | Гибрид: статика + обновление через revalidate |
| **Dashboard** | CSR | Данные только после загрузки React |
| **Tanstack Query** | CSR | Кэширование и управление состоянием |

## 🛠 Технологии

- **Framework**: Next.js 15.5.4
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI
- **State Management**: Redux Toolkit, TanStack Query
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Charts**: Recharts
- **Linting**: Biome

## 🏗 Архитектура

Проект использует **Feature-Sliced Design**:

```
modules/
├── app/           # Конфигурация приложения
├── entties/       # Бизнес-сущности
├── features/      # Функциональности
├── pages/         # Страницы
├── shared/        # Переиспользуемые модули
└── widgets/       # Виджеты
```

## 🚀 Запуск проекта

### Предварительные требования

- Node.js 20+
- pnpm (рекомендуется) или npm

### Установка

```bash
# Клонирование репозитория
git clone <repository-url>
cd project

# Установка зависимостей
pnpm install
# или
npm install
```

### Разработка

```bash
# Запуск в режиме разработки
pnpm dev
# или
npm run dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

### Сборка

```bash
# Сборка для продакшена
pnpm build
# или
npm run build

# Запуск продакшен версии
pnpm start
# или
npm start
```

### Линтинг и форматирование

```bash
# Проверка кода
pnpm lint

# Форматирование кода
pnpm format
```

## 🌐 Деплой на Vercel

### Автоматический деплой

1. **Подключение к Vercel**:
   - Зайдите на [vercel.com](https://vercel.com)
   - Войдите через GitHub
   - Нажмите "New Project"
   - Выберите ваш репозиторий

2. **Настройка проекта**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (корень проекта)
   - **Build Command**: `pnpm build` (или `npm run build`)
   - **Output Directory**: `.next` (автоматически)

3. **Переменные окружения** (если нужны):
   - В настройках проекта добавьте необходимые переменные
   - Например: `NEXT_PUBLIC_API_URL`

4. **Деплой**:
   - Нажмите "Deploy"
   - Vercel автоматически соберет и задеплоит проект

### Ручной деплой через CLI

```bash
# Установка Vercel CLI
npm i -g vercel

# Логин в Vercel
vercel login

# Деплой
vercel

# Продакшен деплой
vercel --prod
```

### Настройки для Vercel

Создайте файл `vercel.json` в корне проекта (опционально):

```json
{
  "framework": "nextjs",
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install"
}
```

## 📱 Функциональности

### Модальные окна
- Создание постов с текстом и загрузкой файлов
- Валидация форм с помощью Zod
- Предпросмотр изображений

### Управление состоянием
- **Redux Toolkit**: Глобальное состояние приложения
- **TanStack Query**: Кэширование API запросов
- **React Hook Form**: Управление формами

### Темы
- 4 цветовых схем (default, beige, red, violet)
- Переключение через UI

### API интеграция
- JSONPlaceholder для тестовых данных
- CRUD операции с постами и пользователями
- Обработка ошибок и загрузки

## 🔧 Конфигурация

### Next.js
- Turbopack для быстрой разработки
- Оптимизация изображений
- Настройка remote patterns для внешних изображений

### Tailwind CSS
- Кастомные цветовые схемы
- Анимации и переходы
- Responsive дизайн

### TypeScript
- Строгая типизация
- Path mapping для импортов
- Конфигурация для Next.js

## 📁 Структура проекта

```
project/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard page
│   ├── home/              # Home page
│   ├── posts/             # Posts page
│   ├── users/             # Users page
│   └── tanstack-bonus/    # TanStack Query page
├── modules/               # Основная логика приложения
│   ├── app/               # Конфигурация приложения
│   ├── entties/           # Бизнес-сущности
│   ├── features/          # Функциональности
│   ├── pages/             # Страницы
│   ├── shared/            # Переиспользуемые модули
│   └── widgets/           # Виджеты
├── data/                  # Данные приложения
├── styles/                # Глобальные стили и темы
└── public/                # Статические файлы
```

## 🎯 Задание

Проект выполнен согласно техническому заданию:

✅ **Роутинг Next.js** - App Router с 4 страницами
✅ **4 типа рендеринга** - SSG, SSR, ISR, CSR
✅ **API интеграция** - JSONPlaceholder
✅ **Модальные окна** - С текстовыми полями и загрузкой файлов
✅ **POST запросы** - Создание постов через модальное окно
✅ **Архитектура** - Feature-Sliced Design
✅ **Стили** - Современный UI с темами
✅ **Навыки** - Next, React, TypeScript, Redux, TanStack Query, современные паттерны

## 📄 Лицензия

MIT License

## 👨‍💻 Автор nmbrsdntl

Создано в рамках технического задания для демонстрации навыков разработки на Next.js
