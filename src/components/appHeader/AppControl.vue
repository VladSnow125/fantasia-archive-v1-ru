<template>

  <div
    :class="{'AppControl': !isFrontpage}"
  >

    <appSearchBox
      v-if="fullPageSeachPopupTrigger"
    />

    <!-- New document dialog -->
    <newDocumentDialog
      :dialog-trigger="newObjectDialogTrigger"
      @trigger-dialog-close="newObjectDialogClose"
    />

    <!-- Existing document dialog -->
    <existingDocumentDialog
      :dialog-trigger="existingObjectDialogTrigger"
      @trigger-dialog-close="existingObjectDialogClose"
    />

    <!-- Project close dialog -->
    <projectCloseCheckDialog
     :dialog-trigger="projectCloseCheckDialogTrigger"
     :dialog-mode="'projectClose'"
      @trigger-dialog-close="projectCloseCheckDialogClose"
    />

    <!-- Keybind dialog -->
    <keybindCheatsheetDialog
      :dialog-trigger="keybindsDialogTrigger"
      @trigger-dialog-close="keybindsDialogClose"
    />

    <!-- Load project dialog -->
    <loadProjectCheckDialog
      :dialog-trigger="loadProjectDialogTrigger"
      @trigger-dialog-close="loadProjectDialogClose"
    />

    <!-- Merge project dialog -->
    <mergeProjectCheckDialog
      :dialog-trigger="mergeProjectDialogTrigger"
      @trigger-dialog-close="mergeProjectDialogClose"
    />

    <!-- Merge project dialog -->
    <customCssEditorDialog
      :dialog-trigger="customCssEditorDialogTrigger"
      @trigger-dialog-close="customCssEditorDialogClose"
    />

    <!-- New project dialog -->
    <newProjectCheckDialog
      :dialog-trigger="newProjectDialogTrigger"
      @trigger-dialog-close="newProjectDialogClose"
    />

    <!-- About app dialog -->
    <aboutAppDialog
      :dialog-trigger="aboutAppDialogTrigger"
      @trigger-dialog-close="aboutAppDialogClose"
    />

    <!-- Changelog dialog -->
    <changeLogDialog
      :dialog-trigger="changeLogDialogTrigger"
      @trigger-dialog-close="changeLogDialogClose"
    />

    <!-- Program settings dialog -->
    <programSettingsDialog
      :dialog-trigger="programSettingsDialogTrigger"
      @trigger-dialog-close="programSettingsDialogClose"
    />

    <!-- Program tutorials dialog -->
    <programTutorialsDialog
      :dialog-trigger="programTutorialsDialogTrigger"
      @trigger-dialog-close="programTutorialsDialogClose"
    />

    <!-- Advanced search guide dialog -->
    <advancedSearchGuideDialog
      :dialog-trigger="advancedSearchGuideDialogTrigger"
      @trigger-dialog-close="advancedSearchGuideDialogClose"
    />

    <!-- Tips, Tricks & Trivia dialog -->
    <tipsTricksTriviaDialog
      :dialog-trigger="tipsTricksDialogTrigger"
      @trigger-dialog-close="tipsTricksDialogClose"
    />

    <!-- License dialog -->
    <licenseDialog
      :dialog-trigger="licenseDialogTrigger"
      @trigger-dialog-close="licenseDialogClose"
    />

    <!-- Repair project dialog -->
    <repairProjectDialog
      :dialog-trigger="repairProjectDialogTrigger"
      @trigger-dialog-close="repairProjectDialogClose"
    />

    <!-- Export project dialog -->
    <exportProjectDialog
      :prepicked-ids="exportIDlist"
      :dialog-trigger="exportProjectDialogTrigger"
      @trigger-dialog-close="exportProjectDialogClose"
    />

    <!-- Delete tag dialog -->
    <massDeleteDocumentsCheckDialog
      :dialog-trigger="massDocumentDeleteDialogTrigger"
      @trigger-dialog-close="massDocumentDeleteDialogClose"
    />

    <!-- Project settings dialog -->
    <projectSettingsdDialog
      :dialog-trigger="projectSettingsDialogTrigger"
      @trigger-dialog-close="projectSettingsDialogClose"
    />

    <q-btn-group
      flat
      class="AppControl__buttons"
    >

      <!-- Options button -->
      <q-btn
        flat
        :ripple="false"
        dark
        size='md'
        no-caps
        @click="programSettingsDialogAssignUID"
       >
        <q-img
          :src="appLogo"
          style="height: 26px; width: 26px; margin: 0 -9px;"
        />
        <q-tooltip anchor="center right" self="center left" :delay="500">
          Настройки программы
        </q-tooltip>

      </q-btn>
      <q-separator color="primary" vertical dark style="opacity: 0.1;" />
      <!-- Project button-->
      <q-btn
        flat
        :ripple="false"
        dark
        size='md'
        no-caps
       >
        Проект

        <q-menu
          @show="checkProjectStatus"
          anchor="bottom left"
          class="bg-gunmetal-light"
          dark
          square
          >
          <q-list class="bg-gunmetal-light" dark>

             <q-item
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              @click="newProjectAssignUID"
            >
              <q-item-section>Новый проект</q-item-section>
               <q-item-section avatar>
                <q-icon name="mdi-plus" />
              </q-item-section>
            </q-item>

            <q-separator dark />

            <q-item
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              @click="commenceSave"
              :disable="!projectExists || isFrontpage"
            >
              <q-item-section>Сохранить текущий проект</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-package-variant-closed" />
              </q-item-section>
            </q-item>

            <q-item
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              @click="loadProjectAssignUID"
            >
              <q-item-section>Загрузить существующий проект</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-package-variant" />
              </q-item-section>
            </q-item>

            <q-separator dark />

            <q-item
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              @click="triggerExport([])"
              :disable="!projectExists || isFrontpage"
            >
              <q-item-section>Экспорт проекта/документов</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-database-export-outline" />
              </q-item-section>
            </q-item>

            <q-separator dark />

            <q-item
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              @click="navigateToProjectPage"
              :disable="!projectExists || isProjectPage"
            >
              <q-item-section>Показать обзор проекта</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-chart-bar" />
              </q-item-section>
            </q-item>

            <q-item
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              @click="projectCloseCheckDialogAssignUID"
              :disable="!projectExists || isFrontpage"
            >
              <q-item-section>Закрыть проект</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-exit-to-app" />
              </q-item-section>
            </q-item>

            <q-separator dark />

            <q-item
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              @click="projectSettingsDialogAssignUID"
              :disable="!projectExists || isFrontpage"
            >
              <q-item-section>Настройки проекта</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-book-cog-outline" />
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>Дополнительные инструменты проекта</q-item-section>
              <q-item-section avatar>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
              <q-menu anchor="top end" self="top start">
                <q-list class="bg-gunmetal text-accent">

                  <q-item
                    v-close-popup
                    clickable
                    active
                    active-class="bg-gunmetal-light text-cultured"
                    class="noHigh"
                    @click="mergeProjectAssignUID"
                    :disable="!projectExists || isFrontpage"
                  >
                    <q-item-section>Объединить другой проект с текущим</q-item-section>
                    <q-item-section avatar>
                      <q-icon name="mdi-folder-plus-outline" />
                    </q-item-section>
                  </q-item>

                  <q-item
                    v-close-popup
                    clickable
                    active
                    active-class="bg-gunmetal-light text-cultured"
                    class="noHigh"
                    @click="customCssEditorAssignUID"
                    :disable="!projectExists"
                  >
                    <q-item-section>Редактор пользовательского CSS</q-item-section>
                    <q-item-section avatar>
                      <q-icon name="mdi-language-css3" />
                    </q-item-section>
                  </q-item>

                  <q-separator dark />

                  <q-item
                    v-close-popup
                    clickable
                    active
                    active-class="bg-gunmetal-light text-cultured"
                    class="noHigh"
                    @click="repairProjectAssignUID"
                    :disable="!projectExists || isFrontpage"
                  >
                    <q-item-section>Восстановление старого проекта</q-item-section>
                    <q-item-section avatar>
                      <q-icon name="mdi-wrench" />
                    </q-item-section>
                  </q-item>

                </q-list>
              </q-menu>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <!-- Tools button-->
      <q-btn
        flat
        :ripple="false"
        dark
        size='md'
        no-caps
       >
        Инструменты

        <q-menu
          @show="checkProjectStatus"
          anchor="bottom left"
          class="bg-gunmetal-light"
          dark
          square
          >
          <q-list class="bg-gunmetal-light" dark>

             <q-item
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              @click="newObjectAssignUID"
              :disable="!projectExists || isFrontpage"
            >
              <q-item-section>Быстрое добавление документа</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-text-box-plus-outline" />
              </q-item-section>
            </q-item>

             <q-item
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              @click="existingObjectAssignUID"
              :disable="!projectExists || isFrontpage"
            >
              <q-item-section>Быстрый поиск документа</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-database-search" />
              </q-item-section>
            </q-item>

            <q-separator dark />

            <q-item
              clickable
              v-close-popup
              @click="massDocumentDeleteDialogAssignUID"
              :disable="!projectExists || isFrontpage"
              >
              <q-item-section class="text-secondary"><b>Массовое удаление документов</b></q-item-section>
              <q-item-section avatar class="text-secondary">
                <q-icon name="mdi-text-box-remove-outline" />
              </q-item-section>
            </q-item>

            <q-separator dark />

              <q-item
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              @click="toggleHierarchicalTree"
              :disable="!projectExists || isFrontpage"
            >
              <q-item-section>Переключить иерархическое дерево</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-page-layout-sidebar-left" />
              </q-item-section>
            </q-item>

            <q-item
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              @click="SSET_setNoteCorkboardWindowVisible"
              :disable="!projectExists || isFrontpage"
            >
              <q-item-section>Показать доску заметок</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-clipboard-text-outline" />
              </q-item-section>
            </q-item>

            <q-separator dark />

            <q-item
              @click="programSettingsDialogAssignUID"
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              >
              <q-item-section>Настройки программы</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-tune" />
              </q-item-section>
            </q-item>

          </q-list>
        </q-menu>
      </q-btn>

      <!-- Help button-->
      <q-btn
        flat
        :ripple="false"
        dark
        size='md'
        no-caps
       >
        Справка и информация
        <q-menu
          anchor="bottom left"
          class="bg-gunmetal-light"
          dark
          square
        >
          <q-list class="bg-gunmetal-light" dark>

            <q-item
              @click="keybindsDialogAssignUID"
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              >
              <q-item-section>Показать список горячих клавиш</q-item-section>
                <q-item-section avatar>
                <q-icon name="mdi-keyboard-settings" />
              </q-item-section>
            </q-item>

            <q-item
              @click="advancedSearchGuideAssignUID"
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              >
              <q-item-section>Руководство по расширенному поиску</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-file-question" />
              </q-item-section>
            </q-item>

            <q-item
              @click="tipsTricksAssignUID"
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              >
              <q-item-section>Советы, приёмы и интересные факты</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-fire-alert" />
              </q-item-section>
            </q-item>

             <q-item
              @click="programTutorialsDialogAssignUID"
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              >
              <q-item-section>Руководства по программе</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-book-open-page-variant" />
              </q-item-section>
            </q-item>

            <q-separator dark />

            <q-item
              @click="changeLogDialogAssignUID"
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              >
              <q-item-section>Список изменений</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-clipboard-text" />
              </q-item-section>
            </q-item>

            <q-item
              @click="aboutAppDialogAssignUID"
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              >
              <q-item-section>О программе Fantasia Archive</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-information-variant" />
              </q-item-section>
            </q-item>

            <q-item
              @click="licenseAssignUID"
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              >
              <q-item-section>Лицензия</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-script-text-outline" />
              </q-item-section>
            </q-item>

            <q-separator dark />

            <q-item
              @click="toggleDevTools"
              v-close-popup
              clickable
              active
              active-class="bg-gunmetal-light text-cultured"
              class="noHigh"
              >
              <q-item-section>Переключить инструменты разработчика</q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-code-tags" />
              </q-item-section>
            </q-item>

          </q-list>
        </q-menu>

      </q-btn>
    </q-btn-group>

  </div>

