import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const locationsBlueprint: I_Blueprint = {
  _id: "locations",
  order: 360,
  namePlural: "Локации/География",
  nameSingular: "Локация/География",
  icon: "mdi-map-marker-radius",
  category: "Мир",
  extraFields: [
    {
      id: "pairedOriginCharacters",
      name: "Персонажи, происходящие из локации (устаревшее)",
      type: "manyToSingleRelationship",
      icon: "mdi-account",
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
        connectedObjectType: "characters",
        connectedField: "pairedOriginLocation"
      }
    },
    {
      id: "pairedCurrentCharacters",
      name: "Персонажи, живущие в локации сейчас (устаревшее)",
      type: "manyToSingleRelationship",
      icon: "mdi-account",
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
        connectedObjectType: "characters",
        connectedField: "pairedCurrentLocation"
      }
    },
    {
      id: "pairedDemiseCharacters",
      name: "Персонажи, погибшие в локации (устаревшее)",
      type: "manyToSingleRelationship",
      icon: "mdi-account",
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
        connectedObjectType: "characters",
        connectedField: "pairedDemiseLocation"
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
      icon: "mdi-map-marker-radius",
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
        connectedObjectType: "locations"
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
      id: "succedingLocations",
      name: "Последующие локации/география",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "preceedingLocations"
      }
    },
    {
      id: "preceedingLocations",
      name: "Предшествующие локации/география",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "succedingLocations"
      }
    },
    {
      id: "creationTime",
      name: "Дата создания",
      type: "text",
      icon: "mdi-timer-sand-empty",
      sizing: 2
    },
    {
      id: "endTIme",
      name: "Дата окончания",
      type: "text",
      icon: "mdi-timer-sand-full",
      sizing: 2
    },
    {
      id: "traits",
      name: "Необычные особенности/черты",
      type: "list",
      icon: "mdi-guy-fawkes-mask",
      sizing: 4
    },
    {
      id: "locationType",
      name: "Тип локации",
      type: "singleSelect",
      icon: "fas fa-monument",
      sizing: 4,
      predefinedSelectValues: [
        "Область",
        "Водоём",
        "Здание",
        "Город",
        "Континент",
        "Страна",
        "Лес",
        "Галактика",
        "Посёлок",
        "Остров",
        "Достопримечательность",
        "Массив суши",
        "Луна",
        "Гора",
        "Планета",
        "Планетная система",
        "Звёздная система",
        "Сооружение",
        "Форма рельефа",
        "Городок",
        "Вселенная",
        "Деревня",
        "Другое",
        "Уникальное"
      ]
    },
    {
      id: "population",
      name: "Население",
      type: "text",
      icon: "mdi-account-group",
      sizing: 2
    },
    {
      id: "size",
      name: "Размер",
      type: "text",
      icon: "mdi-map",
      sizing: 2
    },
    {
      id: "pairedLanguages",
      name: "Местные языки",
      type: "manyToManyRelationship",
      icon: "mdi-book-alphabet",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "languages",
        connectedField: "pairedLocations"
      }
    },
    {
      id: "pairedCurrencies",
      name: "Местные валюты",
      type: "manyToManyRelationship",
      icon: "fas fa-coins",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "currencies",
        connectedField: "pairedLocations"
      }
    },
    {
      id: "relatedCultures",
      name: "Местные культуры/искусство",
      type: "manyToManyRelationship",
      icon: "fas fa-archway",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "culture",
        connectedField: "relatedLocations"
      }
    },
    {
      id: "connectedProfessions",
      name: "Распространённые занятия/классы",
      type: "manyToManyRelationship",
      icon: "fab fa-pied-piper-hat",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "professions",
        connectedField: "connectedLocations"
      }
    },
    {
      id: "connectedResources",
      name: "Местные ресурсы/материалы",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "connectedLocations"
      }
    },
    {
      id: "neighbourLocations",
      name: "Соседние локации",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "neighbourLocations"
      }
    },
    {
      id: "connectedLocations",
      name: "Другие связанные локации",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "connectedLocations"
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
      id: "traditions",
      name: "Традиции и обычаи",
      type: "wysiwyg",
      icon: "mdi-book-open-page-variant-outline",
      sizing: 12
    },
    {
      id: "breakResident",
      name: "Информация о жителях",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedOriginCharactersNew",
      name: "Персонажи, происходящие из локации",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedOriginLocationNew"
      }
    },
    {
      id: "pairedCurrentCharactersNew",
      name: "Персонажи, живущие в локации сейчас",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedCurrentLocationNew"
      }
    },
    {
      id: "pairedDemiseCharactersNew",
      name: "Персонажи, погибшие в локации",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedDemiseLocationNew"
      }
    },
    {
      id: "pairedConnectedCharacter",
      name: "Другие связанные персонажи",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedConnectedPlaces"
      }
    },
    {
      id: "pairedConnectedRaces",
      name: "Местные виды/расы/флора/фауна",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "pairedConnectedPlaces"
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
      name: "Связь с заметками о мире/другими заметками",
      type: "manyToManyRelationship",
      icon: "mdi-script-text-outline",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "loreNotes",
        connectedField: "pairedConnectedLocation"
      }
    },
    {
      id: "pairedConnectedMyths",
      name: "Связь с мифами, легендами и историями",
      type: "manyToManyRelationship",
      icon: "fas fa-journal-whills",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "myths",
        connectedField: "pairedConnectedLocations"
      }
    },

    {
      id: "breakOther",
      name: "Связи — Мир и детали",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedEvent",
      name: "Связь с событиями",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "pairedLocations"
      }
    },
    {
      id: "pairedSkills",
      name: "Связь с навыками/заклинаниями/другим",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "skills",
        connectedField: "pairedLocationsSkills"
      }
    },
    {
      id: "pairedConnectedItems",
      name: "Связь с предметами",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedConnectedLocations"
      }
    },

    {
      id: "pairedConditionsPositive",
      name: "Подвержена благам",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedLocationsPositive"
      }
    },
    {
      id: "pairedConditionsNegative",
      name: "Подвержена недугам",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedLocationsNegative"
      }
    },
    {
      id: "pairedConditionsOther",
      name: "Подвержена другим состояниям",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedLocationsOther"
      }
    },

    {
      id: "breakGroups",
      name: "Связи — Группы/Учения",
      type: "break",
      sizing: 12
    },
    {
      id: "governPolitical",
      name: "Правящие идеологии/политические группы",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "governLocations"
      }
    },
    {
      id: "connectedPolitical",
      name: "Связанные идеологии/политические группы",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "connectedLocations"
      }
    },
    {
      id: "governOther",
      name: "Правящие организации/другие группы",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "governLocations"
      }
    },
    {
      id: "connectedOther",
      name: "Связанные организации/другие группы",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "connectedLocations"
      }
    },

    {
      id: "governReligious",
      name: "Правящие учения/религиозные группы",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "governLocations"
      }
    },
    {
      id: "connectedReligious",
      name: "Связанные учения/религиозные группы",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "collectedLocations"
      }
    },
    {
      id: "governMagical",
      name: "Правящие школы магии/магические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "governLocations"
      }
    },
    {
      id: "connectedMagical",
      name: "Связанные школы магии/магические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "connectedLocations"
      }
    },
    {
      id: "governTech",
      name: "Правящие науки/технологические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "governLocations"
      }
    },
    {
      id: "connectedTech",
      name: "Связанные науки/технологические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "connectedLocations"
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
