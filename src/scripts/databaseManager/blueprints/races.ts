import { RPGSystemsStats } from "./../extraFieldLists/RPGSystemsStats"
import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const racesBlueprint: I_Blueprint = {
  _id: "races",
  order: 340,
  namePlural: "Виды/Расы/Флора/Фауна",
  nameSingular: "Вид/Раса/Флора/Фауна",
  icon: "fas fa-dragon",
  category: "Мир",
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
      icon: "fas fa-dragon",
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
        connectedObjectType: "races"
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
      id: "relatedRaces",
      name: "Связанные виды/расы/флора/фауна",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "relatedRaces"
      }
    },
    {
      id: "evolvedIntoRaces",
      name: "Развились в виды/расы/флору/фауну",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "evolvedFromRaces"
      }
    },
    {
      id: "evolvedFromRaces",
      name: "Развились из видов/рас/флоры/фауны",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "evolvedIntoRaces"
      }
    },
    {
      id: "memberCount",
      name: "Оценочная численность",
      type: "text",
      icon: "mdi-account-group",
      sizing: 3
    },
    {
      id: "age",
      name: "Средняя продолжительность жизни",
      type: "text",
      icon: "mdi-timer-sand-empty",
      sizing: 3
    },
    {
      id: "ageAdult",
      name: "Средний возраст взросления",
      type: "text",
      icon: "mdi-timer-sand",
      sizing: 3
    },
    {
      id: "ageOldest",
      name: "Наибольший известный возраст",
      type: "text",
      icon: "mdi-timer-sand-full",
      sizing: 3
    },
    {
      id: "height",
      name: "Средний размер",
      type: "text",
      icon: "mdi-human-male-height-variant",
      sizing: 2
    },
    {
      id: "weight",
      name: "Средний вес",
      type: "text",
      icon: "mdi-weight",
      sizing: 2
    },
    {
      id: "beingType",
      name: "Тип существа",
      type: "multiSelect",
      icon: "fas fa-paw",
      sizing: 4,
      predefinedSelectValues: [
        "Земноводное",
        "Животное",
        "Искусственное",
        "Бактерия",
        "Птица",
        "Драконоид",
        "Элементаль",
        "Рыба",
        "Гуманоид",
        "Насекомое",
        "Лишайник",
        "Млекопитающее",
        "Гриб",
        "Растение",
        "Рептилия",
        "Духовное",
        "Вирус",
        "Другое"
      ]
    },
    {
      id: "sentience",
      name: "Уровень разумности",
      type: "multiSelect",
      icon: "fas fa-brain",
      sizing: 4,
      predefinedSelectValues: [
        "Возвышенное",
        "Полуразумное",
        "Коллективный разум",
        "Неразумное",
        "Разумное",
        "Другое"
      ]
    },
    {
      id: "pairedCharacter",
      name: "Персонажи видов/рас/флоры/фауны",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedRace"
      }
    },
    {
      id: "pairedConnectedPlaces",
      name: "Населённые локации",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedConnectedRaces"
      }
    },
    {
      id: "relatedCultures",
      name: "Связано с культурой/искусством",
      type: "manyToManyRelationship",
      icon: "fas fa-archway",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "culture",
        connectedField: "relatedRaces"
      }
    },
    {
      id: "localCurrencies",
      name: "Обычно используемые валюты",
      type: "manyToManyRelationship",
      icon: "fas fa-coins",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "currencies",
        connectedField: "usedByRaces"
      }
    },
    {
      id: "localLanguages",
      name: "Обычно используемые языки",
      type: "manyToManyRelationship",
      icon: "mdi-book-alphabet",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "languages",
        connectedField: "usedByRaces"
      }
    },
    {
      id: "pairedSkills",
      name: "Обычные навыки/заклинания/другое",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "skills",
        connectedField: "pairedRacesSkills"
      }
    },
    {
      id: "commonProfessions",
      name: "Обычные профессии/классы",
      type: "manyToManyRelationship",
      icon: "fab fa-pied-piper-hat",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "professions",
        connectedField: "commonRaces"
      }
    },
    {
      id: "pairedProducedFromResources",
      name: "Ресурсы/материалы, получаемые от видов/рас/флоры/фауны",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "pairedProducedFromRaces"
      }
    },
    {
      id: "pairedUsedResourcesResources",
      name: "Ресурсы/материалы, используемые видами/расами/флорой/фауной",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "pairedUsedResourcesRaces"
      }
    },
    {
      id: "statsList",
      name: "Характеристики/атрибуты",
      type: "list",
      icon: "mdi-sword",
      sizing: 12,
      predefinedListExtras: {
        reverse: true,
        affix: "Характеристика/атрибут",
        extraSelectValueList: RPGSystemsStats
      }
    },
    {
      id: "strengths",
      name: "Сильные стороны",
      type: "list",
      icon: "fas fa-plus-square",
      sizing: 12,
      predefinedListExtras: {
        affix: "Воздействие",
        extraSelectValueList: [
          "Едва заметное",
          "Незначительное",
          "Среднее",
          "Сильное",
          "Мощное",
          "Подавляющее"
        ]
      }
    },
    {
      id: "weaknesses",
      name: "Слабые стороны",
      type: "list",
      icon: "fas fa-minus-square",
      sizing: 12,
      predefinedListExtras: {
        affix: "Тяжесть",
        extraSelectValueList: [
          "Едва заметная",
          "Незначительная",
          "Средняя",
          "Тяжёлая",
          "Выводящая из строя",
          "Смертельная"
        ]
      }
    },
    {
      id: "traits",
      name: "Характерные особенности и черты",
      type: "list",
      icon: "fas fa-dragon",
      sizing: 12
    },
    {
      id: "pairedConditionsPositive",
      name: "Подвержено благам",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedRacesPositive"
      }
    },
    {
      id: "pairedConditionsNegative",
      name: "Подвержено недугам",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedRacesNegative"
      }
    },
    {
      id: "pairedConditionsOther",
      name: "Подвержено другим состояниям",
      type: "manyToManyRelationship",
      icon: "mdi-virus",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "conditions",
        connectedField: "pairedRacesOther"
      }
    },
    {
      id: "commonNames",
      name: "Распространённые имена среди видов/рас/флоры/фауны",
      type: "list",
      icon: "fas fa-signature",
      sizing: 12,
      predefinedListExtras: {
        affix: "Тип имени",
        extraSelectValueList: [
          "Детское",
          "Женское",
          "Почётное",
          "Мужское",
          "Другое"
        ]
      }
    },
    {
      id: "commonFamilyNames",
      name: "Распространённые фамилии/названия кланов среди видов/рас/флоры/фауны",
      type: "list",
      icon: "mdi-family-tree",
      sizing: 12,
      predefinedListExtras: {
        affix: "Заметка",
        extraSelectValueList: [
        ]
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
        connectedField: "pairedConnectedRaces"
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
        connectedField: "pairedConnectedRaces"
      }
    },
    {
      id: "breakOther",
      name: "Связи — Мир и детали",
      type: "break",
      sizing: 12
    },
    {
      id: "connectedEvents",
      name: "Связано с важными событиями",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "pairedRaces"
      }
    },
    {
      id: "pairedConnectedItems",
      name: "Связано с предметами",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedConnectedRaces"
      }
    },
    {
      id: "pairedConnectedResources",
      name: "Связано с ресурсами/материалами",
      type: "manyToManyRelationship",
      icon: "mdi-gold",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "resources",
        connectedField: "pairedConnectedRaces"
      }
    },
    {
      id: "breakPolitics",
      name: "Связи — Группы/Учения",
      type: "break",
      sizing: 12
    },
    {
      id: "commonInPoliticalGroups",
      name: "Распространено среди идеологий/политических групп",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "connectedRaces"
      }
    },
    {
      id: "commonInOtherGroups",
      name: "Распространено среди организаций/других групп",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "guilds",
        connectedField: "connectedRaces"
      }
    },
    {
      id: "commonInReligiousGroups",
      name: "Распространено среди учений/религиозных групп",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "connectedRaces"
      }
    },
    {
      id: "commonInMagicGroups",
      name: "Распространено среди магических групп",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "connectedRaces"
      }
    },
    {
      id: "commonInTechGroups",
      name: "Распространено среди научных/технологических групп",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "connectedRaces"
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
