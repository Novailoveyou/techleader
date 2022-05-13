import { ui } from '@/config/index'

const addSpacesToNumber = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ui.nonBrakingSpace)

export default addSpacesToNumber
