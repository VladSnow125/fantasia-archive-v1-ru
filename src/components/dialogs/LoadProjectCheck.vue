<template>
    <q-dialog
      v-model="dialogModel"
      @before-hide="triggerDialogClose"
      no-route-dismiss
      >
      <q-card dark class="documentCloseDialog">
         <q-card-section class="row justify-center">
          <h6 class="text-center q-my-sm">Загрузить существующий проект</h6>
        </q-card-section>

        <q-card-section class="row justify-center q-mx-xl">
          <div>
            Учтите, что загружаемый проект <span class="text-bold text-secondary">ПОЛНОСТЬЮ ПЕРЕЗАПИШЕТ</span> текущий открытый проект.
            <br>
            Если вы ещё не сохранили текущий проект, сделайте это сейчас, чтобы избежать <span class="text-bold text-secondary">ПОЛНОЙ ПОТЕРИ</span> всех данных текущего проекта!
          </div>
        </q-card-section>

        <q-card-actions align="around" class="q-mx-xl q-mt-lg q-mb-md">
          <q-btn
          flat
          label="Отмена"
          color="accent"
          v-close-popup />
          <q-btn
          flat
          label="Сохранить проект"
          color="primary"
          @click="commenceSave"
           />
          <q-btn
            flat
            label="Загрузить проект"
            color="primary"
            v-close-popup
            @click="loadProject()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script lang="ts">

import { Component, Watch } from "vue-property-decorator"

import DialogBase from "src/components/dialogs/_DialogBase"
import { saveProject, loadExistingProject } from "src/scripts/projectManagement/projectManagent"
import { Loading, QSpinnerGears } from "quasar"

@Component({
  components: { }
})
export default class LoadProjectCheck extends DialogBase {
  /**
   * React to dialog opening request
   */
  @Watch("dialogTrigger")
  checkForOpenedProject (val: string|false) {
    if (val) {
      const projectName = this.SGET_getProjectName

      if (projectName.length > 0) {
        this.openDialog()
      }
      else {
        this.loadProject()
      }
    }
  }

  /**
   * Open the the dialog if project is present on the window
   */
  openDialog () {
    if (this.SGET_getDialogsState) {
      return
    }
    this.SSET_setDialogState(true)
    this.dialogModel = true
  }

  /**
  * Load a new project
  */
  loadProject () {
    const setup = {
      message: "<h4>Загрузка выбранного проекта...</h4>",
      spinnerColor: "primary",
      messageColor: "cultured",
      spinnerSize: 120,
      backgroundColor: "dark",
      // @ts-ignore
      spinner: QSpinnerGears
    }

    this.SSET_setProjecLoadingState(false)
    loadExistingProject(this.$router, Loading, setup, this.$q, this)
  }

  /**
   * Export the current project
   */
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
}
</script>

<style lang="scss" scoped>

.documentCloseDialog {
  min-width: 600px;
}
</style>
