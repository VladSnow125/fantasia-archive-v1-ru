import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const politicalGroupsBlueprint: I_Blueprint = {
  _id: "politicalGroups",
  order: 280,
  namePlural: "Идеологии/Политические группы",
  nameSingular: "Идеология/Политическая группа",
  icon: "mdi-bank-outline",
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
        Это поле исчезнет автоматически, когда все данные из него будут удалены.
      `,
      isLegacy: true,
      sizing: 12,
      relationshipSettings: {
        connectedObjectType: "characters"
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
      icon: "mdi-bank-outline",
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
        connectedObjectType: "politicalGroups"
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
      id: "succedingPolGroup",
      name: "Последующие идеологии/политические группы",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "preceedingPolGroup"
      }
    },
    {
      id: "preceedingPolGroup",
      name: "Предшествующие идеологии/политические группы",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "succedingPolGroup"
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
      name: "Число участников",
      type: "text",
      icon: "mdi-account-group",
      sizing: 2,
      tooltip: "Количество участников этой политической группы/идеологии."
    },
    {
      id: "followers",
      name: "Число последователей/подданных",
      type: "text",
      icon: "mdi-account-group-outline",
      sizing: 3,
      tooltip: "Количество людей, на которых влияет эта политическая группа/идеология или которые за ней следуют."
    },

    {
      id: "leadingCharacters",
      name: "Ведущие фигуры",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "leadingPoliticalLeaders"
      }
    },

    {
      id: "formGovernment",
      name: "Форма правления",
      type: "multiSelect",
      icon: "fas fa-person-booth",
      sizing: 6,
      predefinedSelectValues: [
        "Анархизм",
        "Анархо-капитализм",
        "Анархия",
        "Аристократия",
        "Автократия",
        "Коммунизм",
        "Корпортократия",
        "Демократия",
        "Деспотизм",
        "Диктатура",
        "Фашизм",
        "Феодализм",
        "Гениократия",
        "Матриархат",
        "Монархия",
        "Олигархия",
        "Патриархат",
        "Республика",
        "Социализм",
        "Технократия",
        "Теократия",
        "Теодемократия",
        "Тирания"
      ]
    },
    {
      id: "realedTeachings",
      name: "Связанные идеологии",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "realedTeachings"
      }
    },
    {
      id: "localLanguages",
      name: "Используемые языки",
      type: "manyToManyRelationship",
      icon: "mdi-book-alphabet",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "languages",
        connectedField: "usedInPoliticalGroups"
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
        connectedField: "commonInPoliticalGroups"
      }
    },
    {
      id: "localCurrencies",
      name: "Используемые валюты",
      type: "manyToManyRelationship",
      icon: "fas fa-coins",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "currencies",
        connectedField: "usedInPoliticalGroups"
      }
    },
    {
      id: "pairedConnectedResources",
      name: "Важные ресурсы/материалы",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "pairedConnectedPoliticalGroups"
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
      name: "Связано с заметками о мире/другими заметками",
      type: "manyToManyRelationship",
      icon: "mdi-script-text-outline",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "loreNotes",
        connectedField: "pairedConnectedPolGroups"
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
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "breakWorld",
      name: "Связи — Мир",
      type: "break",
      sizing: 12
    },
    {
      id: "governLocations",
      name: "Управляемые локации/локации под влиянием",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "governPolitical"
      }
    },
    {
      id: "connectedLocations",
      name: "Связанные локации",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "connectedPolitical"
      }
    },
    {
      id: "connectedEvents",
      name: "Связанные события",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "connectedPolitical"
      }
    },
    {
      id: "pairedConnectedCultures",
      name: "Связано с культурами/искусством",
      type: "manyToManyRelationship",
      icon: "fas fa-archway",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "culture",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedConnectionCharacter",
      name: "Связанные персонажи",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedConnectionPolGroup"
      }
    },
    {
      id: "pairedBelongingCharacter",
      name: "Видные члены",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedBelongingPolGroup"
      }
    },
    {
      id: "pairedAllyCharacter",
      name: "Видные союзники",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedAllyPolGroup"
      }
    },
    {
      id: "pairedEnemyCharacter",
      name: "Видные враги",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedEnemyPolGroup"
      }
    },
    {
      id: "breakPolitics",
      name: "Связи — Группы/Учения",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedConnectedPolGroups",
      name: "Связанные идеологии/политические группы",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedAllyPolGroups",
      name: "Союзные идеологии/политические группы",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedAllyPolGroups"
      }
    },
    {
      id: "pairedEnemyPolGroups",
      name: "Враждующие идеологии/политические группы",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedEnemyPolGroups"
      }
    },
    {
      id: "pairedConnectedOtherGroups",
      name: "Связанные организации/другие группы",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedAllyOtherGroups",
      name: "Союзные организации/другие группы",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedAllyPolGroups"
      }
    },
    {
      id: "pairedEnemyOtherGroups",
      name: "Враждующие организации/другие группы",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedEnemyPolGroups"
      }
    },

    {
      id: "pairedConnectedReligiousGroups",
      name: "Связанные учения/религиозные группы",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedAllyReligiousGroups",
      name: "Союзные учения/религиозные группы",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedAllyPolGroups"
      }
    },
    {
      id: "pairedEnemyReligiousGroups",
      name: "Враждующие учения/религиозные группы",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedEnemyPolGroups"
      }
    },
    {
      id: "pairedConnectedMagicalGroups",
      name: "Связанные школы магии/магические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedAllyMagicalGroups",
      name: "Союзные школы магии/магические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedAllyPolGroups"
      }
    },
    {
      id: "pairedEnemyMagicalGroups",
      name: "Враждующие школы магии/магические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedEnemyPolGroups"
      }
    },

    {
      id: "pairedConnectedTechGroups",
      name: "Связанные науки/технологические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedAllyTechGroups",
      name: "Союзные науки/технологические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedAllyPolGroups"
      }
    },
    {
      id: "pairedEnemyTechGroups",
      name: "Враждующие науки/технологические группы",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedEnemyPolGroups"
      }
    },
    {
      id: "breakOther",
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
        connectedField: "pairedPoliticalGroupsSkills"
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
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedConnectedProfessions",
      name: "Связано с профессиями/классами",
      type: "manyToManyRelationship",
      icon: "fab fa-pied-piper-hat",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "professions",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedConditions",
      name: "Связано с недугами/дарами/состояниями",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedRacesPoliticalGroups"
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
