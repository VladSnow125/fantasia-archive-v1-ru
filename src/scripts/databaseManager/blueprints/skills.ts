import { RPGSystemsStats } from "./../extraFieldLists/RPGSystemsStats"
import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const skillsBlueprint: I_Blueprint = {
  _id: "skills",
  order: 180,
  namePlural: "Навыки/Заклинания/Прочее",
  nameSingular: "Навык/Заклинание/Прочее",
  icon: "mdi-sword-cross",
  category: "Детали",
  extraFields: [
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
      icon: "mdi-sword-cross",
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
        connectedObjectType: "skills"
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
      id: "statsListRequired",
      name: "Требуемые характеристики/атрибуты",
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
      id: "statsListProvided",
      name: "Предоставляемые характеристики/атрибуты",
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
      id: "traits",
      name: "Уникальные/определяющие особенности",
      type: "list",
      icon: "mdi-guy-fawkes-mask",
      sizing: 6
    },
    {
      id: "levelSkill",
      name: "Сложность использования",
      type: "multiSelect",
      icon: "mdi-meditation",
      sizing: 3,
      tooltip: "Это поле определяет, насколько сложно освоить или использовать этот навык/заклинание/прочее.",
      predefinedSelectValues: [
        "Ученик",
        "Подмастерье",
        "Умелый",
        "Продвинутый",
        "Эксперт",
        "Мастер",
        "Гранд-мастер",
        "Гений",
        "Вундеркинд",
        "За пределами шкалы"
      ]
    },
    {
      id: "typeSkill",
      name: "Тип",
      type: "multiSelect",
      icon: "fas fa-hand-sparkles",
      sizing: 3,
      predefinedSelectValues: [
        "Способность",
        "Атлетический навык",
        "Благословение",
        "Ремесленный навык",
        "Творческая способность",
        "Проклятие",
        "Разрушительная способность",
        "Особенность/черта",
        "Боевой навык",
        "Магический навык",
        "Воинский навык",
        "Умственный навык",
        "Пассивная способность",
        "Физический навык",
        "Производственный навык",
        "Психический навык",
        "Навык",
        "Заклинание",
        "Другое"
      ]
    },
    {
      id: "pairedSkills",
      name: "Связанные навыки/заклинания/прочее",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "skills",
        connectedField: "pairedSkills"
      }
    },
    {
      id: "prerequisiteSkills",
      name: "Предшествующие навыки/заклинания/прочее",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "skills",
        connectedField: "postrequisiteSkills"
      }
    },
    {
      id: "postrequisiteSkills",
      name: "Последующие навыки/заклинания/прочее",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "skills",
        connectedField: "prerequisiteSkills"
      }
    },
    {
      id: "pairedItemsCommon",
      name: "Часто используется с предметами",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 6,
      tooltip: "Это поле предназначено для связей вроде «меч для фехтования».",
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedSkillsCommon"
      }
    },
    {
      id: "pairedItemsUsing",
      name: "Предметы, которые могут использовать этот навык/заклинание/прочее",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 6,
      tooltip: "Это поле предназначено для предметов вроде огненного жезла, который позволяет метать огненные шары.",
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedSkillsUsing"
      }
    },
    {
      id: "pairedItemsRequire",
      name: "Требуемые предметы",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedSkillsRequire"
      }
    },
    {
      id: "pairedItemsCreate",
      name: "Создаваемые предметы",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedSkillsCreate"
      }
    },
    {
      id: "pairedConnectedProfessions",
      name: "Часто используется профессиями/классами",
      type: "manyToManyRelationship",
      icon: "fab fa-pied-piper-hat",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "professions",
        connectedField: "pairedConnectedSkills"
      }
    },
    {
      id: "relatedCultures",
      name: "Связано с культурами/искусством",
      type: "manyToManyRelationship",
      icon: "fas fa-archway",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "culture",
        connectedField: "pairedSkills"
      }
    },
    {
      id: "pairedResourcesRequire",
      name: "Требуемые ресурсы/материалы",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "pairedResourcesRequire"
      }
    },
    {
      id: "pairedResourcesCreate",
      name: "Создаваемые ресурсы/материалы",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "pairedResourcesCreate"
      }
    },
    {
      id: "pairedConditionsPositive",
      name: "Вызывает следующие блага",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedSkillsPositive"
      }
    },
    {
      id: "pairedConditionsNegative",
      name: "Вызывает следующие недуги",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedSkillsNegative"
      }
    },
    {
      id: "pairedConditionsOther",
      name: "Вызывает следующие прочие состояния",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedSkillsOther"
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
      name: "Традиции и обычаи, связанные с навыком/заклинанием/прочим",
      type: "wysiwyg",
      sizing: 12
    },
    {
      id: "breakStory",
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
        connectedField: "pairedConnectedSkills"
      }
    },
    {
      id: "pairedMyths",
      name: "Связано с мифами, легендами и историями",
      type: "manyToManyRelationship",
      icon: "fas fa-journal-whills",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "myths",
        connectedField: "pairedSkills"
      }
    },
    {
      id: "breakWorld",
      name: "Связи — Мир",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedCharacterSkills",
      name: "Связано с персонажами",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedSkills"
      },
      tooltip:
        `Это поле предназначено для связи с навыком/заклинанием таких людей, как изобретатели, известные пользователи и подобные персонажи.
        <br>
        Для обычных пользователей лучше использовать отдельные односторонние связи в документе персонажа.
        `
    },
    {
      id: "pairedLocationsSkills",
      name: "Связано с локациями/географией",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedSkills"
      }
    },
    {
      id: "pairedRacesSkills",
      name: "Связано с видами/расами/флорой/фауной",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "pairedSkills"
      }
    },
    {
      id: "pairedEventSkills",
      name: "Навыки/прочее, связанные с событиями",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "pairedSkills"
      },
      tooltip:
        `Это поле позволяет связать немагические навыки и другие способности с событиями.
        `
    },
    {
      id: "pairedEventSpells",
      name: "Заклинания, связанные с событиями",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "pairedSpells"
      },
      tooltip:
        `Это поле позволяет связать магические навыки и другие способности с событиями.
        `
    },
    {
      id: "breakGroups",
      name: "Связи — Группы/Учения",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedPoliticalGroupsSkills",
      name: "Связано с идеологиями/политическими группами",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedSkills"
      }
    },
    {
      id: "pairedReligiousGroupsSkills",
      name: "Связано с учениями/религиозными группами",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedSkills"
      }
    },
    {
      id: "pairedOtherGroupsSkills",
      name: "Связано с организациями/другими группами",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedSkills"
      }
    },
    {
      id: "pairedMagicGroupsSkills",
      name: "Связано со школами магии/магическими группами",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedSkills"
      }
    },
    {
      id: "pairedTechGroupsSkills",
      name: "Связано с науками/технологическими группами",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedSkills"
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