</template>

<script lang="ts">

import { Component, Watch } from "vue-property-decorator"

import BaseClass from "src/BaseClass"
import projectCloseCheckDialog from "src/components/dialogs/ProjectCloseCheck.vue"
import keybindCheatsheetDialog from "src/components/dialogs/KeybindCheatsheet.vue"
import loadProjectCheckDialog from "src/components/dialogs/LoadProjectCheck.vue"
import mergeProjectCheckDialog from "src/components/dialogs/MergeProjectCheck.vue"
import newProjectCheckDialog from "src/components/dialogs/NewProjectCheck.vue"
import repairProjectDialog from "src/components/dialogs/RepairProject.vue"
import aboutAppDialog from "src/components/dialogs/AboutApp.vue"
import changeLogDialog from "src/components/dialogs/ChangeLog.vue"
import programSettingsDialog from "src/components/dialogs/ProgramSettings.vue"
import programTutorialsDialog from "src/components/dialogs/ProgramTutorials.vue"
import advancedSearchGuideDialog from "src/components/dialogs/AdvancedSearchGuide.vue"
import newDocumentDialog from "src/components/dialogs/NewDocument.vue"
import existingDocumentDialog from "src/components/dialogs/ExistingDocument.vue"
import tipsTricksTriviaDialog from "src/components/dialogs/TipsTricksTrivia.vue"
import licenseDialog from "src/components/dialogs/License.vue"
import exportProjectDialog from "src/components/dialogs/ExportProject.vue"
import massDeleteDocumentsCheckDialog from "src/components/dialogs/MassDeleteDocumentsCheck.vue"
import projectSettingsdDialog from "src/components/dialogs/ProjectSettings.vue"
import customCssEditorDialog from "src/components/dialogs/CustomCssEditor.vue"

