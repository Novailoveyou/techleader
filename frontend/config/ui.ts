import { TGeneralDataUrl } from '@/types/index'

type TUI = {
  base64pixel: TGeneralDataUrl
  nonBrakingSpace: '\u00A0'
}

const ui: TUI = {
  base64pixel:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  nonBrakingSpace: '\u00A0'
}

export default ui
