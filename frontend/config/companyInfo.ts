import { ui } from '@/config/index'

const companyInfo = {
  name: {
    default: {
      en: 'TechnoLeader',
      ru: 'Технолидер'
    }
  },
  about: {
    en: 'Oilfield services company focused on creating technical and engineering solutions for the oil and gas industry',
    ru: `Нефтесервисная компания, основной задачей которой является создание инженерных и${ui.nonBrakingSpace}технологических решений отвечающих вызовам нефтегазовой индустрии`
  }
}

export default companyInfo