import { Loading, QSpinnerGears } from "quasar"
import { saveProject } from "src/scripts/projectManagement/projectManagent"
import { toggleDevTools } from "src/scripts/utilities/devTools"

import appLogo from "src/assets/appLogo.png"
import appSearchBox from "src/components/appHeader/AppSearchBox.vue"

@Component({
  components: {
    appSearchBox,
    projectCloseCheckDialog,
    keybindCheatsheetDialog,
    loadProjectCheckDialog,
    mergeProjectCheckDialog,
    newProjectCheckDialog,
    aboutAppDialog,
    changeLogDialog,
    advancedSearchGuideDialog,
    programSettingsDialog,
    programTutorialsDialog,
    newDocumentDialog,
    existingDocumentDialog,
    tipsTricksTriviaDialog,
    licenseDialog,
    repairProjectDialog,
    exportProjectDialog,
    massDeleteDocumentsCheckDialog,
    projectSettingsdDialog,
    customCssEditorDialog
  }
})
export default class AppControl extends BaseClass {
  /****************************************************************/
  // Import handling
  /****************************************************************/

  /**
   * Toggles the developer tools on and off
   */
  toggleDevTools = toggleDevTools

  /**
   * Just an image
   */
  appLogo = appLogo

  /****************************************************************/
  // Basic component functionality
  /****************************************************************/

