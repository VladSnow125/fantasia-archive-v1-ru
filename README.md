# Fantasia Archive — русская версия

Менеджер базы данных для построения вымышленных миров: персонажи, локации, события, религии, магия, языки и ещё полтора десятка типов документов, связанных между собой в единое дерево.

Этот репозиторий — форк оригинального [vishiri/fantasia-archive-v1](https://github.com/vishiri/fantasia-archive-v1) с полным переводом интерфейса на русский язык (версия 0.1.15).

---

## Готовая сборка для Windows

1. Откройте раздел [Releases](../../releases) и скачайте последний релиз.
2. Возьмите файл `Fantasia-Archive-RU-win64.zip` (~170 МБ).
3. Распакуйте архив в любую папку, например `D:\Games\Fantasia Archive`.
4. Запустите `Fantasia Archive.exe`.

Установка не требуется — это портативная сборка. Требования: Windows 10/11, 64 бита.

> **Первый запуск.** Windows SmartScreen может показать предупреждение, потому что сборка не подписана цифровым сертификатом: «Подробнее» → «Выполнить в любом случае». Приложение не устанавливается в систему и не требует прав администратора.

---

## Запуск из исходников

### Что понадобится

- **Node.js 14 или 16** — рекомендуемые версии для Quasar 1. На Node 17+ потребуется флаг `--openssl-legacy-provider` (см. ниже).
- **npm 6** и новее.
- Git.

### Установка

```bash
git clone https://github.com/VladSnow125/fantasia-archive-v1-ru.git
cd fantasia-archive-v1-ru
npm install
```

### Режим разработки

Запускает приложение с горячей перезагрузкой:

```bash
npm run dev
```

### Только посмотреть интерфейс без Electron

```bash
npx quasar dev
```

Откроется в браузере — удобно для правки вёрстки и текстов, но файловые операции и сохранение проектов работают только в настольной версии.

---

## Сборка `.exe`

```bash
npm run build
```

Готовое приложение появится здесь:

```
dist\electron\Packaged\win-unpacked\Fantasia Archive.exe
```

Папку `win-unpacked` можно целиком переносить на другую машину и запускать без установки.

### Что настроено в проекте

В `quasar.conf.js` в блоке `electron.builder`:

- `electronDist` — сборка использует Electron из `node_modules`, а не скачивает архив заново;
- `win.target: 'dir'` — собирается готовая папка, а не установщик.

Если нужен **установщик NSIS**, уберите строку `target: 'dir'`. Учтите, что `electron-builder` при этом скачивает свои компоненты (`nsis`, `winCodeSign`) с GitHub — при недоступном GitHub сборка упадёт.

---

## Если `npm install` не может скачать Electron

Типичная ошибка — `RequestError` на шаге `electron@11.5.0` и пустая папка `node_modules` после установки. Причина: GitHub Releases недоступен, а Electron скачивается именно оттуда. Помогает зеркало:

```powershell
$env:ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
$env:ELECTRON_BUILDER_BINARIES_MIRROR="https://npmmirror.com/mirrors/electron-builder-binaries/"
npm install
```

На Node 17 и новее перед сборкой добавьте:

```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"
```

Без этого webpack 4 (внутри Quasar 1) падает с ошибкой `digital envelope routines::unsupported`.

---

## Структура проекта

| Путь | Что там |
|---|---|
| `src/scripts/databaseManager/blueprints/` | 20 типов документов: поля, подсказки, варианты списков |
| `src/interfaces/I_Blueprint.ts` | Схема blueprint'а — сюда смотреть при добавлении полей |
| `src/components/` | Интерфейс: дерево документов, поля, диалоги, настройки |
| `src/pages/` | Экраны приложения: приветствие, обзор проекта, документ |
| `src/store/` | Хранилище Vuex |
| `src/i18n/` | Локали `en-us` и `ru-ru` |
| `src/documents/` | Справочные материалы и список изменений |

Новые типы документов добавляются в `blueprints` и регистрируются в `blueprintManager.ts`.

---

## О локализации

- Язык интерфейса задаётся в `src/boot/i18n.ts` (`locale: "ru-ru"`) и в `quasar.conf.js` (`lang: "ru"`).
- Переведены интерфейс, шаблоны документов, подсказки и справочные материалы; текст лицензии GPL v3 оставлен в оригинале — юридическую силу имеет только английская редакция.
- **Важное ограничение:** значения выпадающих списков тоже переведены. В проектах, созданных в английской версии, такие значения могут отображаться пустыми — их нужно заполнить заново. Новые проекты полностью русские.

---

## Лицензия

GNU General Public License v3 — полный текст в [LICENSE.md](LICENSE.md). Автор оригинала — Vishiri; перевод и сборка распространяются на тех же условиях.

Документация по конфигурации сборки: [quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
