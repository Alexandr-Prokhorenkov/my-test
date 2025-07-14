# 🚀 Инструкция по запуску проекта

> **P.S.** Для запуска проекта должен быть установлен **Docker** и **Xterm**.
> **Рекомендация**: перед запуском проекта деактивируйте текущее виртуальное окружение и удалите его:
> Работа с виртуальным окружение зависит от IDE. В Pycharm venv создается сразу, в vscode нет.

```bash
deactivate
rm -rf .venv
```

> В .vscode лежат конфигурации для удобного запуска и отладки через VS Code. Эти файлы не обязательны, и проект работает без них.

## 1. Клонируем репозиторий

```bash
git clone https://gitlab.kompas.dev/kip/kip-kompas.git
```

## 2. Переходим в папку репозитория

```bash
cd kip-kompas
```

## 3. Проверяем чтобы порт 5432 не был занят

```bash
sudo lsof -i :5432
```

Если занят postgresql то

```bash
sudo systemctl stop postgresql
```

если порт занят другой службой то отключем ту службу на которой занят порт

## 4. Переходим из ветки main в ветку develop

```bash
git checkout develop
```

## 5. Запускаем prepare_host.sh

```bash
chmod +x ./prepare_host.sh
sudo ./prepare_host.sh
```

## 6. Переходим в папку back_confidential

```bash
cd back_confidential
```

## 7. Создание виртуального окружения

если python 2.7 нет на компьютере то а затем слудующий пункт:

```bash
sudo apt update
sudo apt install python2.7
```

если python 2.7 есть на компьютере то:

```bash
virtualenv -p python2.7 venv
```

## 8. Запуск виртуального окружения

```bash
source venv/bin/activate
```

## 9. Установка Python-зависимостей

```bash
pip install --upgrade pip==20.3.4
pip install -r requirements.txt
```

## 10. Подготовка backend части приложения

1. создаем папку logs в back_confidential (вручную) + выполняем команды

```bash
chmod +x ./backend.sh
sudo ./backend.sh
```

## 11. Переходим в папку frontend и устанавливаем зависимости

```bash
cd ../frontend
chmod +x ./frontend_build.sh
sudo ./frontend_build.sh
```

## 12. Поднимаемся на уровень выше и запускаем acacia

```bash
cd ..
chmod +x ./run_acacia.sh
sudo ./run_acacia.sh
```

если ловим 500-й ошибку то переустанавливаем backend

## 13. Переходим в папку frontend-new устанавливаем node 18.20.8

```bash
cd frontend-new
nvm install 18.20.8
nvm use 18.20.8
npm install
```

## 14. Запускаем новое приложение

```bash
npm start
```

## 15. Если работаете с frontend то для работы ESlint, Prettier, Stylelint нужно установить эти приложения в VS-Code, для Angular подсказок желательно установить Angular Language Service

## 16. Обновляем файл settings.json в VS-Code

```bash
{
  "files.autoSave": "afterDelay",
  "breadcrumbs.enabled": false,
  "workbench.colorTheme": "Oceanic Next (dimmed bg)",
  "database-client.autoSync": true,
  "workbench.editorAssociations": {
    "*.svg": "imagePreview.previewEditor"
  },

  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,

  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit"
  },

  "eslint.validate": ["javascript", "typescript", "html"],
  "eslint.run": "onSave",

  "stylelint.validate": ["css", "scss"],

  "explorer.confirmPasteNative": false
}

```

# Архитектура проекта kip-kompas

Проект построен на основе Feature-Sliced Design (FSD).

```bash
src/
├── 01-app/       # Инициализация приложения, маршруты, конфиг
├── 02-pages/     # Страницы (page-компоненты)
├── 03-widgets/   # UI-секции со своей логикой
├── 04-features/  # Бизнес-фичи (например: логин, фильтр, добавление)
├── 05-entities/  # Сущности бизнес-домена (user, document, task)
├── 06-shared/    # Переиспользуемый код, UI, конфиг, стили
│ ├── api/        # Базовые API-инстансы (напр. HttpClient wrapper)
│ ├── assets/     # Статические ресурсы (fonts, icons, images)
│ ├── config/     # Константы, enum, глобальные конфиги
│ ├── lib/        # Технические утилиты, абстракции
│ ├── styles/     # SCSS partials (_reset, _fonts, _variables и т.д.)
│ ├── types/      # Общие типы (type declarations, interfaces)
│ └──  ui/        # Глобальные UI-компоненты без бизнес-логики
└──
```