  /**
   * Determines if the project exists or not
   */
  projectExists: undefined | string | boolean = false

  /**
   * Determines if we are on frontpage or not
   */
  isFrontpage = true

  /**
   * Determines if we are on project page or not
   */
  isProjectPage = true

  created () {
    this.checkProjectStatus()
  }

  @Watch("SGET_getProjectName")
  checkProjectStatus () {
    this.projectExists = (this.SGET_getProjectName.length > 0)
    this.isFrontpage = (this.$route.path === "/")
    this.isProjectPage = (this.$route.path === "/project")
  }

  /****************************************************************/
  // Local keybinds
  /****************************************************************/

  @Watch("SGET_getCurrentKeyBindData", { deep: true })
  processKeyPush () {
    // Open full page search
    if (this.determineKeyBind("openFullPageSearch") && !this.SGET_getDialogsState) {
      this.fullPageSeachPopupClose()

      setTimeout(() => {
        this.fullPageSeachPopupAssignUID()
      }, 100)
    }

    // Keybind cheatsheet
    if (this.determineKeyBind("openKeybindsCheatsheet") && !this.SGET_getDialogsState) {
      this.keybindsDialogAssignUID()
    }

    // Open app options page
    if (this.determineKeyBind("openAppOptions") && !this.SGET_getDialogsState) {
      this.programSettingsDialogAssignUID()
    }

    // Navigate to project overview
    if (this.determineKeyBind("navigateToProjectOverview") && this.projectExists && !this.isProjectPage) {
      this.navigateToProjectPage()
    }

    // Tohhle dev tools
    if (this.determineKeyBind("toggleDeveloperTools")) {
      this.toggleDevTools()
    }

    // Tohhle custom CSS editor
    if (this.determineKeyBind("openCustomCssEditor")) {
      this.customCssEditorAssignUID()
    }
  }

