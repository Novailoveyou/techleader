import stls from '@/styles/components/svgs/general/SvgGeneralLogo.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { useCompanyInfo } from '@/hooks/index'
import { SvgContainer } from '@/components/layout'

type TSvgGeneralLogoProps = TPropClassNames & TPropColor

const SvgGeneralLogo = ({ classNames, color }: TSvgGeneralLogoProps) => {
  const company = useCompanyInfo()
  return (
    <SvgContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 56 104' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{company.name.default}</title>
        <g clipPath='url(#clip0_136_73)'>
          <g opacity='0.8'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M42.1726 2.36902H55.7693V10.4237H42.1726V2.36902Z'
              fill='url(#paint0_linear_136_73)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M41.4813 1.42141V18.9522H40.5595V1.42141C40.0986 1.42141 39.8681 1.18451 39.8681 0.710706C39.8681 0.236902 40.329 0 41.0204 0C41.7117 0 42.1726 0.236902 42.1726 0.710706C42.1726 1.18451 41.9422 1.42141 41.4813 1.42141Z'
              fill='url(#paint1_linear_136_73)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M26.041 17.5308H0V25.5854H8.98761V53.7768H17.0534V25.5854H26.041V17.5308ZM31.111 61.5945H55.3084V69.6492H23.0452V33.6401H31.111V61.5945Z'
              fill='url(#paint2_linear_136_73)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M34.5677 52.3554H37.1027L38.7159 37.1936H38.0245V34.5877H39.1768L40.7899 19.8998H39.8681V17.2938H49.7775V19.8998H49.0862L50.6993 34.5877H51.6212V37.1936H50.9298L52.7734 52.3554H54.8475V56.1458H34.5677V52.3554ZM43.0944 19.8998L44.9381 21.795L46.7817 19.8998H43.0944ZM42.4031 20.3736L41.7117 25.5854L44.4772 22.5057L42.4031 20.3736ZM41.4813 28.1913L40.7899 34.3508L44.4772 31.0342L41.4813 28.1913ZM41.9422 34.5877H48.3948L45.1685 31.7449L41.9422 34.5877ZM49.0862 33.877L48.3948 28.6651L45.8599 31.0342L49.0862 33.877ZM48.3948 27.4806L48.1644 26.7699L44.9381 23.2164L41.4813 27.2437L45.1685 30.3235L48.3948 27.4806ZM48.1644 25.1116L47.473 20.3736L45.6294 22.5057L48.1644 25.1116ZM41.4813 37.1936L44.7076 39.3257L47.9339 37.1936H41.4813ZM39.1768 52.3554H50.2384L44.7076 48.8018L39.1768 52.3554ZM40.329 37.4305L39.6377 42.4055L43.7858 39.7995L40.329 37.4305ZM39.6377 43.59L39.4072 44.3007L44.7076 47.6173L50.2384 44.0638V43.8269L44.7076 40.2733L39.6377 43.59ZM39.4072 45.2483L38.7159 51.6446L43.7858 48.328L39.4072 45.2483ZM45.6294 48.328L50.4689 45.0114L51.1603 51.8815L45.6294 48.328ZM49.5471 37.1936L50.008 42.6424L45.6294 39.7995L49.5471 37.1936Z'
              fill='url(#paint3_linear_136_73)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.98761 57.5672H17.0534V69.6492H8.98761V57.5672Z'
              fill='url(#paint4_linear_136_73)'
            />
            <path
              d='M12.4444 87.6538H14.288V79.1253H17.5143V77.467H9.21806V79.1253H12.4444V87.6538ZM18.897 87.6538H25.1192V86.2323H20.7406V83.3895H24.1974V81.7312H20.7406V79.1253H24.8888V77.467H18.897V87.6538ZM25.8106 87.6538H27.8846L29.4978 85.0478C29.7283 84.3371 29.9587 83.8633 29.9587 83.8633C29.9587 83.8633 30.4196 84.3371 30.6501 85.0478L32.2632 87.6538H34.3373L31.111 82.6788L34.1068 77.467H32.0328L30.6501 80.0729C30.4196 80.5467 29.9587 81.2574 29.9587 81.2574C29.9587 81.2574 29.7283 80.5467 29.4978 80.0729L28.1151 77.467H26.041L29.0369 82.6788L25.8106 87.6538ZM35.4895 87.6538H37.3332V83.3895H41.9422V87.6538H43.7858V77.467H41.9422V81.9681H37.3332V77.467H35.4895V87.6538ZM45.6294 82.6788C45.6294 85.5216 47.7035 87.8907 50.6993 87.8907C53.6952 87.8907 55.7693 85.5216 55.7693 82.6788C55.7693 79.5991 53.6952 77.467 50.6993 77.467C47.7035 77.467 45.6294 79.5991 45.6294 82.6788ZM47.473 82.6788C47.473 80.5467 48.8557 79.1253 50.6993 79.1253C52.543 79.1253 53.9257 80.5467 53.9257 82.6788C53.9257 84.574 52.543 86.2323 50.6993 86.2323C48.8557 86.2323 47.473 84.574 47.473 82.6788ZM9.21806 100.446V102.105C11.9835 102.105 13.1357 99.7358 13.1357 94.7608V93.5763H15.6707V102.105H17.5143V91.918H11.2921V94.7608C11.2921 98.5513 10.6008 100.21 9.21806 100.446ZM20.0493 102.105H21.8929L25.5801 96.1822C26.041 95.7084 26.5019 94.5239 26.5019 94.5239C26.5019 94.5239 26.2715 95.7084 26.2715 96.1822V102.105H28.1151V91.918H26.2715L22.5843 97.8405C22.1234 98.3143 21.6624 99.262 21.6624 99.262C21.6624 99.262 21.8929 98.3143 21.8929 97.8405V91.918H20.0493V102.105ZM32.2632 100.446C33.4155 98.7881 33.6459 96.1822 33.6459 94.287V93.5763H36.4114V100.446H32.2632ZM29.4978 100.446V104H31.111V102.105H37.5636V104H39.1768V100.446H38.0245V91.918H32.0328V94.0501C32.0328 96.1822 31.8023 98.5512 30.4196 100.446H29.4978ZM41.0204 102.105H47.2426V100.446H42.864V97.8405H46.0903V96.1822H42.864V93.5763H47.0121V91.918H41.0204V102.105ZM49.0862 102.105H50.9298V98.5512H53.0039C54.8475 98.5512 55.9997 97.1298 55.9997 95.2346C55.9997 93.3394 54.8475 91.918 53.0039 91.918H49.0862V102.105ZM50.9298 96.8929V93.5763H52.543C53.6952 93.5763 54.1561 94.0501 54.1561 95.2346C54.1561 96.1822 53.6952 96.8929 52.543 96.8929H50.9298Z'
              fill='url(#paint5_linear_136_73)'
            />
          </g>
          <g opacity='0.56' filter='url(#filter0_bii_136_73)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M42.1726 2.36902H55.7693V10.4237H42.1726V2.36902Z'
              fill={color || colors.upsilon}
              fillOpacity='0.3'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M41.4813 1.42141V18.9522H40.5595V1.42141C40.0986 1.42141 39.8681 1.18451 39.8681 0.710706C39.8681 0.236902 40.329 0 41.0204 0C41.7117 0 42.1726 0.236902 42.1726 0.710706C42.1726 1.18451 41.9422 1.42141 41.4813 1.42141Z'
              fill={color || colors.upsilon}
              fillOpacity='0.3'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M26.041 17.5308H0V25.5854H8.98761V53.7768H17.0534V25.5854H26.041V17.5308ZM31.111 61.5945H55.3084V69.6492H23.0452V33.6401H31.111V61.5945Z'
              fill={color || colors.upsilon}
              fillOpacity='0.3'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M34.5677 52.3554H37.1027L38.7159 37.1936H38.0245V34.5877H39.1768L40.7899 19.8998H39.8681V17.2938H49.7775V19.8998H49.0862L50.6993 34.5877H51.6212V37.1936H50.9298L52.7734 52.3554H54.8475V56.1458H34.5677V52.3554ZM43.0944 19.8998L44.9381 21.795L46.7817 19.8998H43.0944ZM42.4031 20.3736L41.7117 25.5854L44.4772 22.5057L42.4031 20.3736ZM41.4813 28.1913L40.7899 34.3508L44.4772 31.0342L41.4813 28.1913ZM41.9422 34.5877H48.3948L45.1685 31.7449L41.9422 34.5877ZM49.0862 33.877L48.3948 28.6651L45.8599 31.0342L49.0862 33.877ZM48.3948 27.4806L48.1644 26.7699L44.9381 23.2164L41.4813 27.2437L45.1685 30.3235L48.3948 27.4806ZM48.1644 25.1116L47.473 20.3736L45.6294 22.5057L48.1644 25.1116ZM41.4813 37.1936L44.7076 39.3257L47.9339 37.1936H41.4813ZM39.1768 52.3554H50.2384L44.7076 48.8018L39.1768 52.3554ZM40.329 37.4305L39.6377 42.4055L43.7858 39.7995L40.329 37.4305ZM39.6377 43.59L39.4072 44.3007L44.7076 47.6173L50.2384 44.0638V43.8269L44.7076 40.2733L39.6377 43.59ZM39.4072 45.2483L38.7159 51.6446L43.7858 48.328L39.4072 45.2483ZM45.6294 48.328L50.4689 45.0114L51.1603 51.8815L45.6294 48.328ZM49.5471 37.1936L50.008 42.6424L45.6294 39.7995L49.5471 37.1936Z'
              fill={color || colors.upsilon}
              fillOpacity='0.3'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.98761 57.5672H17.0534V69.6492H8.98761V57.5672Z'
              fill={color || colors.upsilon}
              fillOpacity='0.3'
            />
            <path
              d='M12.4444 87.6538H14.288V79.1253H17.5143V77.467H9.21806V79.1253H12.4444V87.6538ZM18.897 87.6538H25.1192V86.2323H20.7406V83.3895H24.1974V81.7312H20.7406V79.1253H24.8888V77.467H18.897V87.6538ZM25.8106 87.6538H27.8846L29.4978 85.0478C29.7283 84.3371 29.9587 83.8633 29.9587 83.8633C29.9587 83.8633 30.4196 84.3371 30.6501 85.0478L32.2632 87.6538H34.3373L31.111 82.6788L34.1068 77.467H32.0328L30.6501 80.0729C30.4196 80.5467 29.9587 81.2574 29.9587 81.2574C29.9587 81.2574 29.7283 80.5467 29.4978 80.0729L28.1151 77.467H26.041L29.0369 82.6788L25.8106 87.6538ZM35.4895 87.6538H37.3332V83.3895H41.9422V87.6538H43.7858V77.467H41.9422V81.9681H37.3332V77.467H35.4895V87.6538ZM45.6294 82.6788C45.6294 85.5216 47.7035 87.8907 50.6993 87.8907C53.6952 87.8907 55.7693 85.5216 55.7693 82.6788C55.7693 79.5991 53.6952 77.467 50.6993 77.467C47.7035 77.467 45.6294 79.5991 45.6294 82.6788ZM47.473 82.6788C47.473 80.5467 48.8557 79.1253 50.6993 79.1253C52.543 79.1253 53.9257 80.5467 53.9257 82.6788C53.9257 84.574 52.543 86.2323 50.6993 86.2323C48.8557 86.2323 47.473 84.574 47.473 82.6788ZM9.21806 100.446V102.105C11.9835 102.105 13.1357 99.7358 13.1357 94.7608V93.5763H15.6707V102.105H17.5143V91.918H11.2921V94.7608C11.2921 98.5513 10.6008 100.21 9.21806 100.446ZM20.0493 102.105H21.8929L25.5801 96.1822C26.041 95.7084 26.5019 94.5239 26.5019 94.5239C26.5019 94.5239 26.2715 95.7084 26.2715 96.1822V102.105H28.1151V91.918H26.2715L22.5843 97.8405C22.1234 98.3143 21.6624 99.262 21.6624 99.262C21.6624 99.262 21.8929 98.3143 21.8929 97.8405V91.918H20.0493V102.105ZM32.2632 100.446C33.4155 98.7881 33.6459 96.1822 33.6459 94.287V93.5763H36.4114V100.446H32.2632ZM29.4978 100.446V104H31.111V102.105H37.5636V104H39.1768V100.446H38.0245V91.918H32.0328V94.0501C32.0328 96.1822 31.8023 98.5512 30.4196 100.446H29.4978ZM41.0204 102.105H47.2426V100.446H42.864V97.8405H46.0903V96.1822H42.864V93.5763H47.0121V91.918H41.0204V102.105ZM49.0862 102.105H50.9298V98.5512H53.0039C54.8475 98.5512 55.9997 97.1298 55.9997 95.2346C55.9997 93.3394 54.8475 91.918 53.0039 91.918H49.0862V102.105ZM50.9298 96.8929V93.5763H52.543C53.6952 93.5763 54.1561 94.0501 54.1561 95.2346C54.1561 96.1822 53.6952 96.8929 52.543 96.8929H50.9298Z'
              fill={color || colors.upsilon}
              fillOpacity='0.3'
            />
          </g>
        </g>
        <defs>
          <filter
            id='filter0_bii_136_73'
            x='-10.4779'
            y='-10.4779'
            width='76.9555'
            height='124.956'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feGaussianBlur in='BackgroundImage' stdDeviation='5.23893' />
            <feComposite
              in2='SourceAlpha'
              operator='in'
              result='effect1_backgroundBlur_136_73'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_backgroundBlur_136_73'
              result='shape'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dx='-1.04779' dy='1.04779' />
            <feGaussianBlur stdDeviation='0.523893' />
            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.42 0'
            />
            <feBlend
              mode='normal'
              in2='shape'
              result='effect2_innerShadow_136_73'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dx='1.04779' dy='-1.04779' />
            <feGaussianBlur stdDeviation='0.523893' />
            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.7665 0 0 0 0 0.50589 0 0 0 0 0 0 0 0 0.7 0'
            />
            <feBlend
              mode='normal'
              in2='effect2_innerShadow_136_73'
              result='effect3_innerShadow_136_73'
            />
          </filter>
          <linearGradient
            id='paint0_linear_136_73'
            x1='-24.2308'
            y1='-11.0707'
            x2='83.7622'
            y2='119.974'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint1_linear_136_73'
            x1='-24.2308'
            y1='-11.0707'
            x2='83.7622'
            y2='119.974'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint2_linear_136_73'
            x1='-24.2308'
            y1='-11.0707'
            x2='83.7622'
            y2='119.974'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint3_linear_136_73'
            x1='-24.2308'
            y1='-11.0707'
            x2='83.7622'
            y2='119.974'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint4_linear_136_73'
            x1='-24.2308'
            y1='-11.0707'
            x2='83.7622'
            y2='119.974'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint5_linear_136_73'
            x1='-24.2308'
            y1='-11.0707'
            x2='83.7622'
            y2='119.974'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color || colors.delta} />
          </linearGradient>
          <clipPath id='clip0_136_73'>
            <rect width='56' height='104' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </SvgContainer>
  )
}

export default SvgGeneralLogo
