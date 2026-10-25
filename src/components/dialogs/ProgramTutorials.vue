<template>

  <q-dialog
    v-model="dialogModel"
    @before-hide="triggerDialogClose"
    >
    <q-card
      class="programTutorialsDialog"
      dark
    >

      <q-card-section horizontal class="programTutorialsTabs">

        <q-scroll-area
              visible
              dark
              :thumb-style="thumbStyleTabs"
              >
          <q-tabs
            v-model="activeTab"
            class="text-accent"
            active-color="primary"
            indicator-color="primary"
            vertical
            style="width: 100%;"

          >
            <q-tab name="projects" label="1 - Проекты
              Создание, изменение, сохранение и загрузка" />
            <q-tab name="documents_typesCategoriesMinorDocs" label="2, A - Документы
              Типы, категории и второстепенные документы" />
            <q-tab name="documents_structureCreationRelationships" label="2, B - Документы
              Создание, структура и связи" />
            <q-tab name="documents_previewsSplitView" label="2, C - Документы
              Предпросмотр и раздельный просмотр" />
            <q-tab name="documents_textImagesHTML" label="2, D - Документы
              Текстовый редактор, HTML и изображения" />
            <q-tab name="quickSearchQuickAdd" label="3 - Быстрый поиск и добавление, расширенный поиск" />
            <q-tab name="exportAndTemplates" label="4 - Экспорт и шаблоны документов" />
            <q-tab name="treeAndTags" label="5 - Иерархическое дерево и теги" />
            <q-tab name="settingsAndKeybinds" label="6 - Настройки и горячие клавиши" />
            <q-tab name="extras_nodeboard" label="7, A - Дополнения
              Доска заметок" />
            <q-tab name="extras_customCSS" label="7, B - Дополнения
              Пользовательский CSS проекта" />
            <q-tab name="extras_mergeTool" label="7, C - Дополнения
              Инструмент объединения проектов" />

          </q-tabs>
        </q-scroll-area>

      </q-card-section>
      <q-separator vertical dark />

      <q-card-section horizontal class="programTutorialsTabContent">
        <q-tab-panels
          dark
          v-model="activeTab"
          animated
          style="width: 100%;"
          vertical
          transition-prev="jump-up"
          transition-next="jump-down"
         >

          <q-tab-panel name="projects" dark class="">
            <q-scroll-area
              class="programTutorialsScrollArea"
              visible
              dark
              :thumb-style="thumbStyleTutorialTabContent"
              >
                <tutorials_1_projects></tutorials_1_projects>
           </q-scroll-area>
          </q-tab-panel>

        </q-tab-panels>
      </q-card-section>
    </q-card>
  </q-dialog>

</template>

<script lang="ts">

import { Component, Watch } from "vue-property-decorator"

import DialogBase from "src/components/dialogs/_DialogBase"

import Tutorials_1_projects from "src/documents/tutorials/1-projects.vue"

@Component({
  components: {
    tutorials_1_projects: Tutorials_1_projects
  }
})
export default class ProgramTutorials extends DialogBase {
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
    }
  }

  /**
   * Currently active tab model of the options\
   * "uiSettings" by default
   */
  activeTab = "projects"
}
</script>

<style lang="scss">

.darkBg {
  background: $accent;

  .darkBg__title {
    font-weight: 500;
    font-size: 16px;
  }
}

body.body--dark {
  .programTutorialsDialog {
    .optionTitle,
    .text-h5,
    h4 {
      color: #dcdcdc;
    }
  }
}

.programTutorialsDialog {
  width: 100%;
  height: 100%;
  max-width: calc(100vw - 100px) !important;
  max-height: calc(100vh - 100px) !important;
  display: flex;
  flex-wrap: wrap;

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

  .programTutorialsTabs {
    width: 320px;

    .q-scrollarea{
      width: 100%;
    }

    .q-tab__indicator{
      display: none !important;
    }
  }

  .programTutorialsTabContent {
    width: calc(100% - 321px);

    .q-tab-panel{
      padding: 0 16px !important;
    }
  }

  .programTutorialsTitle {
    width: 100%;
    text-align: center;
  }

  .programTutorialsScrollArea {
    max-height: calc(100vh - 100px);
    margin: auto;
    height: 40000px;
    width: calc(100% - 80px);
    padding: 30px 0;
  }

  .q-tabs__content{
  }

  .q-tab__panel{
    padding: 0;
  }

  .q-tab__label{
    white-space: normal;
    text-align: left;
    padding: 8px 12px;
    font-size: 13px;
    width: 100%;
    white-space: pre-line;
  }
  .q-tab__content{
    width: 100%;
  }

}
</style>
