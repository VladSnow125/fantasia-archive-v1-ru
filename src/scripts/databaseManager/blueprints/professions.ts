import { I_Blueprint } from "../../../interfaces/I_Blueprint"
import { RPGSystemsStats } from "../extraFieldLists/RPGSystemsStats"
export const professionsBlueprint: I_Blueprint = {
  _id: "professions",
  order: 160,
  namePlural: "Занятия/Классы",
  nameSingular: "Занятие/Класс",
  icon: "fab fa-pied-piper-hat",
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
      icon: "fab fa-pied-piper-hat",
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
        connectedObjectType: "professions"
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
      name: "Титулы и ранги",
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
      id: "features",
      name: "Примечательные особенности",
      type: "list",
      icon: "mdi-guy-fawkes-mask",
      sizing: 8,
      predefinedListExtras: {
        affix: "Примечание",
        extraSelectValueList: [
        ]
      }
    },

    {
      id: "professionType",
      name: "Тип занятия/класса",
      type: "multiSelect",
      icon: "mdi-pickaxe",
      sizing: 4,
      predefinedSelectValues: [
        "Аристократический",
        "Бюрократический",
        "Кастовый",
        "Класс персонажа",
        "Гражданский",
        "Хобби",
        "Кабальный",
        "Наследственный",
        "Врождённый",
        "Легальный",
        "Магический",
        "Воинский",
        "Медицинский",
        "Занятие",
        "Политический",
        "Частный",
        "Профессиональный",
        "Религиозный",
        "Научный",
        "Социальный класс",
        "Торговля",
        "Неквалифицированный",
        "Другое"
      ]
    },
    {
      id: "relatedProfessions",
      name: "Связанные занятия/классы",
      type: "manyToManyRelationship",
      icon: "fab fa-pied-piper-hat",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "professions",
        connectedField: "relatedProfessions"
      }
    },
    {
      id: "pairedCharacter",
      name: "Персонажи этого занятия/класса",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedProfession"
      }
    },
    {
      id: "relatedCultures",
      name: "Связано с культурами/искусством",
      type: "manyToManyRelationship",
      icon: "fas fa-archway",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "culture",
        connectedField: "relatedProfessions"
      }
    },
    {
      id: "pairedUsedSkills",
      name: "Обычно используемые навыки/заклинания/прочее",
      type: "manyToNoneRelationship",
      icon: "mdi-sword-cross",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "skills"
      }
    },
    {
      id: "pairedUsedItems",
      name: "Обычно используемые предметы",
      type: "manyToNoneRelationship",
      icon: "mdi-sword",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "items"
      }
    },
    {
      id: "commonRaces",
      name: "Распространённые виды/расы/флора/фауна",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "commonProfessions"
      }
    },
    {
      id: "usedResources",
      name: "Используемые ресурсы/материалы",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "usedProfessions"
      }
    },
    {
      id: "producedResources",
      name: "Производимые ресурсы/материалы",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "producedProfessions"
      }
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
      id: "description",
      name: "Описание и история",
      type: "wysiwyg",
      icon: "mdi-book-open-page-variant-outline",
      sizing: 12
    },
    {
      id: "traditions",
      name: "Традиции и обычаи, связанные с занятием/классом",
      type: "wysiwyg",
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
        connectedField: "pairedConnectedProfessions"
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
        connectedField: "pairedProfessions"
      }
    },

    {
      id: "breakWorld",
      name: "Связи — Мир",
      type: "break",
      sizing: 12
    },

    {
      id: "connectedLocations",
      name: "Связано с локациями/географией",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "connectedProfessions"
      }
    },
    {
      id: "localLanguages",
      name: "Языки",
      type: "manyToManyRelationship",
      icon: "mdi-book-alphabet",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "languages",
        connectedField: "pairedConnectedProfessions"
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
      name: "Связано с идеологиями/политическими группами",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedConnectedProfessions"
      }
    },
    {
      id: "pairedConnectedReligiousGroups",
      name: "Связано с учениями/религиозными группами",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedConnectedProfessions"
      }
    },
    {
      id: "pairedConnectedOtherGroups",
      name: "Связано с организациями/другими группами",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "pairedConnectedProfessions"
      }
    },
    {
      id: "pairedConnectedMagicGroups",
      name: "Связано со школами магии/магическими группами",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedConnectedProfessions"
      }
    },
    {
      id: "pairedConnectedTechGroups",
      name: "Связано с науками/технологическими группами",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedConnectedProfessions"
      }
    },
    {
      id: "breakDetails",
      name: "Связи — Детали",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedConnectedSkills",
      name: "Связано с навыками/заклинаниями/прочим",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "skills",
        connectedField: "pairedConnectedProfessions"
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
        connectedField: "pairedConnectedProfessions"
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