  /****************************************************************/
  // Full page search pop-up
  /****************************************************************/

  fullPageSeachPopupTrigger: string | false = false
  fullPageSeachPopupClose () {
    this.fullPageSeachPopupTrigger = false
  }

  fullPageSeachPopupAssignUID () {
    this.fullPageSeachPopupTrigger = this.generateUID()
  }

  /****************************************************************/
  // Navigate to project page action
  /****************************************************************/

  navigateToProjectPage () {
    this.$router.push({ path: "/project" }).catch((e: {name: string}) => {
      if (e && e.name !== "NavigationDuplicated") {
        console.log(e)
      }
    })
  }

  /****************************************************************/
  // Save project action
  /****************************************************************/
  commenceSave () {
    const projectName = this.SGET_getProjectName
    const setup = {
      message: "<h4>Сохранение текущего проекта...</h4>",
      spinnerColor: "primary",
      messageColor: "cultured",
      spinnerSize: 120,
      backgroundColor: "dark",
      // @ts-ignore
      spinner: QSpinnerGears
    }
    saveProject(projectName, Loading, setup, this.$q)
  }

  /****************************************************************/
  // Close project dialog
  /****************************************************************/

  projectCloseCheckDialogTrigger: string | false = false
  projectCloseCheckDialogClose () {
    this.projectCloseCheckDialogTrigger = false
  }

