import { domainNames, ui } from '@/config/index'
import { useAt } from '@/hooks/index'

const useCompanyInfo = () => {
  const at = useAt()

  const companyInfo = {
    name: {
      default: at.en ? 'TechnoLeader' : 'Технолидер',
      full: at.en
        ? 'Limited Liability Company "S 7 Space Transport Systems", subdivision of Gorki Leninskiye'
        : 'Общество с ограниченной ответственностью «С 7 Космические Транспортные Системы», подразделение Горки Ленинские',
      short: at.en ? 'LLC "TechnoLeader"' : 'ООО «Технолидер»'
    },
    type: {
      default: at.en
        ? 'Research organization'
        : 'Научно-производственная организация',
      seo: 'ResearchOrganization'
    },
    desc: at.en
      ? 'Russian oilfield services company'
      : 'Российская нефтесервисная компания',
    about: at.en
      ? 'Oilfield services company focused on creating technical and engineering solutions for the oil and gas industry'
      : `Нефтесервисная компания, основной задачей которой является создание инженерных и${ui.nonBrakingSpace}технологических решений отвечающих вызовам нефтегазовой индустрии`,
    tagline: null,
    addresses: {
      default: {
        yandexMaps: {
          name: at.en ? 'Development Center C7' : 'Центр разработок С7'
        },
        country: {
          code: 'RU',
          name: { default: at.en ? 'Russia' : 'Россия' }
        },
        province: {
          type: {
            default: at.en ? "oblast'" : 'область',
            short: at.en ? "oblast'" : 'обл.'
          },
          name: {
            default: at.en ? 'Moskovskaya' : 'Московская'
          }
        },
        region: {
          type: {
            default: at.en ? "region'" : 'район',
            short: at.en ? "region'" : 'р-н'
          },
          name: at.en ? 'Leninskiy' : 'Ленинский'
        },
        city: {
          type: {
            default: at.en ? 'rabochiy posyolok' : 'рабочий посёлок',
            short: at.en ? 'rabochiy posyolok' : 'п.'
          },
          name: at.en ? 'Gorki Leninskiye' : 'Горги Ленинские'
        },
        area: {
          type: {
            default: at.en ? 'promzona' : 'промзона'
          },
          name: at.en ? 'Tekhnopark' : 'Технопарк',
          house: at.en ? 'M4' : 'М4'
        },
        zip: '142712',
        street: {
          type: {
            default: at.en ? 'ulitsa' : 'улица',
            short: at.en ? 'St.' : 'ул.'
          },
          name: at.en ? 'Vostochnaya' : 'Восточная',
          house: at.en ? '5' : 'вл. 5'
        }
      }
    },
    emails: {
      default: {
        city: at.en ? 'Moscow' : 'Москва',
        href: `mailto:contact@${domainNames.default}`,
        val: `contact@${domainNames.default}`,
        contactType: at.en ? 'Sales team' : 'Отдел продаж',
        areaServed: ['EN', 'RU'],
        languages: ['English', 'Russian']
      }
    },
    phoneNumbers: {
      default: {
        city: at.en ? 'Moscow' : 'Москва',
        href: 'tel:+7-345-266-21-05',
        val: '+7 (345) 266-21-05',
        contactType: at.en ? 'Customer support' : 'Техподдержка',
        areaServed: ['EN', 'RU'],
        languages: ['English', 'Russian']
      }
    }
  }

  return companyInfo
}

export default useCompanyInfo
