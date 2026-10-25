<template>

  <q-dialog
    v-model="dialogModel"
    persistent
    @before-hide="triggerDialogClose"
    >
    <q-card
      class="programSettingsDialog"
      dark
    >

      <h4 class="programSettingsTitle">Настройки Fantasia Archive</h4>
      <q-card-section horizontal class="programSettingsTabs">
        <q-tabs
          v-model="activeTab"
          class="text-accent"
          active-color="primary"
          indicator-color="primary"
          vertical
          style="width: 100%;"

        >
          <q-tab name="uiSettings" label="Внешний вид и доступность" />
          <q-tab name="docSettings" label="Просмотр и правка документов" />
          <q-tab name="popupSettings" label="Всплывающие и плавающие окна" />
          <q-tab name="treeSettings" label="Иерархическое дерево" />
          <q-tab name="tabSettings" label="Вкладки документов" />

          <q-separator dark />

          <q-tab name="keybinds" label="Горячие клавиши" />
        </q-tabs>

      </q-card-section>
      <q-separator vertical dark />

      <q-card-section horizontal class="programSettingsTabContent">
        <q-tab-panels
          dark
          v-model="activeTab"
          animated
          style="width: 100%;"
          vertical
          transition-prev="jump-up"
          transition-next="jump-down"
         >

          <q-tab-panel name="uiSettings" dark class="q-pt-sm">
            <q-scroll-area
              class="programSettingsScrollArea"
              visible
              dark
              :thumb-style="thumbStyle"
              >
                <div class="row justify-start">

                  <div class="col-12">
                    <div class="text-h6">
                      Внешний вид, общие функции приложения и доступность
                    </div>
                  </div>

                   <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Внешний вид и общие функции приложения
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Тёмная тема
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Переключение между светлой и тёмной темой приложения
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.darkMode"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Отключить проверку орфографии
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Отключает любую проверку орфографии, грамматики и слов в режиме редактирования документа
                        <br>
                        <span class="text-secondary">Учтите: для стабильной работы этой опции требуется ПОЛНЫЙ перезапуск приложения!</span>
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.disableSpellCheck"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть кнопку справки по связям
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Скрывает кнопку справки со шпаргалкой по расширенному поиску в полях типов связей.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideAdvSearchCheatsheetButton"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Агрессивный выбор связей
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Включает агрессивный режим автоподсказок для всех поисков связей в приложении в режиме редактирования документа.
                        <br>
                        Без этой настройки после фильтрации первый элемент в списке не выбирается автоматически.
                        <br>
                        Включение добавляет эту возможность, что гораздо удобнее для выбора
                        <br>
                        существующих документов, но немного снижает удобство создания новых на лету.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.agressiveRelationshipFilter"
                      />
                  </div>

                  <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Доступность
                    </div>
                  </div>

                   <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Доступность — тень текста
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Эта настройка включает тени текста в иерархическом дереве, во всплывающих окнах поиска связей и на вкладках, делая текст более контрастным на фоне.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.textShadow"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Доступность — выразительный разделитель счётчиков
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Эта настройка добавляет ещё один символ | между категорией и количеством документов в иерархическом дереве.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.doubleDashDocCount"
                      />
                  </div>

                   <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Доступность — скрыть зачёркивание
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Эта настройка скрывает зачёркивание мёртвых, пропавших и уничтоженных документов для лучшей читаемости.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideDeadCrossThrough"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Доступность — широкие полосы прокрутки
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Эта настройка делает полосы прокрутки FA шире и позволяет прокручивать их щелчком мыши на устройствах без стандартной прокрутки (мыши без колеса и т. п.).
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.allowWiderScrollbars"
                      />
                  </div>

                  <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Дополнительно
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть ссылки на соцсети на приветственном экране
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Скрывает все ссылки на соцсети на приветственном экране.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideWelcomeScreenSocials"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть окно советов на стартовом экране
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Скрывает всплывающее окно с советами на стартовом экране.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideTooltipsStart"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть советы в обзоре проекта
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Скрывает карточку с советами в обзоре проекта.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideTooltipsProject"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть маскота Fantasia
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Скрывает милую и замечательную Фантазию — крошечного тайного дракона.
                        <br>
                        Как вы могли! :(
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hidePlushes"
                      />
                  </div>

                </div>
           </q-scroll-area>
          </q-tab-panel>

          <q-tab-panel name="docSettings" dark class="q-pt-sm">
             <q-scroll-area
              class="programSettingsScrollArea"
              visible
              dark
              :thumb-style="thumbStyle"
              >
                <div class="row justify-start">
                  <div class="col-12">
                    <div class="text-h6">
                      Просмотр и правка документов
                    </div>
                  </div>

                   <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Панель управления документом
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Отключить панель управления документом
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Если вы хотите максимально увеличить рабочую область документа, этой настройкой можно отключить верхнюю панель кнопок.
                        <br>
                        Необходимые кнопки управления переместятся в верхнюю часть основной области документа, а остальные функции будут доступны через горячие клавиши или через меню приложения вверху слева.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.disableDocumentControlBar"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Отключить обучающие подсказки
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                       Включает и выключает подсказки для новичков на панели управления документом
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.disableDocumentControlBarGuides"
                      />
                  </div>

                  <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Область документа
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Отключить всплывающие подсказки в документах
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Если вам не нравятся всплывающие подсказки в режиме просмотра документа, их можно отключить здесь глобально
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.disableDocumentToolTips"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть пустые поля
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Скрывает поля без заполненного значения в режиме просмотра (не редактирования).
                        <br>
                        Учтите, что это может привести к заметным сдвигам макета, из-за чего документ в некоторых случаях будет выглядеть неаккуратно.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideEmptyFields"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть заголовки разделов документа
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Скрывает большие заголовки разделов в режиме просмотра документа.
                        <br>
                        Учтите, что это может привести к заметным сдвигам макета, из-за чего документ в некоторых случаях будет выглядеть неаккуратно.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideDocumentTitles"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Отключить автопрокрутку
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Определяет, будут ли документы запоминать позицию прокрутки и прокручиваться автоматически при переключении.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.preventAutoScroll"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Отключить предпросмотр документов
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Определяет, включён ли быстрый предпросмотр документов при наведении.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.preventPreviewsDocuments"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Ограничить высоту текстового редактора
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Определяет, ограничена ли высота текстового редактора, если он не в полноэкранном режиме.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.limitEditorHeight"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      ДЛЯ РАЗРАБОТКИ — показывать ID документов
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Если включено, в области документа также будет показано внутреннее значение ID документа.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.showDocumentID"
                      />
                  </div>

                </div>
           </q-scroll-area>

          </q-tab-panel>

          <q-tab-panel name="popupSettings" dark class="q-pt-sm">
             <q-scroll-area
              class="programSettingsScrollArea"
              visible
              dark
              :thumb-style="thumbStyle"
              >
                <div class="row justify-start">
                  <div class="col-12">
                    <div class="text-h6">
                      Всплывающие и плавающие окна
                    </div>
                  </div>

                   <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Общие настройки диалогов
                    </div>
                  </div>

                   <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Закрывать быстрые окна той же клавишей
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Позволяет закрывать окна быстрого поиска и быстрого добавления той же комбинацией клавиш, которой они были открыты.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.allowQuickPopupSameKeyClose"
                      />
                  </div>

                   <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Диалог быстрого поиска
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Не закрывать после выбора
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Обычно быстрый поиск закрывается после выбора элемента из него.
                        <br>
                        Включение этой функции отключает такое поведение и позволяет открывать несколько результатов поиска один за другим.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.disableCloseAftertSelectQuickSearch"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Не включать фильтр категорий по умолчанию
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Обычно категории включаются в быстрый поиск.
                        <br>
                        Включение этой опции меняет поведение на обратное.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.disableQuickSearchCategoryPrecheck"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Отключить предпросмотр документов
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Определяет, включён ли быстрый предпросмотр документов при наведении.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.preventPreviewsPopups"
                      />
                  </div>

                  <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Плавающие окна
                    </div>
                  </div>

                   <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Не показывать заполненную доску заметок
                      <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Включение этой опции предотвращает автоматический показ доски заметок
                        <br>
                        при запуске приложения, если на ней остались заметки,
                        <br>
                        сохранённые пользователем в предыдущих сеансах FA.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.preventFilledNoteBoardPopup"
                      />
                  </div>

                </div>
           </q-scroll-area>
          </q-tab-panel>

          <q-tab-panel name="treeSettings" dark class="q-pt-sm">
            <q-scroll-area
              class="programSettingsScrollArea"
              visible
              dark
              :thumb-style="thumbStyle"
              >
                <div class="row justify-start">
                  <div class="col-12">
                    <div class="text-h6">
                      Иерархическое дерево
                    </div>
                  </div>

                   <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Настройки дерева
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть иерархическое дерево
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Определяет, показывается ли дерево вообще.
                      </q-tooltip>
                    </q-icon>
                    </div>

                    <q-toggle
                      v-model="options.hideHierarchyTree"
                    />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      НАГРУЗКА НА ПРОИЗВОДИТЕЛЬНОСТЬ<br>Отключить предпросмотр документов
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Определяет, включён ли быстрый предпросмотр документов при наведении.
                        <br>
                        <b>Выключение этой настройки может ОГРОМНО повлиять на производительность приложения.</b>
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.preventPreviewsTree"
                      />
                  </div>

                  <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Настройки тегов
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть теги в дереве
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Определяет, показываются ли теги в иерархическом дереве вообще
                      </q-tooltip>
                    </q-icon>
                    </div>

                    <q-toggle
                      v-model="options.noTags"
                    />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Теги в начале дерева
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Показывать теги в начале иерархического дерева
                      </q-tooltip>
                    </q-icon>
                    </div>

                    <q-toggle
                      v-model="options.tagsAtTop"
                    />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Компактные теги
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Определяет, показывать теги как отдельные категории или как одну большую категорию, где каждый тег является подкатегорией.
                      </q-tooltip>
                    </q-icon>
                    </div>

                    <q-toggle
                      v-model="options.compactTags"
                      />
                  </div>

                   <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Поведение дерева
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Не сворачивать подуровни в дереве
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Эта опция не даёт подкатегориям закрываться в иерархическом дереве при закрытии родительской категории
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.doNotcollaseTreeOptions"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть название проекта в дереве
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Определяет, показывается ли название проекта в иерархическом дереве вообще
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.noProjectName"
                      />
                  </div>

                   <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Инвертировать сортировку по своему порядку в дереве
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Сортирует документы в иерархическом дереве в обратном порядке:
                        <br>
                        от высшего к низшему
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.invertTreeSorting"
                      />
                  </div>

                  <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Настройки отображения информации
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Полностью скрыть количество документов
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Скрывает всю информацию о количестве документов в иерархическом дереве
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.disableDocumentCounts"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть количество категорий
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Показывать количество документов без дополнительного числа категорий.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.compactDocumentCount"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Поменять местами категорию и количество
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Меняет местами числа категории и документов.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.invertCategoryPosition"
                      />
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть порядковые номера
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Эта опция скрывает номера своего порядка слева от названий.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideTreeOrderNumbers"
                      />
                  </div>

                   <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Настройки значков
                    </div>
                  </div>

                   <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть дополнительные значки
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Эта опция скрывает значки, которые обычно показываются для удобства, но не добавляют никакой функциональности.
                        <br>
                        Например, значок «Открыть документ» рядом с документом без дочерних узлов, который можно открыть и обычным левым щелчком вместо щелчка по значку.
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideTreeExtraIcons"
                      />
                  </div>

                   <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть значок «Добавить под»
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Эта опция скрывает значок «Добавить новый документ, подчинённый XY».
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideTreeIconAddUnder"
                      />
                  </div>

                   <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть значок «Изменить»
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Эта опция скрывает значок «Изменить XY».
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideTreeIconEdit"
                      />
                  </div>

                   <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Скрыть значок «Открыть»
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Эта опция скрывает значок «Открыть XY».
                      </q-tooltip>
                    </q-icon>
                    </div>

                      <q-toggle
                        v-model="options.hideTreeIconView"
                      />
                  </div>
                </div>
            </q-scroll-area>
          </q-tab-panel>

           <q-tab-panel name="tabSettings" dark class="q-pt-sm">
             <q-scroll-area
              class="programSettingsScrollArea"
              visible
              dark
              :thumb-style="thumbStyle"
              >
                <div class="row justify-start">
                  <div class="col-12">
                    <div class="text-h6">
                      Вкладки открытых документов
                    </div>
                  </div>

                   <div class="col-12">
                    <div class="text-bold q-mt-xl">
                      Поведение вкладок
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-4 optionWrapper">
                    <div class="optionTitle">
                      Отключить предпросмотр документов
                    <q-icon name="mdi-help-circle" size="16px" class="q-ml-md">
                      <q-tooltip :delay="500">
                        Определяет, включён ли быстрый предпросмотр документов при наведении.
                      </q-tooltip>
                    </q-icon>
                    </div>
                      <q-toggle
                        v-model="options.preventPreviewsTabs"
                      />
                  </div>

                </div>
           </q-scroll-area>
          </q-tab-panel>

          <q-tab-panel name="keybinds" dark>
            <q-table
              class="keybindsTable"
              virtual-scroll
              dark
              flat
              title="Горячие клавиши"
              :filter="filter"
              hide-bottom
              :pagination.sync="pagination"
              :rows-per-page-options="[0]"
              :virtual-scroll-sticky-size-start="48"
              row-key="index"
              :data="keybindList"
              :columns="keybindListCollums"
            >
            <template v-slot:top-right>
              <q-input clearable dark dense debounce="300" v-model="filter" placeholder="Фильтр горячих клавиш">
                <template v-slot:prepend>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td
                  key="name"
                  :props="props"
                  v-html="props.row.name"
                >
                </q-td>
                <q-td
                  key="userKeybinds"
                  :props="props"
                >
                  <template
                    v-if="props.row.editable"
                  >
                    <q-btn
                      :color="(props.row.userKeybind && props.row.userKeybind.which) ? 'accent' : 'primary'"
                      size="12px"
                      outline
                    >
                      {{(props.row.userKeybind && props.row.userKeybind.which) ? retrieveKeybindString(props.row.userKeybind) : 'Добавить'}}
                    <q-popup-edit
                      content-class="darkBg"
                      v-model="props.row.userKeybind"
                      @before-show="prepareKeybindSetting(props.row)"
                      @before-hide="processKeybindSetting()"
                    >
                      <q-btn
                        color="dark"
                        round
                        dense
                        flat
                        v-close-popup
                        class="keybindPopupCloseButton"
                        size="md"
                        icon="close"
                      />
                      <div class="keybindUpdateField">
                        <div class="text-center q-mt-xs q-mb-lg text-dark darkBg__title">{{currentRowData.name}}</div>
                        <q-field filled readonly
                          dense
                          class="q-ml-lg"
                          :dark="false"
                          :label="(tempKeybindString.length === 0)? '> Введите сочетание клавиш <' : ''"
                          :error="keybindError"
                          :error-message="keybindErrorMessage">
                          <template v-slot:after>
                            <q-icon name="mdi-help-circle" size="23px" class="keybindsTooltipIcon">
                              <q-tooltip :delay="500" content-class="keybindToolTip">
                                Допускаются сочетания клавиш и модификаторы:
                                <br>
                                - CTRL + <span class="text-italic text-caption">ВАШЕ СОЧЕТАНИЕ</span>
                                <br>
                                - ALT + <span class="text-italic text-caption">ВАШЕ СОЧЕТАНИЕ</span>
                                <br>
                                - CTRL + ALT + <span class="text-italic text-caption">ВАШЕ СОЧЕТАНИЕ</span>
                                <br>
                                - CTRL + SHIFT + <span class="text-italic text-caption">ВАШЕ СОЧЕТАНИЕ</span>
                                <br>
                                - ALT + SHIFT + <span class="text-italic text-caption">ВАШЕ СОЧЕТАНИЕ</span>
                                <br>
                                - CTRL + ALT + SHIFT + <span class="text-italic text-caption">ВАШЕ СОЧЕТАНИЕ</span>
                                <br>
                                <br>
                                - Нужное сочетание может содержать любой символ буквенно-цифровой части клавиатуры, а также все клавиши F и стрелки.
                              </q-tooltip>
                            </q-icon>
                          </template>
                          <template v-slot:control>
                            <div class="self-center full-width no-outline">{{tempKeybindString}}</div>
                          </template>
                        </q-field>
                        <div class="flex justify-around q-mt-md">
                            <q-btn
                            label="Сбросить сочетание"
                            color="secondary"
                            size="14px"
                            v-close-popup
                            @click="resetKeybind"
                            :disable="!(tempKeybindString && tempKeybindString.length > 0)"
                          />
                          <q-btn
                            label="Задать сочетание"
                            color="dark"
                            size="14px"
                            v-close-popup
                            @click="setKeybind"
                            :disable="!tempHasChange || (!tempKeybindString || tempKeybindString.length === 0)"
                          />
                        </div>
                      </div>
                    </q-popup-edit>
                    </q-btn>

                  </template>
                  <template
                    v-if="!props.row.editable"
                    >
                    <span class="text-secondary text-bold">
                      Встроенная функция, не подлежит изменению
                    </span>
                  </template>
                </q-td>
                <q-td
                  key="defaultKeybinds"
                  :class="{'text-blue-grey-6':props.row.userKeybind && props.row.userKeybind.which}"
                  :props="props"
                  v-html="retrieveKeybindString(props.row.defaultKeybind)"
                >
                </q-td>
              </q-tr>
            </template>

            </q-table>
          </q-tab-panel>

        </q-tab-panels>
      </q-card-section>

      <q-card-actions align="right" class="q-mb-lg q-mt-md closeButton">
          <q-btn flat label="Закрыть без сохранения" color="accent" class="q-mr-xl" v-close-popup />
          <q-btn label="Сохранить настройки" color="primary" class="q-mx-lg" outline v-close-popup @click="saveSettings" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script lang="ts">

import { Component, Watch } from "vue-property-decorator"

import DialogBase from "src/components/dialogs/_DialogBase"
import { extend } from "quasar"

import { OptionsStateInteface } from "src/store/module-options/state"
@Component({
  components: { }
})
export default class ProgramSettings extends DialogBase {
  /****************************************************************/
  // DIALOG CONTROL
  /****************************************************************/

  /**
   * React to dialog opening request
   */
  @Watch("dialogTrigger")
  openDialog (val: string|false) {
    if (val) {
      if (this.SGET_getDialogsState) {
        return
      }
      this.SSET_setDialogState(true)
      this.dialogModel = true
      this.options = extend(true, {}, this.SGET_options)
      this.mapKeybinds()
    }
  }

  /**
   * Currently active tab model of the options\
   * "uiSettings" by default
   */
  activeTab = "uiSettings"

  /**
   * Save settings and keybings
   */
  saveSettings () {
    const optionsSnapShot: OptionsStateInteface = extend(true, {}, this.options)
    optionsSnapShot.userKeybindList = []

    this.keybindList.forEach(e => {
      // Deregister all custom user keybinds
      this.SSET_deregisterUserKeybind({
        id: e.id,
        altKey: e.defaultKeybind.altKey,
        ctrlKey: e.defaultKeybind.ctrlKey,
        shiftKey: e.defaultKeybind.shiftKey,
        which: e.defaultKeybind.which
      })

      // Re-register new user keybinds if there are any present
      if (e.userKeybind && e.userKeybind.which) {
        const tempkey = {
          id: e.id,
          altKey: e.userKeybind.altKey,
          ctrlKey: e.userKeybind.ctrlKey,
          shiftKey: e.userKeybind.shiftKey,
          which: e.userKeybind.which
        }

        optionsSnapShot.userKeybindList.push(tempkey)
        this.SSET_registerUserKeybind(tempkey)
      }
    })

    this.SSET_options(optionsSnapShot)
  }

  /****************************************************************/
  // OPTIONS TAB
  /****************************************************************/

  /**
   * Default options list state
   */
  options: OptionsStateInteface = {
    _id: "settings",
    darkMode: false,
    disableSpellCheck: false,
    preventFilledNoteBoardPopup: false,
    agressiveRelationshipFilter: false,
    preventAutoScroll: false,
    textShadow: false,
    hideAdvSearchCheatsheetButton: false,
    doubleDashDocCount: false,
    hideDeadCrossThrough: false,
    allowWiderScrollbars: false,
    hidePlushes: false,
    hideDocumentTitles: false,
    hideHierarchyTree: false,
    tagsAtTop: false,
    noTags: false,
    compactTags: false,
    noProjectName: false,
    invertTreeSorting: false,
    hideEmptyFields: false,
    disableDocumentToolTips: false,
    doNotcollaseTreeOptions: false,
    disableDocumentControlBar: false,
    disableDocumentControlBarGuides: false,
    disableCloseAftertSelectQuickSearch: false,
    disableQuickSearchCategoryPrecheck: false,
    allowQuickPopupSameKeyClose: false,
    disableDocumentCounts: false,
    compactDocumentCount: false,
    showDocumentID: false,
    invertCategoryPosition: false,
    hideWelcomeScreenSocials: false,
    hideTooltipsStart: false,
    hideTooltipsProject: false,
    hideTreeOrderNumbers: false,
    hideTreeExtraIcons: false,
    hideTreeIconAddUnder: false,
    hideTreeIconEdit: false,
    hideTreeIconView: false,
    limitEditorHeight: false,
    preventPreviewsTree: true,
    preventPreviewsTabs: true,
    preventPreviewsPopups: false,
    preventPreviewsDocuments: false,
    userKeybindList: []
  }

  /****************************************************************/
  // KEYBINDS MANAGEMENT
  /****************************************************************/

  /**
   * Keybinds table pagination settings
   */
  pagination = {
    rowsPerPage: 0
  }

  /**
   * Keybinds table settings
   */
  keybindListCollums = [
    {
      name: "name",
      required: true,
      label: "Действие",
      align: "left",
      field: (row: {name: string}) => row.name,
      format: (val: string) => `${val}`,
      sortable: true
    },
    {
      name: "userKeybinds",
      align: "left",
      label: "Сочетания пользователя",
      field: "userKeybind"
    },
    {
      name: "defaultKeybinds",
      align: "left",
      label: "Сочетания по умолчанию",
      field: "defaultKeybind"
    }
  ]

  /**
   * Keybinds table string filter
   */
  filter = ""

  /**
   * Temporary keybind string value entered by the user
   * EG: "CTRL + V"
   */
  tempKeybindString = ""

  /**
   * Temporary keybind object details entered by the user
   */
  tempKeybindData = null as any

  /**
   * Determines if any change has been done to the input entered by the user after it was lodead
   */
  tempHasChange = false

  /**
   * A list of all keybinds
   */
  keybindList: any[] = []

  /**
   * Determines if the keybinds popup has any error right now
   */
  keybindError = false

  /**
   * Current error message
   */
  keybindErrorMessage = ""

  /**
   * Temporary variable for holding on to currently active row data
   */
  currentRowData = {} as any

  /**
   * Resets the particular keybind
   */
  async resetKeybind () {
    this.tempKeybindString = ""
    this.tempKeybindData = null
    this.keybindError = false

    this.currentRowData.userKeybind = ""

    const temp: any[] = extend(true, [], this.keybindList)

    this.keybindList = []

    await this.$nextTick()

    this.keybindList = temp
  }

  /**
   * Sets the particular keybind
   */
  async setKeybind () {
    this.currentRowData.userKeybind = this.tempKeybindData
    const temp: any[] = extend(true, [], this.keybindList)

    this.keybindList = []

    await this.$nextTick()

    this.keybindList = temp
  }

  /**
   * Process all needed actions after the keybind window popup closes
   */
  processKeybindSetting () {
    window.removeEventListener("keydown", this.triggerKeyPush)
  }

  /**
   * Process all needed actions before the keybind window popup opens
   */
  prepareKeybindSetting (row: any) {
    this.keybindError = false
    this.tempHasChange = false
    this.tempKeybindData = (row.userKeybind && row.userKeybind.which) ? this.tempKeybindData : null
    this.tempKeybindString = (row.userKeybind && row.userKeybind.which) ? this.retrieveKeybindString(row.userKeybind) : ""
    this.currentRowData = row
    window.addEventListener("keydown", this.triggerKeyPush)
  }

  /**
   * Register keybind input for the keybind popup
   */
  triggerKeyPush (e:any) {
    this.keybindError = false

    const ignoredKeys = [16, 17, 18, 27]
    const allowedKeys = [186, 187, 188, 189, 190, 191, 192, 219, 220, 221, 222, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]

    // Prevent all non-permitted key presses
    if ((e?.altKey || e?.ctrlKey) && e?.keyCode && !ignoredKeys.includes(e.which)) {
      if (allowedKeys.includes(e.which)) {
        // Check for duplicates already existing in the list
        const compareList = this.keybindList
          .filter(e => e.id !== this.currentRowData.id)
          .map(bind => {
            const mappedKeybind = (bind.userKeybind && bind.userKeybind.which)
              ? {
                altKey: bind.userKeybind.altKey,
                ctrlKey: bind.userKeybind.ctrlKey,
                shiftKey: bind.userKeybind.shiftKey,
                which: bind.userKeybind.which,
                id: this.currentRowData.id
              }
              : {
                altKey: bind.defaultKeybind.altKey,
                ctrlKey: bind.defaultKeybind.ctrlKey,
                shiftKey: bind.defaultKeybind.shiftKey,
                which: bind.defaultKeybind.which,
                id: this.currentRowData.id
              }

            return mappedKeybind
          })

        let duplicate = false
        compareList.forEach(bind => {
          if (
            bind.altKey === e.altKey &&
            bind.ctrlKey === e.ctrlKey &&
            bind.shiftKey === e.shiftKey &&
            bind.which === e.which
          ) {
            duplicate = true
          }
        })

        if (duplicate) {
          this.keybindError = true
          this.keybindErrorMessage = "Это сочетание уже занято. Выберите другое."
          return
        }

        // Continue the script if no duplicates were found
        this.tempHasChange = true
        this.keybindError = false
        const keybindString = this.retrieveKeybindString(e)
        this.tempKeybindString = keybindString
        this.tempKeybindData = {
          altKey: e.altKey,
          ctrlKey: e.ctrlKey,
          shiftKey: e.shiftKey,
          which: e.which,
          id: this.currentRowData.id
        }
      }
      else {
        this.keybindError = true
        this.keybindErrorMessage = "Для сочетаний допускаются только буквенно-цифровые клавиши, стрелки и клавиши F."
      }
    }
    else if (!ignoredKeys.includes(e.keyCode)) {
      this.keybindError = true
      this.keybindErrorMessage = "Допускаются только сочетания с ALT и/или CTRL."
    }
  }

  /**
   * Map all existing keybinds to something useable for the table
   */
  mapKeybinds () {
    this.keybindList = this.SGET_getCurrentKeyBindData.defaults.map((keybind, index) => {
      return {
        name: keybind.tooltip,
        id: keybind.id,
        editable: keybind.editable,
        defaultKeybind: keybind,
        userKeybind: (this.options.userKeybindList.find(userKb => userKb.id === keybind.id)) || ""
      }
    })
  }
}
</script>

<style lang="scss">

.keybindsTooltipIcon {
  right: 0;
  margin-left: 10px;
  top: 4px;
}

.keybindToolTip {
  background-color: white !important;
  border: 1px solid $dark;
}

.keybindPopupCloseButton {
  position: absolute;
  right: 10px;
  top: 10px;
}

.keybindUpdateField {
  width: 550px;
  padding: 40px;

  .q-field--filled .q-field__control {
    background-color: transparent;
  }

  .q-field__label {
    text-align: center;
    margin-top: 7px;
  }

  .q-field__native > div {
    text-align: center;
  }

  .q-field__append {
    position: absolute;
    right: 0;
    top: 5px;
  }
}

.darkBg {
  background: $accent;

  .darkBg__title {
    font-weight: 500;
    font-size: 16px;
  }
}

.keybindsTable {
  max-height: calc(100vh - 340px);
  height: calc(100vh - 340px);
  margin-top: -25px;

  .q-field__control {
    background-color: transparent;
  }

  .q-table__control,
  .q-table__control label {
    width: 200px;
  }

  th,
  td {
    white-space: normal;
  }

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    background-color: var(--q-color-dark);
  }

  thead tr th {
    position: sticky;
    z-index: 1;
  }

  thead tr:last-child th {
    top: 48px;
  }

  thead tr:first-child th {
    top: 0;
  }
}

body.body--dark {
  .programSettingsDialog {
    .optionTitle,
    .text-h5,
    h4 {
      color: #dcdcdc;
    }
  }
}

.programSettingsDialog {
  width: 1400px;
  max-width: calc(100vw - 100px) !important;
  max-height: calc(100vh - 85px);
  display: flex;
  flex-wrap: wrap;

  .closeButton {
    width: 100%;
  }

  .optionWrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .q-toggle__inner {
      max-width: 150px;
    }
  }

  .optionTitle {
    margin-top: 16px;
    margin-bottom: 8px;
    font-weight: 500;
    align-items: flex-start;
    justify-content: flex-start;
    display: flex;
    width: calc(100% - 45px);
    margin-left: 10px;
  }

  .programSettingsTabs {
    width: 250px;
  }

  .programSettingsTabContent {
    width: calc(100% - 270px);
  }

  .programSettingsTitle {
    width: 100%;
    text-align: center;
  }

  .programSettingsScrollArea {
    max-height: calc(100vh - 357px);
    margin: auto;
    height: 740px;
    width: calc(100% - 80px);
  }

  h6 {
    display: block;
  }
}
</style>