  projectCloseCheckDialogAssignUID () {
    this.projectCloseCheckDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Import project dialog
  /****************************************************************/

  loadProjectDialogTrigger: string | false = false
  loadProjectDialogClose () {
    this.loadProjectDialogTrigger = false
  }

  loadProjectAssignUID () {
    this.loadProjectDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Merge project dialog
  /****************************************************************/

  mergeProjectDialogTrigger: string | false = false
  mergeProjectDialogClose () {
    this.mergeProjectDialogTrigger = false
  }

  mergeProjectAssignUID () {
    this.mergeProjectDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Custom CSS editor dialog
  /****************************************************************/

  customCssEditorDialogTrigger: string | false = false
  customCssEditorDialogClose () {
    this.customCssEditorDialogTrigger = false
  }

  customCssEditorAssignUID () {
    this.customCssEditorDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Export project dialog
  /****************************************************************/

  exportProjectDialogTrigger: string | false = false
  exportProjectDialogClose () {
    this.exportProjectDialogTrigger = false
  }

  @Watch("SGET_getExportDialogState", { deep: true })
  onSettingsChange () {
    const exportState = this.SGET_getExportDialogState

    this.exportIDlist = exportState.prepickedValue
    this.exportProjectAssignUID()
  }

  triggerExport (IDlist: string[]) {
    this.SSET_setExportDialogState(IDlist)
  }

  exportIDlist: string[]= []
  exportProjectAssignUID () {
    this.exportProjectDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // New project dialog
  /****************************************************************/

  newProjectDialogTrigger: string | false = false
  newProjectDialogClose () {
    this.newProjectDialogTrigger = false
  }

  newProjectAssignUID () {
    this.newProjectDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Keybings cheatsheet dialog
  /****************************************************************/

  keybindsDialogTrigger: string | false = false
  keybindsDialogClose () {
    this.keybindsDialogTrigger = false
  }

  keybindsDialogAssignUID () {
    this.keybindsDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // About app dialog
  /****************************************************************/

  aboutAppDialogTrigger: string | false = false
  aboutAppDialogClose () {
    this.aboutAppDialogTrigger = false
  }

  aboutAppDialogAssignUID () {
    this.aboutAppDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Changelog dialog
  /****************************************************************/

  changeLogDialogTrigger: string | false = false
  changeLogDialogClose () {
    this.changeLogDialogTrigger = false
  }

  changeLogDialogAssignUID () {
    this.changeLogDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Program settings dialog
  /****************************************************************/

  programSettingsDialogTrigger: string | false = false
  programSettingsDialogClose () {
    this.programSettingsDialogTrigger = false
  }

  programSettingsDialogAssignUID () {
    this.programSettingsDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Program tutorials dialog
  /****************************************************************/

  programTutorialsDialogTrigger: string | false = false
  programTutorialsDialogClose () {
    this.programTutorialsDialogTrigger = false
  }

  programTutorialsDialogAssignUID () {
    this.programTutorialsDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Advanced search guide dialog
  /****************************************************************/

  advancedSearchGuideDialogTrigger: string | false = false
  advancedSearchGuideDialogClose () {
    this.advancedSearchGuideDialogTrigger = false
  }

  advancedSearchGuideAssignUID () {
    this.advancedSearchGuideDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // New document dialog
  /****************************************************************/

  newObjectDialogTrigger: string | false = false
  newObjectDialogClose () {
    this.newObjectDialogTrigger = false
  }

  newObjectAssignUID () {
    this.newObjectDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Existing document dialog
  /****************************************************************/

  existingObjectDialogTrigger: string | false = false
  existingObjectDialogClose () {
    this.existingObjectDialogTrigger = false
  }

  existingObjectAssignUID () {
    this.existingObjectDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Tips, Tricka & Trivia dialog
  /****************************************************************/

  tipsTricksDialogTrigger: string | false = false
  tipsTricksDialogClose () {
    this.tipsTricksDialogTrigger = false
  }

  tipsTricksAssignUID () {
    this.tipsTricksDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // License dialog
  /****************************************************************/

  licenseDialogTrigger: string | false = false
  licenseDialogClose () {
    this.licenseDialogTrigger = false
  }

  licenseAssignUID () {
    this.licenseDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Repair project dialog
  /****************************************************************/

  repairProjectDialogTrigger: string | false = false
  repairProjectDialogClose () {
    this.repairProjectDialogTrigger = false
  }

  repairProjectAssignUID () {
    this.repairProjectDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Mass delete documents dialog
  /****************************************************************/

  massDocumentDeleteDialogTrigger: string | false = false
  massDocumentDeleteDialogClose () {
    this.massDocumentDeleteDialogTrigger = false
  }

  massDocumentDeleteDialogAssignUID () {
    this.massDocumentDeleteDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Project settings dialog
  /****************************************************************/

  projectSettingsDialogTrigger: string | false = false
  projectSettingsDialogClose () {
    this.projectSettingsDialogTrigger = false
  }

  projectSettingsDialogAssignUID () {
    this.projectSettingsDialogTrigger = this.generateUID()
  }
}
</script>

<style lang="scss" scoped>
.AppControl {
  background: rgba(0, 0, 0, 0.1);

  &__buttons {
    height: 40px;
    -webkit-app-region: no-drag;
  }
}
</style>
