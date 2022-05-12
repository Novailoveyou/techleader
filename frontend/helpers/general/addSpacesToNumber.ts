const addSpacesToNumber = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')

export default addSpacesToNumber
