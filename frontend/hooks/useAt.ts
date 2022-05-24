import { useRouter } from 'next/router'

const useAt = () => {
  const router = useRouter()
  const { pathname, asPath, locale } = useRouter()

  const splitedPath = pathname
    .split('/')
    .filter(item => item !== '' && item !== '[url]')

  return {
    ru: locale === 'ru',
    en: locale === 'en',
    home: splitedPath[0] === undefined
  }
}

export default useAt
