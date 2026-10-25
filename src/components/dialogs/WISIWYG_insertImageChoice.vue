<template>
    <q-dialog
      v-model="dialogModel"
      @before-hide="triggerDialogClose"
      no-route-dismiss
      >
      <q-card v-show="startupInput" dark class="WISIWYG_insertImageChoiceDialog">
        <q-card-section class="row justify-center">
          <h6 class="text-center q-my-sm">Вставить изображение</h6>
        </q-card-section>

        <q-card-section class="row q-mx-xl">
          <div>
            <span class="text-primary">Обратите внимание на следующее:</span>
            <ul>
              <li>FA НЕ сохраняет добавленные здесь изображения как часть проекта</li>
              <li>Добавляются только пути/URL к локальному или онлайн-расположению используемых изображений</li>
              <li>Если изображение удалить, переименовать или переместить онлайн либо на локальном диске, оно также перестанет отображаться в FA</li>
              <li>То же касается любого изменения путей</li>
              <li>Чтобы обойти это ограничение, рекомендуется использовать облачное хранилище с неизменными URL или определённую структуру папок и файлов, например: <code class="doc-token">C:\FA Projects\&lt;your project&gt;\images\&lt;image.jpg|.png|etc&gt;</code></li>
            </ul>
          </div>
        </q-card-section>

        <q-card-section class="row justify-center" horizontal>
          <q-card-section>
            <q-card-actions align="around">
              <q-btn
              flat
              label="Онлайн-изображение"
              color="primary"
              class="q-px-xl q-pt-lg q-pb-md"
              @click="openOnlineImageInput"
              />
            </q-card-actions>
          </q-card-section>

          <q-separator vertical />

          <q-card-section>
            <q-card-actions align="around">
              <q-btn
              flat
              label="Локальное изображение"
              color="primary"
              class="q-px-xl q-pt-lg q-pb-md"
              @click="openLocalImageSelector"
              />
            </q-card-actions>
          </q-card-section>
        </q-card-section>

        <q-card-actions align="around" class="q-mx-xl q-mt-sm q-mb-sm" />

      </q-card>

      <q-card v-show="!startupInput" dark class="WISIWYG_insertImageChoiceDialog">
        <q-card-section class="row justify-center">
          <h6 class="text-center q-my-sm">Вставить онлайн-URL</h6>
        </q-card-section>

        <q-card-section class="row justify-around">
           <q-input
            v-model="externalLink"
            outlined
            filled
            dense
            type="url"
            style="width: 80%;"
            label="Ссылка на изображение (URL)"
            ref="externalLinkRef"
          />
        </q-card-section>

        <q-card-section class="row justify-around">
           <q-card-actions align="around">
              <q-btn
              flat
              label="Отправить"
              color="primary"
              @click="passImageLink(externalLink)"
              />
            </q-card-actions>
        </q-card-section>

            <q-card-actions align="around" class="q-mx-xl q-mt-sm q-mb-sm" />

      </q-card>
    </q-dialog>
</template>

<script lang="ts">

import { Component, Watch } from "vue-property-decorator"
import { Loading, QSpinnerGears } from "quasar"

import DialogBase from "src/components/dialogs/_DialogBase"
import { remote } from "electron"

@Component({
  components: { }
})
export default class WISIWYG_insertImageChoice extends DialogBase {
  /**
   * React to dialog opening request
   */
  @Watch("dialogTrigger")
  checkForOpenedProject (val: string|false) {
    if (val) {
      this.openDialog()
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
    this.startupInput = true
    this.externalLink = ""
  }

  startupInput = true
  externalLink = ""

  openLocalImageSelector () {
    const loadingSetup = {
      message: "<h4>Выберите изображение...</h4>",
      spinnerColor: "primary",
      messageColor: "cultured",
      spinnerSize: 120,
      backgroundColor: "dark",
      // @ts-ignore
      spinner: QSpinnerGears
    }

    // @ts-ignore
    Loading.show(loadingSetup)

    remote.dialog.showOpenDialog({
      filters: [
        { name: "Изображения", extensions: ["jpg", "png", "gif", "webp"] }
      ],
      properties: ["openFile"]
    }).then((result) => {
      Loading.hide()

      /*eslint-disable */
      const imagePath = result.filePaths[0]

      if (!imagePath) {
        return
      }

      this.passImageLink(`file:///${imagePath}`)

    }).catch(err => {
      console.log(err)
    })
  }

  async openOnlineImageInput(){
    this.startupInput = false

    await this.$nextTick()

    // @ts-ignore
    this.$refs.externalLinkRef.focus()

  }

  passImageLink(link: string){
    this.$emit('passing-image-link', link)
    this.triggerDialogClose()
  }
}
</script>

<style lang="scss" scoped>

.WISIWYG_insertImageChoiceDialog {
  min-width: 800px;
}
</style>
