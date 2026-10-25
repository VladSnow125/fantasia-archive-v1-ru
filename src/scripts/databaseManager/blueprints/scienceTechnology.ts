import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const techBlueprint: I_Blueprint = {
  _id: "tech",
  order: 240,
  namePlural: "Науки/Технологические группы",
  nameSingular: "Наука/Технологическая группа",
  icon: "fas fa-wrench",
  category: "Группы/Учения",
  extraFields: [
    {
      id: "leaders",
      name: "Ведущие фигуры (устаревшее)",
      type: "manyToNoneRelationship",
      icon: "mdi-crown",
      tooltip: `
        Это поле устарело и больше не выполняет никакой функции.
        <br>
        Перенесите свои данные в соответствующие новые поля.
        <br>
        Это поле автоматически исчезнет, когда из него будут удалены все данные.
      `,
      isLegacy: true,
      sizing: 12,
      relationshipSettings: {
        connectedObjectType: "characters"
      }
    },
    {
      id: "pairedCharacter",
      name: "Пользователи технологий/наук",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 12,
      tooltip: `
        Это поле устарело и больше не выполняет никакой функции.
        <br>
        Перенесите свои данные в соответствующие новые поля.
        <br>
        Это поле автоматически исчезнет, когда из него будут удалены все данные.
      `,
      isLegacy: true,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedTech"
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
      icon: "fas fa-wrench",
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
        connectedObjectType: "tech"
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
      id: "succedingTechGroup",
      name: "Последующие науки/технологические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "preceedingTechGroup"
      }
    },
    {
      id: "preceedingTechGroup",
      name: "Предшествующие науки/технологические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "succedingTechGroup"
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
      id: "headquarters",
      name: "Штаб-квартира",
      type: "singleToNoneRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "locations"
      }
    },
    {
      id: "followerName",
      name: "Название для участников/последователей",
      type: "text",
      icon: "fas fa-file-signature",
      sizing: 3
    },
    {
      id: "population",
      name: "Количество участников/пользователей",
      type: "text",
      icon: "mdi-account-group",
      sizing: 2,
      tooltip: "Количество участников этой научной школы/учения."
    },
    {
      id: "followers",
      name: "Количество последователей/затронутых",
      type: "text",
      icon: "mdi-account-group-outline",
      sizing: 3,
      tooltip: "Количество людей, на которых влияет эта научная школа/учение или которые её придерживаются."
    },

    {
      id: "leadingCharacters",
      name: "Ведущие фигуры",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "leadingTechLeaders"
      }
    },
    {
      id: "typeTech",
      name: "Тип",
      type: "multiSelect",
      icon: "fas fa-cogs",
      sizing: 3,
      predefinedSelectValues: [
        "Фабрика/Производство",
        "Изобретение",
        "Механизмы",
        "Маготехническое творение",
        "Школа технологий",
        "Научное/технологическое учреждение",
        "Методика",
        "Другое"
      ]
    },
    {
      id: "formTech",
      name: "Научные отрасли",
      type: "multiSelect",
      icon: "fas fa-vial",
      sizing: 3,
      predefinedSelectValues: [
        "Сельскохозяйственные науки",
        "Астрология",
        "Автоматизация и прикладная логика",
        "Биология",
        "Химия",
        "Экономика",
        "Инженерия",
        "Геология",
        "История",
        "Лингвистика",
        "Логика",
        "Магиология",
        "Математика",
        "Медицина",
        "Педагогика",
        "Физика",
        "Политология",
        "Психология",
        "Социология",
        "Статистика",
        "Другое"
      ]
    },
    {
      id: "pairedTech",
      name: "Связанные технологии/науки",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedTech"
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
        connectedField: "pairedTechGroupsSkills"
      }
    },
    {
      id: "pairedConditions",
      name: "Связь с недугами/дарами/состояниями",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedTechGroups"
      }
    },
    {
      id: "pairedConnectedResources",
      name: "Важные ресурсы/материалы",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "pairedConnectedTechGroups"
      }
    },
    {
      id: "connectedRaces",
      name: "Распространённые виды/расы/флора/фауна",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "commonInTechGroups"
      }
    },
    {
      id: "localLanguages",
      name: "Распространённые языки",
      type: "manyToManyRelationship",
      icon: "mdi-book-alphabet",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "languages",
        connectedField: "usedInTechGroups"
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
        connectedField: "pairedConnectedTechGroups"
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
        connectedField: "pairedConnectedTechGroups"
      }
    },

    {
      id: "breakWorld",
      name: "Connections - World",
      type: "break",
      sizing: 12
    },

    {
      id: "governLocations",
      name: "Ruled/Influenced Locations",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "governTech"
      }
    },
    {
      id: "connectedLocations",
      name: "Connected Locations",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "connectedTech"
      }
    },
    {
      id: "connectedEvents",
      name: "Connected Events",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "connectedTech"
      }
    },
    {
      id: "pairedConnectedCultures",
      name: "Connected to Cultures/Art",
      type: "manyToManyRelationship",
      icon: "fas fa-archway",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "culture",
        connectedField: "pairedConnectedTechGroups"
      }
    },
    {
      id: "pairedConnectionCharacter",
      name: "Connected Characters",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedConnectionTechGroup"
      }
    },
    {
      id: "pairedBelongingCharacter",
      name: "Prominent Members",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedBelongingTechGroup"
      }
    },
    {
      id: "pairedAllyCharacter",
      name: "Prominent Allies",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedAllyTechGroup"
      }
    },
    {
      id: "pairedEnemyCharacter",
      name: "Prominent Enemies",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedEnemyTechGroup"
      }
    },

    {
      id: "breakPolitics",
      name: "Connections - Groups/Teachings",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedConnectedPolGroups",
      name: "Connected Ideologies/Political groups",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedConnectedTechGroups"
      }
    },
    {
      id: "pairedAllyPolGroups",
      name: "Allied Ideologies/Political groups",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedAllyTechGroups"
      }
    },
    {
      id: "pairedEnemyPolGroups",
      name: "Enemy Ideologies/Political groups",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedEnemyTechGroups"
      }
    },
    {
      id: "pairedConnectedOtherGroups",
      name: "Connected Organizations/Other groups",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedConnectedTechGroups"
      }
    },
    {
      id: "pairedAllyOtherGroups",
      name: "Allied Organizations/Other groups",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedAllyTechGroups"
      }
    },
    {
      id: "pairedEnemyOtherGroups",
      name: "Enemy Organizations/Other groups",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedEnemyTechGroups"
      }
    },
    {
      id: "pairedConnectedReligiousGroups",
      name: "Connected Teachings/Religious groups",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedConnectedTechGroups"
      }
    },
    {
      id: "pairedAllyReligiousGroups",
      name: "Allied Teachings/Religious groups",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedAllyTechGroups"
      }
    },
    {
      id: "pairedEnemyReligiousGroups",
      name: "Enemy Teachings/Religious groups",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedEnemyTechGroups"
      }
    },
    {
      id: "pairedConnectedMagicalGroups",
      name: "Connected Schools of Magic/Magical groups",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedConnectedTechGroups"
      }
    },
    {
      id: "pairedAllyMagicalGroups",
      name: "Allied Schools of Magic/Magical groups",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedAllyTechGroups"
      }
    },
    {
      id: "pairedEnemyMagicalGroups",
      name: "Enemy Schools of Magic/Magical groups",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedEnemyTechGroups"
      }
    },
    {
      id: "pairedConnectedTechGroups",
      name: "Connected Sciences/Technological groups",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedConnectedTechGroups"
      }
    },
    {
      id: "pairedAllyTechGroups",
      name: "Allied Sciences/Technological groups",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedAllyTechGroups"
      }
    },
    {
      id: "pairedEnemyTechGroups",
      name: "Enemy Sciences/Technological groups",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedEnemyTechGroups"
      }
    },
    {
      id: "breakDetails",
      name: "Connections - Details",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedConnectedItems",
      name: "Connected to Items",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedConnectedTechGroups"
      }
    },
    {
      id: "pairedConnectedProfessions",
      name: "Connected to Occupations/Classes",
      type: "manyToManyRelationship",
      icon: "fab fa-pied-piper-hat",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "professions",
        connectedField: "pairedConnectedTechGroups"
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
