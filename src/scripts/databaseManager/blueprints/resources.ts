import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const resourcesBlueprint: I_Blueprint = {
  _id: "resources",
  order: 140,
  namePlural: "Ресурсы/Материалы",
  nameSingular: "Ресурс/Материал",
  icon: "mdi-gold",
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
      icon: "mdi-gold",
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
        connectedObjectType: "resources"
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
      id: "features",
      name: "Заметные особенности",
      type: "list",
      icon: "mdi-guy-fawkes-mask",
      sizing: 12,
      predefinedListExtras: {
        affix: "Примечание",
        extraSelectValueList: [
        ]
      }
    },
    {
      id: "priceCurrencies",
      name: "Цена в валютах",
      type: "manyToNoneRelationship",
      icon: "fas fa-coins",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "currencies"
      }
    },
    {
      id: "density",
      name: "Плотность",
      type: "text",
      icon: "mdi-weight",
      sizing: 3,
      tooltip: `
        Это поле больше подходит для реалистичного миростроения и научной фантастики.
        <br>
        Пропустите его, если оно вам не нужно.
      `
    },
    {
      id: "hardness",
      name: "Твёрдость",
      type: "singleSelect",
      icon: "mdi-shield-outline",
      sizing: 3,
      tooltip: `
        Примерная шкала, которая помогает определить твёрдость ваших материалов.
        <br>
        Учтите, что твёрдость означает, что более твёрдый материал может поцарапать или разрезать более мягкий.
        <br>
        Это НЕ значит, что материал автоматически становится прочнее: твёрдость обычно идёт вместе с хрупкостью.
      `,
      predefinedSelectValues: [
        "1 (Тальк)",
        "2 (Кальций, Сера)",
        "3 (Медь, Золото, Серебро)",
        "4 (Железо)",
        "5 (Обсидиан, Обычная сталь)",
        "6 (Титан)",
        "7 (Кварц)",
        "8 (Закалённая сталь)",
        "9 (Карбид вольфрама)",
        "10 (Алмаз)"
      ]
    },
    {
      id: "biomeType",
      name: "Встречается в биомах",
      type: "multiSelect",
      icon: "mdi-pine-tree",
      sizing: 4,
      predefinedSelectValues: [
        "Тропический дождевой лес",
        "Умеренный лес ",
        "Пустыня (песчаная)",
        "Пустыня (арктическая)",
        "Тундра",
        "Тайга (бореальный лес) ",
        "Степь ",
        "Саванна",
        "Пресные водоёмы",
        "Морские (океан/море)       ",
        "Высокие плато",
        "Болото/Топь",
        "Пещеры/Подземелья",
        "Межзвёздное пространство",
        "Нематериальное",
        "Другое"

      ]
    },
    {
      id: "rarity",
      name: "Редкость",
      type: "singleSelect",
      icon: "fas fa-chart-area",
      sizing: 4,
      predefinedSelectValues: [
        "Обычный",
        "Необычный",
        "Редкий",
        "Исключительно редкий",
        "Почти невозможно достать"
      ]
    },
    {
      id: "resourceType",
      name: "Тип ресурса/материала",
      type: "multiSelect",
      icon: "mdi-diamond-stone",
      sizing: 4,
      predefinedSelectValues: [
        "Чужеродный",
        "Магический",
        "Искусственный",
        "Энергия",
        "Эфирный",
        "Внеземной",
        "Пища",
        "Ископаемое",
        "Топливо",
        "Газ",
        "Жидкость",
        "Металл",
        "Минерал",
        "Мутаген",
        "Природный",
        "Нематериальный",
        "Органический",
        "Планарный",
        "Плазма",
        "Радиоактивный",
        "Обработанный",
        "Сверхъестественный",
        "Трансмутатор",
        "Отходы",
        "Другое"
      ]
    },
    {
      id: "otherStats",
      name: "Другие физические свойства материала",
      type: "list",
      icon: "mdi-format-list-bulleted-type",
      sizing: 12,
      predefinedListExtras: {
        affix: "Примечание/Значение",
        reverse: true,
        extraSelectValueList: [
          {
            title: "Распространённые свойства материалов",
            values: [
              "Температура плавления",
              "Температура кипения",
              "Температура возгорания",
              "Хрупкость",
              "Пластичность (не возвращает исходную форму после деформации)",
              "Упругость (возвращает исходную форму после деформации)",
              "Термопластичность (насколько деформируется при нагреве)",
              "Электропроводность (адмиттанс)",
              "Теплопроводность (адмиттанс)",
              "Вибрационная проводимость (адмиттанс)"
            ]
          }

        ]
      }
    },
    {
      id: "relatedResources",
      name: "Связанные ресурсы/материалы",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "relatedResources"
      }
    },
    {
      id: "madeIntoResources",
      name: "Превращается в ресурсы/материалы",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "madeFromResources"
      }
    },
    {
      id: "madeFromResources",
      name: "Создан из ресурсов/материалов",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "madeIntoResources"
      }
    },
    {
      id: "connectedLocations",
      name: "Встречается в локациях",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "connectedResources"
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
        connectedField: "relatedResouces"
      }
    },
    {
      id: "usedProfessions",
      name: "Используется профессиями/классами",
      type: "manyToManyRelationship",
      icon: "fab fa-pied-piper-hat",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "professions",
        connectedField: "usedResources"
      }
    },
    {
      id: "producedProfessions",
      name: "Производится профессиями/классами",
      type: "manyToManyRelationship",
      icon: "fab fa-pied-piper-hat",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "professions",
        connectedField: "producedResources"
      }
    },
    {
      id: "pairedResourcesRequire",
      name: "Требуется для навыков/заклинаний/прочего",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "skills",
        connectedField: "pairedResourcesRequire"
      }
    },
    {
      id: "pairedResourcesCreate",
      name: "Создаётся навыками/заклинаниями/прочим",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "skills",
        connectedField: "pairedResourcesCreate"
      }
    },

    {
      id: "pairedItemMade",
      name: "Ресурс/материал, используемый для создания предметов",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedResourcesMade"
      }
    },
    {
      id: "pairedItemProduced",
      name: "Ресурс/материал, производимый предметами",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedResourcesProduced"
      }
    },
    {
      id: "pairedProducedFromRaces",
      name: "Производится видами/расами/флорой/фауной",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "pairedProducedFromResources"
      }
    },
    {
      id: "pairedUsedResourcesRaces",
      name: "Используется видами/расами/флорой/фауной",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "pairedUsedResourcesResources"
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
      name: "Традиции и обычаи, связанные с предметом",
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
        connectedField: "pairedConnectedResources"
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
        connectedField: "pairedResources"
      }
    },

    {
      id: "breakWorld",
      name: "Связи — Мир и детали",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedCharacter",
      name: "Связано с персонажами",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedResources"
      }
    },

    {
      id: "pairedConnectedRaces",
      name: "Связано с видами/расами/флорой/фауной",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "pairedConnectedResources"
      }
    },
    {
      id: "pairedConditionsPositive",
      name: "Вызывает блага",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedResourcesPositive"
      }
    },
    {
      id: "pairedConditionsNegative",
      name: "Вызывает недуги",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedResourcesNegative"
      }
    },
    {
      id: "pairedConditionsOther",
      name: "Вызывает другие состояния",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedResourcesOther"
      }
    },

    {
      id: "breakPolitics",
      name: "Связи — Группы/Учения",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedConnectedPoliticalGroups",
      name: "Связано с идеологиями/политическими группами",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedConnectedResources"
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
        connectedField: "pairedConnectedResources"
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
        connectedField: "pairedConnectedResources"
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
        connectedField: "pairedConnectedResources"
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
        connectedField: "pairedConnectedResources"
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
