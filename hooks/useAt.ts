import { useRouter } from 'next/router'

const useAt = () => {
  const { pathname, asPath, locale } = useRouter()

  const getSplitedPath = pathname
    .split('/')
    .filter(item => item !== '' && item !== '[url]')

  return {
    ru: locale === 'ru',
    en: locale === 'en',
    home: getSplitedPath[0] === undefined
  }
}

export default useAt
