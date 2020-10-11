import Dialog from "./Dialog.vue";
import { createApp, h, PropType } from 'vue'

type optionsType = Partial<{
  title: string,
  content: string,
  closeOnClickOverlay: boolean,
  ok: PropType<() => boolean>,
  cancel: PropType<() => boolean>
}>

export const openDialog = (options?: optionsType) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        'onUpdate:visible': (newVisible: boolean) => {
          if (!newVisible) {
            close()
          }
        },
        closeOnClickOverlay: options?.closeOnClickOverlay,
        ok: options?.ok,
        cancel: options?.cancel
      }, {
        title: options?.title,
        content: options?.content
      })
    }
  })
  const close = () => {
    app.unmount(div)
    div.remove()
  }
  app.mount(div)
}
