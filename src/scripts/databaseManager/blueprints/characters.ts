import { RPGSystemsStats } from "./../extraFieldLists/RPGSystemsStats"
import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const charactersBlueprint: I_Blueprint = {
  _id: "characters",
  order: 370,
  namePlural: "Персонажи",
  nameSingular: "Персонаж",
  icon: "mdi-account",
  category: "Мир",
  extraFields: [
    {
      id: "pairedCurrentLocation",
      name: "Место жительства (устаревшее)",
      type: "singleToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 12,
      tooltip: `
        Это поле устарело и больше не выполняет никакой функции.
        <br>
        Перенесите свои данные в соответствующие новые поля.
        <br>
        Это поле исчезнет автоматически, когда из него будут удалены все данные.
      `,
      isLegacy: true,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedCurrentCharacters"
      }
    },
    {
      id: "pairedOriginLocation",
      name: "Место происхождения (устаревшее)",
      type: "singleToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 12,
      tooltip: `
        Это поле устарело и больше не выполняет никакой функции.
        <br>
        Перенесите свои данные в соответствующие новые поля.
        <br>
        Это поле исчезнет автоматически, когда из него будут удалены все данные.
      `,
      isLegacy: true,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedOriginCharacters"
      }
    },
    {
      id: "pairedDemiseLocation",
      name: "Место смерти (устаревшее)",
      type: "singleToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 12,
      tooltip: `
        Это поле устарело и больше не выполняет никакой функции.
        <br>
        Перенесите свои данные в соответствующие новые поля.
        <br>
        Это поле исчезнет автоматически, когда из него будут удалены все данные.
      `,
      isLegacy: true,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedDemiseCharacters"
      }
    },
    {
      id: "pairedMagic",
      name: "Известная магия/заклинания (устаревшее)",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 12,
      tooltip: `
        Это поле устарело и больше не выполняет никакой функции.
        <br>
        Перенесите свои данные в соответствующие новые поля.
        <br>
        Это поле исчезнет автоматически, когда из него будут удалены все данные.
      `,
      isLegacy: true,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "pairedTech",
      name: "Известные технологии/науки (устаревшее)",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      tooltip: `
        Это поле устарело и больше не выполняет никакой функции.
        <br>
        Перенесите свои данные в соответствующие новые поля.
        <br>
        Это поле исчезнет автоматически, когда из него будут удалены все данные.
      `,
      isLegacy: true,
      sizing: 12,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "skills",
      name: "Навыки (устаревшее)",
      type: "list",
      icon: "mdi-sword",
      sizing: 12,
      tooltip: `
        Это поле устарело и больше не выполняет никакой функции.
        <br>
        Перенесите свои данные в соответствующие новые поля.
        <br>
        Это поле исчезнет автоматически, когда из него будут удалены все данные.
      `,
      isLegacy: true,
      predefinedListExtras: {
        affix: "Уровень",
        extraSelectValueList: [
          "Стажёр",
          "Ученик",
          "Способный",
          "Продвинутый",
          "Эксперт",
          "Мастер",
          "Гроссмейстер",
          "Гений",
          "Вундеркинд",
          "За пределами шкалы"
        ]
      }
    },

    {
      id: "breakDocumentSettings",
      name: "Настройки документа",
      type: "break",
      sizing: 12
    },
    {
      id: "name",
      name: "Имя",
      type: "text",
      icon: "mdi-account",
      sizing: 3
    },
    {
      id: "parentDoc",
      name: "Относится к",
      type: "singleToNoneRelationship",
      tooltip:
        `Это поле используется для построения собственной иерархической структуры в основном списке элементов в левой части приложения.
        <br> С его помощью можно создать бесконечное количество подуровней иерархической структуры.
        <br> Пример: несколько подгрупп (провинций) Римской империи, вложенных в основную политическую группу «Римская империя».
        `,
      sizing: 3,
      relationshipSettings: {
        connectedObjectType: "characters"
      }
    },
    {
      id: "documentColor",
      name: "Цвет текста",
      type: "colorPicker",
      icon: "mdi-eyedropper",
      tooltip:
        `Это поле позволяет окрасить документ в любой доступный цвет в формате HEX или RGB.
        <br>Выбранный цвет будет отображаться на иконке и имени документа как в иерархическом дереве слева, так и на верхних вкладках.
        `,
      sizing: 2
    },
    {
      id: "documentBackgroundColor",
      name: "Цвет фона",
      type: "colorPicker",
      icon: "mdi-format-color-fill",
      tooltip:
        `Это поле позволяет задать документу любой доступный цвет фона в формате HEX или RGB.
        <br>Выбранный цвет будет отображаться как фон в иерархическом дереве слева и на верхних вкладках.
        `,
      sizing: 2
    },
    {
      id: "finishedSwitch",
      name: "Завершён",
      type: "switch",
      icon: "mdi-check-bold",
      tooltip:
        `Эта настройка переводит текущий документ в режим завершённого документа.
        <br>
        У документа с включённым режимом завершённости в режиме просмотра не показываются незаполненные поля — он ведёт себя так, как будто в настройках включено «Скрыть пустые поля».
        `,
      sizing: 2
    },
    {
      id: "minorSwitch",
      name: "Второстепенный документ",
      type: "switch",
      icon: "mdi-magnify-minus-outline",
      tooltip:
        `Эта настройка переводит текущий документ в режим второстепенного документа.
        <br>
        Документ с включённым режимом второстепенности не появляется в результатах поиска по связям.<br>
        Смысл настройки — позволить создавать документы, которые не засоряют поиск, но в редких случаях всё же важны для истории (например, дальние родственники персонажа).
        `,
      sizing: 3
    },
    {
      id: "deadSwitch",
      name: "Мёртв/Пропал/Уничтожен",
      type: "switch",
      icon: "mdi-skull-crossbones",
      tooltip:
        `Эта настройка переводит текущий документ в режим «мёртв/пропал/уничтожен».
        <br>
        К документу с включённым режимом применяется зачёркивание текста — так показывается, что он больше не является частью текущей временной линии.
        `,
      sizing: 3
    },
    {
      id: "categorySwitch",
      name: "Это категория",
      type: "switch",
      icon: "fas fa-folder-open",
      tooltip:
        `Эта настройка переводит текущий документ в режим категории.
        <br>
        У документа с включённым режимом категории скрывается большинство полей, и он не появляется в поиске по связям, кроме поля «Относится к».
        `,
      sizing: 3
    },
    {
      id: "order",
      name: "Порядковый номер",
      type: "number",
      icon: "mdi-file-tree",
      tooltip:
        `Если сортировка по алфавиту в иерархическом дереве слева вас не устраивает, это поле позволяет задать собственные номера для сортировки, которые ставятся перед обычным алфавитным порядком.
        <br>Настоятельно рекомендуется «разрежать» собственные номера, записывая, например, 100 (или хотя бы 10) вместо 1.
        <br>Это оставляет запас между элементами на случай, если новый нужно будет вставить в середину, не переделывая порядок во всех документах.
        `,
      sizing: 3
    },
    {
      id: "tags",
      name: "Теги",
      type: "tags",
      icon: "mdi-tag",
      tooltip:
        `Теги используются, чтобы объединять одинаковые (и даже разные) типы документов в собственные группы по вашим потребностям.
        <br>
        У документа может быть любое количество тегов, но каждый тег может присутствовать только один раз.
        <br>
        Это ограничение действует и для любых вариантов написания того же тега в верхнем или нижнем регистре.
        <br>
        Пример: тег «Player Party» будет считаться тем же тегом, что «player party», «PlAyER PaRtY» и любое подобное написание.
        `,
      sizing: 8
    },
    {
      id: "docTemplate",
      name: "Шаблон документа",
      type: "documentTemplate",
      icon: "mdi-script-text-outline",
      tooltip:
        `
        Шаблоны документов определяют, какие поля текущий
        <br>
        документ показывает как в режиме просмотра, так и в режиме редактирования.
        <br>
        Из-за текущих технических ограничений новые шаблоны можно добавлять, а существующие —
        <br>
        редактировать и удалять только из окна «Экспорт проекта/документа».
        <br>
        Учтите также, что изменения шаблона требуют перезагрузки вкладки документа.
        <br>
        Для этого можно закрыть и снова открыть текущую вкладку либо переключиться
        <br>
        на другую вкладку и вернуться обратно.
        `,
      sizing: 4
    },
    {
      id: "extraClasses",
      name: "Дополнительные HTML-классы",
      type: "text",
      icon: "mdi-language-css3",
      tooltip:
        `Это поле предназначено для опытных пользователей, которые хотят оформить документ через глобально заданные CSS-классы.
        <br>
        Настройки находятся в разделе «Проект → Дополнительные инструменты проекта → Пользовательский CSS».
        `,
      sizing: 12
    },
    {
      id: "otherNames",
      name: "Другие имена и эпитеты",
      type: "list",
      icon: "mdi-book-plus",
      sizing: 12
    },
    {
      id: "categoryDescription",
      name: "Описание категории",
      type: "wysiwyg",
      icon: "mdi-folder-edit-outline",
      sizing: 12
    },
    {
      id: "breakBasic",
      name: "Основная информация",
      type: "break",
      sizing: 12
    },
    {
      id: "titles",
      name: "Титулы",
      type: "list",
      icon: "mdi-crown",
      sizing: 12,
      predefinedListExtras: {
        affix: "Примечание",
        extraSelectValueList: [
        ]
      }
    },
    {
      id: "sex",
      name: "Пол",
      type: "singleSelect",
      icon: "mdi-gender-male-female",
      sizing: 2,
      predefinedSelectValues: [
        "Мужской",
        "Женский",
        "Другой",
        "Нет"
      ]
    },
    {
      id: "age",
      name: "Возраст",
      type: "text",
      icon: "mdi-timer-sand",
      sizing: 2
    },
    {
      id: "height",
      name: "Рост",
      type: "text",
      icon: "mdi-human-male-height-variant",
      sizing: 2
    },
    {
      id: "weight",
      name: "Вес",
      type: "text",
      icon: "mdi-weight",
      sizing: 2
    },
    {
      id: "birthDate",
      name: "Дата рождения",
      type: "text",
      icon: "mdi-cake-variant",
      sizing: 2
    },
    {
      id: "deathDate",
      name: "Дата смерти",
      type: "text",
      icon: "mdi-skull-crossbones",
      sizing: 2
    },
    {
      id: "pairedRace",
      name: "Виды/Расы",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "pairedProfession",
      name: "Занятие/Класс",
      type: "manyToManyRelationship",
      icon: "fab fa-pied-piper-hat",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "professions",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "ethnicity",
      name: "Этническая принадлежность",
      type: "text",
      icon: "fas fa-hand-paper",
      sizing: 6
    },
    {
      id: "powerLevel",
      name: "Боевой рейтинг",
      type: "singleSelect",
      icon: "fas fa-fist-raised",
      sizing: 6,
      predefinedSelectValues: [
        /*
        "0 - Civilian",
        "1 - Trainee / Athletic civilian",
        "2 - Trained soldier / Weak magic user",
        "3 - Veteran soldier / Average magic user",
        "4 - Elite soldier / Weak vampire",
        "5 - Top-tier soldier / Strong magic user / Weak nephilim / Average vampire",
        "6 - Exceptional magic user / Average nephilim / Powerful vampire",
        "7 - Genius magic user / Powerful nephilim / Prodigy vampire",
        "8 - Prodigy magic user / Genius nephilim",
        "9 - Weak god / Weak dragon / Prodigy nephilim",
        "10 - Average god / Adult dragon",
        "11 - Powerful god / Poweful and old dragon / Weak ascendant",
        "12 - Prodigy god / Ancient dragon / Medium ascendant / Weak & medium outerplanar entities",
        "13 - World-shaping god / Powerful ascendant / Strong outerplanar entity",
        "14 - New transcendant / Genius ascendant / Powerful outerplanar entity",
        "15 - Established transcendant / Prodigy ascendant / Ancient outerplanar entity",
        "16 & Above - Off the scale / Impossible to even categorize" */
      ]
    },
    {
      id: "pairedCurrentLocationNew",
      name: "Место жительства",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedCurrentCharactersNew"
      }
    },
    {
      id: "pairedOriginLocationNew",
      name: "Место происхождения",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedOriginCharactersNew"
      }
    },
    {
      id: "pairedDemiseLocationNew",
      name: "Место смерти",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedDemiseCharactersNew"
      }
    },
    {
      id: "pairedConditionsPositive",
      name: "Под действием благ",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedCharactersPositive"
      }
    },
    {
      id: "pairedConditionsNegative",
      name: "Под действием недугов",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedCharactersNegative"
      }
    },
    {
      id: "pairedConditionsOther",
      name: "Под действием других состояний",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedCharactersOther"
      }
    },
    {
      id: "description",
      name: "Описание и история",
      type: "wysiwyg",
      icon: "mdi-book-open-page-variant-outline",
      sizing: 12
    },
    {
      id: "breakSkills",
      name: "Навыки, характеристики, знания и особенности",
      type: "break",
      sizing: 12
    },
    {
      id: "personalityTraits",
      name: "Черты и особенности",
      type: "multiSelect",
      icon: "mdi-head-cog",
      sizing: 6,
      predefinedSelectValues: [
        "Резкий",
        "Отрывистый",
        "Рассеянный",
        "Доступный",
        "Активный",
        "Адаптивный",
        "Достойный восхищения",
        "Авантюрный",
        "Агрессивный",
        "Мучительный",
        "Покладистый",
        "Бесцельный",
        "Ветреный",
        "Бдительный",
        "Альтруистичный",
        "Отстранённый",
        "Амбициозный",
        "Приветливый",
        "Аморальный",
        "Забавный",
        "Гневливый",
        "Предусмотрительный",
        "Тревожный",
        "Апатичный",
        "Признательный",
        "Произвольный",
        "Любящий спорить",
        "Высокомерный",
        "Искусный",
        "Умеющий ясно излагать",
        "Искусственный",
        "Аскетичный",
        "Необщительный",
        "Стремящийся",
        "Напористый",
        "Астигматичный",
        "Атлетичный",
        "Привлекательный",
        "Авторитарный",
        "Уравновешенный",
        "Варварский",
        "Доброжелательный",
        "Озадаченный",
        "Масштабно мыслящий",
        "Шумный",
        "Причудливый",
        "Пресный",
        "Прямолинейный",
        "Мальчишеский",
        "Беззаботный",
        "Блестящий",
        "Хрупкий",
        "Жестокий",
        "Деловой",
        "Занятой",
        "Расчётливый",
        "Чёрствый",
        "Спокойный",
        "Сварливый",
        "Способный",
        "Пленительный",
        "Неосторожный",
        "Заботливый",
        "Повседневный",
        "Осторожный",
        "Бросающий вызов",
        "Харизматичный",
        "Очаровательный",
        "Лишённый обаяния",
        "Жизнерадостный",
        "Детский",
        "Компанейский",
        "Осмотрительный",
        "Чистоплотный",
        "Ясно мыслящий",
        "Сообразительный",
        "Неуклюжий",
        "Грубый",
        "Холодный",
        "Яркий",
        "Бесцветный",
        "Общительный",
        "Сострадательный",
        "Состязательный",
        "Самодовольный",
        "Жалующийся",
        "Сложный",
        "Неудержимый",
        "Тщеславный",
        "Примирительный",
        "Осуждающий",
        "Уверенный в себе",
        "Доверительный",
        "Конформист",
        "Растерянный",
        "Добросовестный",
        "Консервативный",
        "Внимательный к другим",
        "Постоянный",
        "Созерцательный",
        "Презренный",
        "Противоречивый",
        "Традиционный",
        "Сотрудничающий",
        "Смелый",
        "Вежливый",
        "Трусливый",
        "Хитрый",
        "Грубоватый",
        "Безумный",
        "Творческий",
        "Интеллектуальный",
        "Криминальный",
        "Чёткий",
        "Критичный",
        "Необработанный",
        "Безжалостный",
        "Культурный",
        "Любопытный",
        "Симпатичный",
        "Циничный",
        "Дерзкий",
        "Изысканно любезный",
        "Декадентский",
        "Лживый",
        "Приличный",
        "Обманчивый",
        "Решительный",
        "Преданный делу",
        "Глубокий",
        "Утончённый",
        "Требовательный",
        "Зависимый",
        "Отчаянный",
        "Разрушительный",
        "Решительно настроенный",
        "Изворотливый",
        "Трудный",
        "Исполненный достоинства",
        "Направленный",
        "Грязный",
        "Дисциплинированный",
        "Сбивающий с толку",
        "Недовольный",
        "Обескураживающий",
        "Невежливый",
        "Деликатный",
        "Нечестный",
        "Неверный",
        "Непослушный",
        "Беспорядочный",
        "Неорганизованный",
        "Спорливый",
        "Неуважительный",
        "Мешающий",
        "Развратный",
        "Диссонирующий",
        "Отвлекающийся",
        "Тревожащий",
        "Догматичный",
        "Доминирующий",
        "Властный",
        "Драматичный",
        "Мечтательный",
        "Побуждающий",
        "Потешный",
        "Сухой",
        "Скучный",
        "Исполнительный",
        "Динамичный",
        "Убеждённый",
        "Приземлённый",
        "Легко падающий духом",
        "Кипучий",
        "Эксцентричный",
        "Образованный",
        "Женственный",
        "Эффективный",
        "Эгоцентричный",
        "Элегантный",
        "Красноречивый",
        "Эмоциональный",
        "Эмпатичный",
        "Энергичный",
        "Обессиленный",
        "Загадочный",
        "Восторженный",
        "Завистливый",
        "Хаотичный",
        "Беглец от реальности",
        "Эстетичный",
        "Злой",
        "Возбудимый",
        "Увлекающий",
        "Прагматичный",
        "Экспериментальный",
        "Незаурядный",
        "Расточительный",
        "Крайний",
        "Справедливый",
        "Верный",
        "Вероломный",
        "Фальшивый",
        "Семейный",
        "Фанатичный",
        "Фантазийный",
        "Дальновидный",
        "Фаталистичный",
        "Угодливый",
        "Боязливый",
        "Дарующий счастье",
        "Непостоянный",
        "Пылкий",
        "Твёрдый",
        "Застывший",
        "Эффектный",
        "Гибкий",
        "Сосредоточенный",
        "Простонародный",
        "Неразумный",
        "Могучий",
        "Забывчивый",
        "Умеющий прощать",
        "Формальный",
        "Прямодушный",
        "Мошеннический",
        "Свободомыслящий",
        "Ничем не связанный",
        "Дружелюбный",
        "Пугающий",
        "Легкомысленный",
        "Бережливый",
        "Любящий веселье",
        "Галантный",
        "Щедрый",
        "Кроткий",
        "Искренний",
        "Гламурный",
        "Унылый",
        "Добродушный",
        "Неизящный",
        "Милостивый",
        "Величавый",
        "Жадный",
        "Угрюмый",
        "Бесхитростный",
        "Легковерный",
        "Трудолюбивый",
        "Ненавистный",
        "Надменный",
        "Здоровый",
        "Радушный",
        "Гедонистический",
        "Готовый помочь",
        "Героический",
        "Колеблющийся",
        "Косный",
        "Самовластный",
        "Благородный",
        "Задорный",
        "Честный",
        "Достойный",
        "Враждебный",
        "Смиренный",
        "Юмористичный",
        "Торопливый",
        "Гипнотический",
        "Иконоборческий",
        "Идеалистичный",
        "Идиосинкразический",
        "Невежественный",
        "Обладающий воображением",
        "Подражательный",
        "Бесстрастный",
        "Нетерпеливый",
        "Безличный",
        "Непрактичный",
        "Впечатлительный",
        "Внушительный",
        "Неосмотрительный",
        "Импульсивный",
        "Острый",
        "Невнимательный к другим",
        "Неподкупный",
        "Нелюбопытный",
        "Нерешительный",
        "Независимый",
        "Индивидуалистичный",
        "Снисходительный",
        "Инертный",
        "Скованный",
        "Новаторский",
        "Безобидный",
        "Неуверенный",
        "Нечуткий",
        "Понимающий суть",
        "Неискренний",
        "Беспечный",
        "Оскорбительный",
        "Умный",
        "Интенсивный",
        "Нетерпимый",
        "Интуитивный",
        "Незаметный",
        "Неуязвимый",
        "Вспыльчивый",
        "Иррациональный",
        "Безрелигиозный",
        "Безответственный",
        "Непочтительный",
        "Раздражительный",
        "Добрый",
        "Знающий",
        "Ленивый",
        "Лидерский",
        "Неспешный",
        "Либеральный",
        "Сладострастный",
        "Логичный",
        "Разговорчивый",
        "Милый",
        "Преданный",
        "Лиричный",
        "Великодушный",
        "Злонамеренный",
        "Манерный",
        "Без манер",
        "Многогранный",
        "Мужественный (маскулинный)",
        "Материнский",
        "Тщательный",
        "Зрелый",
        "Приторно-чувствительный",
        "Говорящий уклончиво",
        "Механический",
        "Вмешивающийся в чужие дела",
        "Меланхоличный",
        "Мягкий",
        "Показной",
        "Неаккуратный",
        "Методичный",
        "Озорной",
        "Несчастный",
        "Скупой",
        "Заблуждающийся",
        "Ошибающийся",
        "Умеренный",
        "Современный",
        "Скромный",
        "Меркантильный",
        "Чудовищный",
        "Капризный",
        "Морализаторский",
        "Мрачный",
        "Бестолковый",
        "Многоуровневый",
        "Мистический",
        "Наивный",
        "Нарциссический",
        "Узкомыслящий",
        "Узкий",
        "Щеголеватый",
        "Аккуратный",
        "Негативистский",
        "Запускающий дела",
        "Невротичный",
        "Нейтральный",
        "Нигилистический",
        "Неавторитарный",
        "Уклончивый",
        "Не любящий соперничество",
        "Послушный",
        "Объективный",
        "Отвратительный",
        "Наблюдательный",
        "Одержимый",
        "Очевидный",
        "Странный",
        "Бесцеремонный",
        "Старомодный",
        "Одномерный",
        "Односторонний",
        "Открытый",
        "Категоричный",
        "Оппортунистический",
        "Угнетённый",
        "Оптимистичный",
        "Любящий порядок",
        "Обычный",
        "Организованный",
        "Оригинальный",
        "Возмутительный",
        "Откровенный",
        "Чрезмерно мечтательный",
        "Кропотливый",
        "Параноидальный",
        "Страстный",
        "Пассивный",
        "Патерналистский",
        "Терпеливый",
        "Патриотичный",
        "Миролюбивый",
        "Педантичный",
        "Восприимчивый",
        "Перфекционист",
        "Приятный в общении",
        "Убедительный",
        "Извращённый",
        "Мелочный",
        "Лицемерный",
        "Флегматичный",
        "Физический",
        "Безмятежный",
        "Планомерный",
        "Игривый",
        "Упорно тянущий",
        "Лощёный",
        "Политичный",
        "Напыщенный",
        "Популярный",
        "Собственнический",
        "Властолюбивый",
        "Практичный",
        "Точный",
        "Хищный",
        "Предсказуемый",
        "Предвзятый",
        "Погружённый в себя",
        "Самонадеянный",
        "Претенциозный",
        "Чопорный",
        "Принципиальный",
        "Замкнутый",
        "Откладывающий на потом",
        "Беспутный",
        "Глубокомысленный",
        "Прогрессивный",
        "Изменчивый",
        "Оберегающий",
        "Гордый",
        "Благоприятный",
        "Провокационный",
        "Благоразумный",
        "Целенаправленный",
        "Драчливый",
        "Пунктуальный",
        "Чистый",
        "Пуританский",
        "Пытливый",
        "Тихий",
        "Своеобразный",
        "Рациональный",
        "Реакционный",
        "Реактивный",
        "Реалистичный",
        "Вдумчивый",
        "Регламентированный",
        "Сожалеющий",
        "Расслабленный",
        "Надёжный",
        "Религиозный",
        "Кающийся",
        "Подавленный",
        "Обидчивый",
        "Сдержанный",
        "Изобретательный",
        "Уважительный",
        "Ответственный",
        "Отзывчивый",
        "Владеющий собой",
        "Склонный к уединению",
        "Благоговейный",
        "Смехотворный",
        "Жёсткий",
        "Ритуальный",
        "Романтичный",
        "Буйный",
        "Разорённый",
        "Деревенский",
        "Садистский",
        "Мудрый (мудрец)",
        "Ханжеский",
        "Вменяемый",
        "Саркастичный",
        "Интригующий",
        "Учёный",
        "Презрительный",
        "Скрупулёзный",
        "Скрытный",
        "Чувствующий себя в безопасности",
        "Малоподвижный",
        "Стеснительный",
        "Самокритичный",
        "Самоуничижительный",
        "Отказывающий себе",
        "Потакающий своим желаниям",
        "Полагающийся на себя",
        "Самодостаточный",
        "Эгоистичный",
        "Самоотверженный",
        "Чувствительный",
        "Чувственный",
        "Сентиментальный",
        "Ангельский",
        "Серьёзный",
        "Сексапильный",
        "Неглубокий",
        "Умеющий делиться",
        "Недальновидный",
        "Проницательный",
        "Застенчивый",
        "Глупый",
        "Простой",
        "Фанатично преданный цели",
        "Скептичный",
        "Умелый",
        "Неряшливый",
        "Медлительный",
        "Лукавый",
        "Мелко мыслящий",
        "Обходительный",
        "Трезвый",
        "Общительный",
        "Мягкосердечный",
        "Мягкотелый",
        "Торжественный",
        "Прочный",
        "Уединённый",
        "Изысканный",
        "Низменный",
        "Спонтанный",
        "Спортивный",
        "Стабильный",
        "Непоколебимый",
        "Устойчивый",
        "Стальной",
        "Суровый",
        "Зажатый",
        "Стоический",
        "Невозмутимый",
        "Строгий",
        "Волевой",
        "Сильный",
        "Упрямый",
        "Усердный",
        "Тупоумный",
        "Стильный",
        "Вкрадчивый",
        "Субъективный",
        "Покорный",
        "Тонкий",
        "Поверхностный",
        "Суеверный",
        "Удивительный",
        "Подозрительный",
        "Ласковый",
        "Сочувствующий",
        "Систематичный",
        "Бестактный",
        "Обладающий вкусом",
        "Безвкусный",
        "Наставнический",
        "Напряжённый",
        "Вороватый",
        "Основательный",
        "Необдуманный",
        "Опрятный",
        "Робкий",
        "Терпимый",
        "Крепкий",
        "Податливый",
        "Прозрачный",
        "Коварный",
        "Модный",
        "Проблемный",
        "Доверчивый",
        "Неагрессивный",
        "Неамбициозный",
        "Не ценящий чужого",
        "Равнодушный",
        "Без церемоний",
        "Неизменный",
        "Невеликодушный",
        "Безропотный",
        "Неубедительный",
        "Несклонный сотрудничать",
        "Нетворческий",
        "Некритичный",
        "Елейный",
        "Нетребовательный",
        "Понимающий",
        "Недисциплинированный",
        "Недогматичный",
        "Непостижимый",
        "Неподдающийся обману",
        "Недружелюбный",
        "Неблагодарный",
        "Нездоровый",
        "Неторопливый",
        "Лишённый воображения",
        "Невпечатляющий",
        "Раскованный",
        "Немилый",
        "Непатриотичный",
        "Неотёсанный",
        "Непредсказуемый",
        "Беспринципный",
        "Нереалистичный",
        "Несклонный размышлять",
        "Ненадёжный",
        "Неверующий",
        "Несдержанный",
        "Несамокритичный",
        "Несентиментальный",
        "Нестабильный",
        "Порядочный",
        "Светский",
        "Пустой",
        "Неопределённый",
        "Продажный",
        "Ядовитый",
        "Рисковый",
        "Мстительный",
        "Живой",
        "Уязвимый",
        "Тёплый",
        "Безвольный",
        "Слабый",
        "Воспитанный",
        "С добрыми намерениями",
        "Начитанный",
        "Разносторонний",
        "Прихотливый",
        "Своевольный",
        "Располагающий",
        "Мудрый",
        "Исполненный надежд",
        "Остроумный",
        "Юный",
        "Чудаковатый"
      ]
    },
    {
      id: "traits",
      name: "Уникальные/необычные особенности",
      type: "list",
      icon: "mdi-guy-fawkes-mask",
      sizing: 6
    },
    {
      id: "statsList",
      name: "Характеристики/Атрибуты",
      type: "list",
      icon: "mdi-sword",
      sizing: 12,
      predefinedListExtras: {
        reverse: true,
        affix: "Характеристика/Атрибут",
        extraSelectValueList: RPGSystemsStats
      }
    },
    {
      id: "possessedItems",
      name: "Снаряжение/предметы",
      type: "manyToNoneRelationship",
      icon: "mdi-sword",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "items"
      }
    },
    {
      id: "possessedCurrencies",
      name: "Богатство/валюты",
      type: "manyToNoneRelationship",
      icon: "fas fa-coins",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "currencies"
      }
    },
    {
      id: "knownSkills",
      name: "Известные навыки/способности",
      type: "manyToNoneRelationship",
      icon: "mdi-sword-cross",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "skills"
      }
    },

    {
      id: "knownSpells",
      name: "Известные заклинания",
      type: "manyToNoneRelationship",
      icon: "mdi-sword-cross",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "skills"
      }
    },
    {
      id: "knownLanguage",
      name: "Известные языки",
      type: "manyToNoneRelationship",
      icon: "mdi-book-alphabet",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "languages"
      }
    },
    {
      id: "knownMagic",
      name: "Известные магические учения",
      type: "manyToNoneRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic"
      }
    },
    {
      id: "knownTech",
      name: "Известные технологии/науки",
      type: "manyToNoneRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech"
      }
    },
    {
      id: "breakRelationships",
      name: "Связи",
      type: "break",
      sizing: 12
    },
    {
      id: "parentsOfCharacter",
      name: "Родители персонажа",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "childOfCharacter"
      }
    },
    {
      id: "childOfCharacter",
      name: "Дети персонажа",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "parentsOfCharacter"
      }
    },
    {
      id: "relativesOfCharacter",
      name: "Другие родственники персонажа",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "relativesOfCharacter"
      }
    },
    {
      id: "allyResCharacter",
      name: "Друзья/Союзники",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "allyResCharacter"
      }
    },
    {
      id: "enemydResCharacter",
      name: "Враги",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "enemydResCharacter"
      }
    },
    {
      id: "complicatedResCharacter",
      name: "Сложные отношения с",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "complicatedResCharacter"
      }
    },
    {
      id: "breakNotes",
      name: "Связи — Сюжет/Лор",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedConnectedNotes",
      name: "Связано с заметками о мире/другими заметками",
      type: "manyToManyRelationship",
      icon: "mdi-script-text-outline",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "loreNotes",
        connectedField: "pairedConnectedCharacter"
      }
    },
    {
      id: "pairedConnectedMyths",
      name: "Связано с мифами, легендами и историями",
      type: "manyToManyRelationship",
      icon: "fas fa-journal-whills",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "myths",
        connectedField: "pairedConnectedCharacter"
      }
    },
    {
      id: "breakOther",
      name: "Связи — Мир",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedEvent",
      name: "Участие в событиях",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "pairedConnectedPlaces",
      name: "Связано с локациями",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedConnectedCharacter"
      }
    },
    {
      id: "pairedLanguage",
      name: "Связано с языками",
      type: "manyToManyRelationship",
      icon: "mdi-book-alphabet",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "languages",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "relatedCultures",
      name: "Связанные культуры/искусство",
      type: "manyToManyRelationship",
      icon: "fas fa-archway",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "culture",
        connectedField: "relatedCharacters"
      }
    },
    {
      id: "breakPolitics",
      name: "Связи — Группы/Учения",
      type: "break",
      sizing: 12
    },

    {
      id: "leadingPoliticalLeaders",
      name: "Лидер идеологий/политических групп",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "leadingCharacters"
      }
    },
    {
      id: "pairedConnectionPolGroup",
      name: "Связано с идеологиями/политическими группами",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedConnectionCharacter"
      }
    },
    {
      id: "pairedBelongingPolGroup",
      name: "Состоит в идеологиях/политических группах",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedBelongingCharacter"
      }
    },
    {
      id: "pairedAllyPolGroup",
      name: "Союзник идеологий/политических групп",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedAllyCharacter"
      }
    },
    {
      id: "pairedEnemyPolGroup",
      name: "Враг идеологий/политических групп",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedEnemyCharacter"
      }
    },

    {
      id: "leadingOtherLeaders",
      name: "Лидер организаций/других групп",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "leadingCharacters"
      }
    },
    {
      id: "pairedConnectionOtherGroups",
      name: "Связано с организациями/другими группами",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedConnectionCharacter"
      }
    },
    {
      id: "pairedBelongingOtherGroups",
      name: "Состоит в организациях/других группах",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedBelongingCharacter"
      }
    },
    {
      id: "pairedAllyOtherGroups",
      name: "Союзник организаций/других групп",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedAllyCharacter"
      }
    },
    {
      id: "pairedEnemyOtherGroups",
      name: "Враг организаций/других групп",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedEnemyCharacter"
      }
    },

    {
      id: "leadingReligiousLeaders",
      name: "Лидер учений/религиозных групп",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "leadingCharacters"
      }
    },
    {
      id: "pairedConnectionRelGroup",
      name: "Связано с учениями/религиозными группами",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedConnectionCharacter"
      }
    },
    {
      id: "pairedBelongingRelGroup",
      name: "Состоит в учениях/религиозных группах",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedBelongingCharacter"
      }
    },
    {
      id: "pairedAllyRelGroup",
      name: "Союзник учений/религиозных групп",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedAllyCharacter"
      }
    },
    {
      id: "pairedEnemyRelGroup",
      name: "Враг учений/религиозных групп",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedEnemyCharacter"
      }
    },

    {
      id: "leadingMagicalLeaders",
      name: "Лидер школ магии/магических групп",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "leadingCharacters"
      }
    },
    {
      id: "pairedConnectionMagicGroup",
      name: "Связано со школами магии/магическими группами",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedConnectionCharacter"
      }
    },
    {
      id: "pairedBelongingMagicGroup",
      name: "Состоит в школах магии/магических группах",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedBelongingCharacter"
      }
    },
    {
      id: "pairedAllyMagicGroup",
      name: "Союзник школ магии/магических групп",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedAllyCharacter"
      }
    },
    {
      id: "pairedEnemyMagicGroup",
      name: "Враг школ магии/магических групп",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedEnemyCharacter"
      }
    },

    {
      id: "leadingTechLeaders",
      name: "Лидер наук/технологических групп",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "leadingCharacters"
      }
    },
    {
      id: "pairedConnectionTechGroup",
      name: "Связано с науками/технологическими группами",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedConnectionCharacter"
      }
    },
    {
      id: "pairedBelongingTechGroup",
      name: "Состоит в науках/технологических группах",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedBelongingCharacter"
      }
    },
    {
      id: "pairedAllyTechGroup",
      name: "Союзник наук/технологических групп",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedAllyCharacter"
      }
    },
    {
      id: "pairedEnemyTechGroup",
      name: "Враг наук/технологических групп",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedEnemyCharacter"
      }
    },
    {
      id: "breakDetails",
      name: "Связи — Детали",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedSkills",
      name: "Связано с навыками/заклинаниями/другим",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "skills",
        connectedField: "pairedCharacterSkills"
      }
    },
    {
      id: "pairedConnectedItems",
      name: "Связано с предметами",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedConnectedCharacter"
      }
    },
    {
      id: "pairedConditionsConnected",
      name: "Связано с недугами/благами/состояниями",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedCharactersConnected"
      }
    },
    {
      id: "pairedResources",
      name: "Связано с ресурсами/материалами",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "breakSpoilers",
      name: "Секреты/Спойлеры/Заметки мастера",
      type: "break",
      sizing: 12,
      isSpoiler: true
    },
    {
      id: "spoilerNotes",
      name: "Секреты/Спойлеры/Заметки мастера",
      type: "wysiwyg",
      icon: "fas fa-mask",
      sizing: 12,
      isSpoiler: true,
      tooltip:
        `Это поле по умолчанию не экспортируется при использовании функции экспорта документа.
        <br>
        Его нужно включить вручную, если вы хотите его экспортировать.
        `
    }
  ]
}
