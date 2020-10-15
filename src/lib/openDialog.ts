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
        // @ts-ignore
        visible: true,
        'onUpdate:visible': (newVisible: boolean) => {
          if (!newVisible) {
            close()
          }
        },
        // @ts-ignore
        closeOnClickOverlay: options?.closeOnClickOverlay,
        // @ts-ignore
        ok: options?.ok,
        // @ts-ignore
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
