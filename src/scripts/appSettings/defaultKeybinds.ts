export const defaultKeybinds = [

  // Open keybind cheatsheet - CTRL + ALT + K
  {
    altKey: true,
    ctrlKey: true,
    shiftKey: false,
    which: 75,
    editable: true,
    id: "openKeybindsCheatsheet",
    tooltip: "Открыть шпаргалку по сочетаниям клавиш"
  },

  // Open full-page search - CTRL + F
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: false,
    which: 70,
    editable: true,
    id: "openFullPageSearch",
    tooltip: "Открыть поиск по всей странице"
  },

  // Toggle current WYSIWYG fullscreen mode - CTRL + SHIFT + F
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: true,
    which: 70,
    editable: true,
    id: "toggleCurrentWysiwygFullScreen",
    tooltip: "Переключить полноэкранный режим текущего WYSIWYG"
  },

  // Toggle current WYSIWYG fullscreen mode - F11
  {
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    which: 122,
    editable: false,
    id: "toggleCurrentWysiwygFullScreenAlt",
    tooltip: "Переключить полноэкранный режим текущего WYSIWYG — альтернативное сочетание"
  },

  // Show project overview - NONE
  {
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    which: false,
    editable: true,
    id: "navigateToProjectOverview",
    tooltip: "Показать обзор проекта"
  },

  // Open app options - CTRL + ALT + J
  {
    altKey: true,
    ctrlKey: true,
    shiftKey: false,
    which: 74,
    editable: true,
    id: "openAppOptions",
    tooltip: "Открыть настройки Fantasia Archive"
  },

  // Toggle hierarchical tree - CTRL + ALT + SHIFT + T
  {
    altKey: true,
    ctrlKey: true,
    shiftKey: true,
    which: 84,
    editable: true,
    id: "toggleHierarchicalTree",
    tooltip: "Переключить иерархическое дерево"
  },

  // Quick new document - CTRL + N
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: false,
    which: 78,
    editable: true,
    id: "quickNewDocument",
    tooltip: "Быстро добавить новый документ"
  },

  // Quick existing document - CTRL + Q
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: false,
    which: 81,
    editable: true,
    id: "quickExistingDocument",
    tooltip: "Быстрый поиск существующего документа"
  },

  // Focus left tree search - CTRL + SHIFT + Q
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: true,
    which: 81,
    editable: true,
    id: "focusHierarchicalTree",
    tooltip: "Перевести фокус в поле поиска в левом иерархическом дереве"
  },

  // Clear input in the left tree search - CTRL + SHIFT + T
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: true,
    which: 84,
    editable: true,
    id: "clearInputHierarchicalTree",
    tooltip: "Очистить поле поиска в левом иерархическом дереве"
  },

  // Close tab - CTRL + W
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: false,
    which: 87,
    editable: true,
    id: "closeTab",
    tooltip: "Закрыть активный документ"
  },

  // Close all tabs without changes except for this - CTRL + ALT + SHIFT + W
  {
    altKey: true,
    ctrlKey: true,
    shiftKey: true,
    which: 87,
    editable: true,
    id: "closeAllTabsWithoutChangesButThis",
    tooltip: "Закрыть все вкладки без изменений, кроме этой"
  },

  // Close all tabs without changes - CTRL + SHIFT + W
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: true,
    which: 87,
    editable: true,
    id: "closeAllTabsWithoutChanges",
    tooltip: "Закрыть все вкладки без изменений"
  },

  // Force close all tabs except for this - NONE
  {
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    which: false,
    editable: true,
    id: "forceCloseAllTabsButThis",
    tooltip: "Принудительно закрыть все вкладки, кроме этой"
  },

  // Force close all tabs - NONE
  {
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    which: false,
    editable: true,
    id: "forceCloseAllTabs",
    tooltip: "Принудительно закрыть все вкладки"
  },

  // Next tab - ALT + RIGHT ARROW
  {
    altKey: true,
    ctrlKey: false,
    shiftKey: false,
    which: 39,
    editable: true,
    id: "nextTab",
    tooltip: "Следующая вкладка"
  },

  // Previous tab - ALT + LEFT ARROW
  {
    altKey: true,
    ctrlKey: false,
    shiftKey: false,
    which: 37,
    editable: true,
    id: "previousTab",
    tooltip: "Предыдущая вкладка"
  },

  // Move tab left - ALT + SHIFT + RIGHT ARROW
  {
    altKey: true,
    ctrlKey: false,
    shiftKey: true,
    which: 37,
    editable: true,
    id: "moveTabLeft",
    tooltip: "Переместить вкладку влево"
  },

  // Move tab right - ALT + SHIFT + LEFT ARROW
  {
    altKey: true,
    ctrlKey: false,
    shiftKey: true,
    which: 39,
    editable: true,
    id: "moveTabRight",
    tooltip: "Переместить вкладку вправо"
  },

  // Save document - CTRL + ALT + S
  {
    altKey: true,
    ctrlKey: true,
    shiftKey: false,
    which: 83,
    editable: true,
    id: "saveDocument",
    tooltip: "Сохранить активный документ"
  },

  // Save document without exiting edit mode - CTRL + S
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: false,
    which: 83,
    editable: true,
    id: "saveDocumentNoExit",
    tooltip: "Сохранить документ, не выходя из режима редактирования"
  },

  // Save document without exiting edit mode - CTRL + S
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: true,
    which: 83,
    editable: true,
    id: "saveDocumentMass",
    tooltip: "Сохранить все открытые документы с изменениями"
  },

  // Save document and mark it as finished - NONE
  {
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    which: false,
    editable: true,
    id: "saveDocumentTickFinish",
    tooltip: "Сохранить активный документ и отметить его как завершённый"
  },

  // Edit document - CTRL + E
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: false,
    which: 69,
    editable: true,
    id: "editDocument",
    tooltip: "Редактировать активный документ"
  },

  // Open active document in side-view - CTRL + SHIFT + O
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: true,
    which: 79,
    editable: true,
    id: "openDocInSide",
    tooltip: "Открыть активный документ в боковом просмотре"
  },

  // Export document - NONE
  {
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    which: false,
    editable: true,
    id: "exportDocument",
    tooltip: "Экспортировать текущий документ"
  },

  // Add a new document with current as parent - CTRL + SHIFT + N
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: true,
    which: 78,
    editable: true,
    id: "addUnderParent",
    tooltip: "Добавить новый документ с текущим открытым в качестве родительского"
  },

  // Copy document - CTRL + ALT + C
  {
    altKey: true,
    ctrlKey: true,
    shiftKey: false,
    which: 67,
    editable: true,
    id: "copyDocument",
    tooltip: "Копировать активный документ"
  },

  // Delete document - CTRL + D
  {
    altKey: false,
    ctrlKey: true,
    shiftKey: false,
    which: 68,
    editable: true,
    id: "deleteDocument",
    tooltip: "Удалить активный документ"
  },

  // Toggle the Advanced search cheatsheet - NONE
  {
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    which: false,
    editable: true,
    id: "toggleAdvSearchCheatsheet",
    tooltip: "Переключить шпаргалку по расширенному поиску"
  },

  // Toggle Note Board - CTRL + ALT + SHIFT + P
  {
    altKey: true,
    ctrlKey: true,
    shiftKey: true,
    which: 80,
    editable: true,
    id: "toggleNoteCorkboard",
    tooltip: "Переключить доску заметок"
  },

  // Next focus - Tab
  {
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    which: 9,
    editable: false,
    id: "nextFocus",
    tooltip: "Переводит фокус на следующее поле ввода, элемент ввода или узел иерархического дерева",
    note: "(работает так же, как в веб-браузере)"
  },

  // Previous focus - Shift + Tab
  {
    altKey: false,
    ctrlKey: false,
    shiftKey: true,
    which: 9,
    editable: false,
    id: "previousFocus",
    tooltip: "Переводит фокус на предыдущее поле ввода, элемент ввода или узел иерархического дерева",
    note: "(работает так же, как в веб-браузере)"
  },

  // Open document coresponding to the tree node - Enter
  {
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    which: 13,
    editable: false,
    id: "openTreeNode",
    tooltip: "Открыть документ, на котором установлен фокус, в левом иерархическом дереве",
    note: "(когда элемент иерархического дерева находится в фокусе)"
  },

  // Collapse/Expand hiararchical tree node - Space
  {
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    which: 32,
    editable: false,
    id: "collapseExpandeTreeNode",
    tooltip: "Свернуть или развернуть категорию в фокусе в левом иерархическом дереве",
    note: "(когда элемент иерархического дерева находится в фокусе)"
  },

  // Toggle developer tools - CTRL + SHIFT + ALT + I
  {
    altKey: true,
    ctrlKey: true,
    shiftKey: true,
    which: 73,
    editable: true,
    id: "toggleDeveloperTools",
    tooltip: "Включает или выключает инструменты разработчика"
  },

  // Open custom CSS editor - CTRL + SHIFT + ALT + L
  {
    altKey: true,
    ctrlKey: true,
    shiftKey: true,
    which: 76,
    editable: true,
    id: "openCustomCssEditor",
    tooltip: "Открывает редактор пользовательского CSS"
  }
]
