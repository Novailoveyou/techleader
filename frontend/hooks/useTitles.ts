import { useAt } from '@/hooks/index'
import { routes } from '@/config/index'

// TODO: improve types

// type TUseTitlesOutput = {
//   [key in keyof typeof routes.front]?: string
// }

const useTitles = () => {
  const at = useAt()

  const output = {
    home: at.en ? 'Home' : 'Главная',
    about: at.en ? 'About' : 'О компании',
    certification: at.en ? 'Certification' : 'Сертификация',
    clients: at.en ? 'Main clients' : 'Основные заказчики',
    contact: at.en ? 'Contacts' : 'Контакты',
    geography: at.en ? 'Geography' : 'География',
    products: at.en ? 'Products' : 'Продукция',
    services: at.en ? 'Services' : 'Услуги',
    partners: at.en ? 'Partners' : 'Партнеры'
  }

  return output
}

export default useTitles
