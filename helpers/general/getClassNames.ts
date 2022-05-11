import { TPropClassNames } from '@/types/index'

type TGetClassNamesProps = TPropClassNames

type TGetClassNamesOutput = {
  readonly [key: string]: boolean
}

const getClassNames = ({
  classNames = []
}: TGetClassNamesProps): TGetClassNamesOutput =>
  classNames
    .filter(className => className)
    .reduce((acc, cur) => ({ ...acc, [cur]: true }), {})

export default getClassNames
