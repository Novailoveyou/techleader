import stls from '@/styles/components/svgs/general/SvgGeneralLogo.module.sass'
import { TGeneralColorHex, TPropClassNames, TPropColor } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { useCompanyInfo } from '@/hooks/index'
import { SvgContainer } from '@/components/layout'

type TSvgGeneralLogoProps = TPropClassNames & {
  color1?: TGeneralColorHex
  color2?: TGeneralColorHex
  color3?: TGeneralColorHex
}

const SvgGeneralLogo: FC<TSvgGeneralLogoProps> = ({
  classNames,
  color1,
  color2,
  color3
}) => {
  const company = useCompanyInfo()
  return (
    <SvgContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 149 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{company.name.default}</title>
        <g opacity='0.8'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M135.473 2.34785H149V10.3305H135.473V2.34785Z'
            fill='url(#paint0_linear_16_49)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M134.785 1.40871V18.7828H133.868V1.40871C133.41 1.40871 133.181 1.17393 133.181 0.704355C133.181 0.234785 133.639 0 134.327 0C135.015 0 135.473 0.234785 135.473 0.704355C135.473 1.17393 135.244 1.40871 134.785 1.40871Z'
            fill='url(#paint1_linear_16_49)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M25.9073 17.3741H0V25.3568H8.94145V53.2962H16.9658V25.3568H25.9073V17.3741ZM30.9512 64.0173H55.0243V72H22.9268V32.3484H30.9512V64.0173Z'
            fill='url(#paint2_linear_16_49)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M127.907 51.8875H130.429L132.034 36.8613H131.346V34.2786H132.493L134.098 19.7219H133.181V17.1393H143.039V19.7219H142.351L143.956 34.2786H144.873V36.8613H144.185L146.02 51.8875H148.083V55.6441H127.907V51.8875ZM136.39 19.7219L138.224 21.6002L140.059 19.7219H136.39ZM135.702 20.1915L135.015 25.3568L137.766 22.3046L135.702 20.1915ZM134.785 27.9394L134.098 34.0438L137.766 30.7568L134.785 27.9394ZM135.244 34.2786H141.663L138.454 31.4612L135.244 34.2786ZM142.351 33.5743L141.663 28.409L139.141 30.7568L142.351 33.5743ZM141.663 27.2351L141.434 26.5307L138.224 23.0089L134.785 27.0003L138.454 30.0525L141.663 27.2351ZM141.434 24.8872L140.746 20.1915L138.912 22.3046L141.434 24.8872ZM134.785 36.8613L137.995 38.9743L141.205 36.8613H134.785ZM132.493 51.8875H143.498L137.995 48.3657L132.493 51.8875ZM133.639 37.096L132.951 42.0265L137.078 39.4439L133.639 37.096ZM132.951 43.2005L132.722 43.9048L137.995 47.1918L143.498 43.67V43.4352L137.995 39.9135L132.951 43.2005ZM132.722 44.8439L132.034 51.1831L137.078 47.8962L132.722 44.8439ZM138.912 47.8962L143.727 44.6092L144.415 51.4179L138.912 47.8962ZM142.81 36.8613L143.268 42.2613L138.912 39.4439L142.81 36.8613Z'
            fill='url(#paint3_linear_16_49)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8.94145 57.0528H16.9658V72H8.94145V57.0528Z'
            fill='url(#paint4_linear_16_49)'
          />
        </g>
        <g filter='url(#filter0_bii_16_49)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M135.473 2.34785H149V10.3305H135.473V2.34785Z'
            fill={color1 || colors.iota}
            fillOpacity='0.3'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M134.785 1.40871V18.7828H133.868V1.40871C133.41 1.40871 133.181 1.17393 133.181 0.704358C133.181 0.234788 133.639 0 134.327 0C135.015 0 135.473 0.234788 135.473 0.704358C135.473 1.17393 135.244 1.40871 134.785 1.40871Z'
            fill={color1 || colors.iota}
            fillOpacity='0.3'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M25.9073 17.3741H0V25.3568H8.94145V53.2962H16.9658V25.3568H25.9073V17.3741ZM30.9512 64.0173H55.0243V72H22.9268V32.3484H30.9512V64.0173Z'
            fill={color1 || colors.iota}
            fillOpacity='0.3'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M127.907 51.8875H130.429L132.034 36.8613H131.346V34.2786H132.493L134.098 19.7219H133.181V17.1393H143.039V19.7219H142.351L143.956 34.2786H144.873V36.8613H144.185L146.02 51.8875H148.083V55.6441H127.907V51.8875ZM136.39 19.7219L138.224 21.6002L140.059 19.7219H136.39ZM135.702 20.1915L135.015 25.3568L137.766 22.3046L135.702 20.1915ZM134.785 27.9394L134.098 34.0438L137.766 30.7568L134.785 27.9394ZM135.244 34.2786H141.663L138.454 31.4612L135.244 34.2786ZM142.351 33.5743L141.663 28.409L139.141 30.7568L142.351 33.5743ZM141.663 27.2351L141.434 26.5307L138.224 23.0089L134.785 27.0003L138.454 30.0525L141.663 27.2351ZM141.434 24.8872L140.746 20.1915L138.912 22.3046L141.434 24.8872ZM134.785 36.8613L137.995 38.9743L141.205 36.8613H134.785ZM132.493 51.8875H143.498L137.995 48.3657L132.493 51.8875ZM133.639 37.096L132.951 42.0265L137.078 39.4439L133.639 37.096ZM132.951 43.2004L132.722 43.9048L137.995 47.1918L143.498 43.67V43.4352L137.995 39.9135L132.951 43.2004ZM132.722 44.8439L132.034 51.1831L137.078 47.8962L132.722 44.8439ZM138.912 47.8962L143.727 44.6092L144.415 51.4179L138.912 47.8962ZM142.81 36.8613L143.268 42.2613L138.912 39.4439L142.81 36.8613Z'
            fill={color1 || colors.iota}
            fillOpacity='0.3'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8.94145 57.0528H16.9658V72H8.94145V57.0528Z'
            fill={color1 || colors.iota}
            fillOpacity='0.3'
          />
        </g>
        <path
          d='M33.874 17.629V33H44.856V29.941H37.199V26.521L43.583 26.54V23.481L37.199 23.443V20.707H44.856V17.629H33.874Z'
          fill='url(#paint5_linear_16_49)'
        />
        <path
          d='M60.7761 26.806C60.5291 29.048 58.9331 30.112 57.0141 30.112C54.7341 30.112 53.0051 28.611 53.0051 25.305C53.0051 22.018 54.7531 20.498 57.0141 20.498C58.7811 20.498 60.2251 21.429 60.6241 23.348H64.1771C63.4551 19.529 60.6431 17.306 57.0141 17.306C53.0051 17.306 49.6991 20.175 49.6991 25.305C49.6991 30.549 53.0051 33.285 57.0141 33.285C60.6241 33.285 63.6641 31.1 64.2531 26.806H60.7761Z'
          fill='url(#paint6_linear_16_49)'
        />
        <path
          d='M72.3827 17.629H68.9817V33H72.3827V26.521H78.8617V33H82.2817V17.629H78.8617V23.443H72.3827V17.629Z'
          fill='url(#paint7_linear_16_49)'
        />
        <path
          d='M98.3361 17.629V28.003L90.7931 17.629H87.6581V33H90.7931L90.8881 22.55L98.3361 33H101.49V17.629H98.3361Z'
          fill='url(#paint8_linear_16_49)'
        />
        <path
          d='M113.656 17.306C109.647 17.306 106.341 20.175 106.341 25.305C106.341 30.549 109.647 33.285 113.656 33.285C117.665 33.285 120.99 30.568 120.99 25.305C120.99 20.27 117.855 17.306 113.656 17.306ZM113.656 30.112C111.376 30.112 109.647 28.611 109.647 25.305C109.647 22.018 111.395 20.498 113.656 20.498C115.936 20.498 117.665 22.018 117.665 25.305C117.665 28.611 115.955 30.112 113.656 30.112Z'
          fill='url(#paint9_linear_16_49)'
        />
        <path
          d='M38.874 41.629V57H49.856V53.941H42.199V50.521L48.583 50.54V47.481L42.199 47.443V44.707H49.856V41.629H38.874Z'
          fill='url(#paint10_linear_16_49)'
        />
        <path
          d='M64.8831 57H68.1321L62.8121 41.629H59.2401L53.5971 57H56.8271L58.0241 53.827H63.6861L64.8831 57ZM59.0881 50.996L60.8551 46.322L62.6221 50.996H59.0881Z'
          fill='url(#paint11_linear_16_49)'
        />
        <path
          d='M77.7565 41.629H71.8665V57H77.7565C81.7845 57 85.0715 53.561 85.0715 49.305C85.0715 45.068 81.7845 41.629 77.7565 41.629ZM75.2675 44.669H77.8705C79.9415 44.669 81.7085 46.797 81.7845 49.172C81.7845 49.229 81.7845 49.267 81.7845 49.305C81.7845 49.438 81.7845 49.552 81.7655 49.666C81.7655 49.704 81.7655 49.723 81.7655 49.761C81.7655 49.761 81.7655 49.761 81.7655 49.78C81.5565 52.003 79.8465 53.96 77.8705 53.96H75.2675V44.669Z'
          fill='url(#paint12_linear_16_49)'
        />
        <path
          d='M89.8378 41.629V57H100.82V53.941H93.1628V50.521L99.5468 50.54V47.481L93.1628 47.443V44.707H100.82V41.629H89.8378Z'
          fill='url(#paint13_linear_16_49)'
        />
        <path
          d='M115.733 51.129C117.538 50.445 118.697 48.545 118.697 46.588C118.697 44.042 116.645 41.629 113.301 41.629H106.195V57H109.596V51.471C109.596 51.471 109.976 51.471 112.408 51.471L115.448 57H119.362L115.733 51.129ZM109.596 48.488V44.612H113.567C114.745 44.612 115.714 45.391 115.714 46.588C115.714 47.766 114.745 48.488 113.567 48.488H109.596Z'
          fill='url(#paint14_linear_16_49)'
        />
        <g filter='url(#filter1_bii_16_49)'>
          <path
            d='M33.874 17.629V33H44.856V29.941H37.199V26.521L43.583 26.54V23.481L37.199 23.443V20.707H44.856V17.629H33.874Z'
            fill={color2 || colors.epsilon}
            fillOpacity='0.3'
          />
          <path
            d='M60.7761 26.806C60.5291 29.048 58.9331 30.112 57.0141 30.112C54.7341 30.112 53.0051 28.611 53.0051 25.305C53.0051 22.018 54.7531 20.498 57.0141 20.498C58.7811 20.498 60.2251 21.429 60.6241 23.348H64.1771C63.4551 19.529 60.6431 17.306 57.0141 17.306C53.0051 17.306 49.6991 20.175 49.6991 25.305C49.6991 30.549 53.0051 33.285 57.0141 33.285C60.6241 33.285 63.6641 31.1 64.2531 26.806H60.7761Z'
            fill={color2 || colors.epsilon}
            fillOpacity='0.3'
          />
          <path
            d='M72.3827 17.629H68.9817V33H72.3827V26.521H78.8617V33H82.2817V17.629H78.8617V23.443H72.3827V17.629Z'
            fill={color2 || colors.epsilon}
            fillOpacity='0.3'
          />
          <path
            d='M98.3361 17.629V28.003L90.7931 17.629H87.6581V33H90.7931L90.8881 22.55L98.3361 33H101.49V17.629H98.3361Z'
            fill={color2 || colors.epsilon}
            fillOpacity='0.3'
          />
          <path
            d='M113.656 17.306C109.647 17.306 106.341 20.175 106.341 25.305C106.341 30.549 109.647 33.285 113.656 33.285C117.665 33.285 120.99 30.568 120.99 25.305C120.99 20.27 117.855 17.306 113.656 17.306ZM113.656 30.112C111.376 30.112 109.647 28.611 109.647 25.305C109.647 22.018 111.395 20.498 113.656 20.498C115.936 20.498 117.665 22.018 117.665 25.305C117.665 28.611 115.955 30.112 113.656 30.112Z'
            fill={color2 || colors.epsilon}
            fillOpacity='0.3'
          />
          <path
            d='M38.874 41.629V57H49.856V53.941H42.199V50.521L48.583 50.54V47.481L42.199 47.443V44.707H49.856V41.629H38.874Z'
            fill={color2 || colors.epsilon}
            fillOpacity='0.3'
          />
          <path
            d='M64.8831 57H68.1321L62.8121 41.629H59.2401L53.5971 57H56.8271L58.0241 53.827H63.6861L64.8831 57ZM59.0881 50.996L60.8551 46.322L62.6221 50.996H59.0881Z'
            fill={color2 || colors.epsilon}
            fillOpacity='0.3'
          />
          <path
            d='M77.7565 41.629H71.8665V57H77.7565C81.7845 57 85.0715 53.561 85.0715 49.305C85.0715 45.068 81.7845 41.629 77.7565 41.629ZM75.2675 44.669H77.8705C79.9415 44.669 81.7085 46.797 81.7845 49.172C81.7845 49.229 81.7845 49.267 81.7845 49.305C81.7845 49.438 81.7845 49.552 81.7655 49.666C81.7655 49.704 81.7655 49.723 81.7655 49.761C81.7655 49.761 81.7655 49.761 81.7655 49.78C81.5565 52.003 79.8465 53.96 77.8705 53.96H75.2675V44.669Z'
            fill={color2 || colors.epsilon}
            fillOpacity='0.3'
          />
          <path
            d='M89.8378 41.629V57H100.82V53.941H93.1628V50.521L99.5468 50.54V47.481L93.1628 47.443V44.707H100.82V41.629H89.8378Z'
            fill={color2 || colors.epsilon}
            fillOpacity='0.3'
          />
          <path
            d='M115.733 51.129C117.538 50.445 118.697 48.545 118.697 46.588C118.697 44.042 116.645 41.629 113.301 41.629H106.195V57H109.596V51.471C109.596 51.471 109.976 51.471 112.408 51.471L115.448 57H119.362L115.733 51.129ZM109.596 48.488V44.612H113.567C114.745 44.612 115.714 45.391 115.714 46.588C115.714 47.766 114.745 48.488 113.567 48.488H109.596Z'
            fill={color2 || colors.epsilon}
            fillOpacity='0.3'
          />
        </g>
        <defs>
          <filter
            id='filter0_bii_16_49'
            x='-10.4779'
            y='-10.4779'
            width='169.956'
            height='92.9557'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feGaussianBlur in='BackgroundImage' stdDeviation='5.23893' />
            <feComposite
              in2='SourceAlpha'
              operator='in'
              result='effect1_backgroundBlur_16_49'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_backgroundBlur_16_49'
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
              result='effect2_innerShadow_16_49'
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
              in2='effect2_innerShadow_16_49'
              result='effect3_innerShadow_16_49'
            />
          </filter>
          <filter
            id='filter1_bii_16_49'
            x='23.3962'
            y='6.82816'
            width='108.071'
            height='60.6497'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feGaussianBlur in='BackgroundImage' stdDeviation='5.23893' />
            <feComposite
              in2='SourceAlpha'
              operator='in'
              result='effect1_backgroundBlur_16_49'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_backgroundBlur_16_49'
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
              result='effect2_innerShadow_16_49'
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
              in2='effect2_innerShadow_16_49'
              result='effect3_innerShadow_16_49'
            />
          </filter>
          <linearGradient
            id='paint0_linear_16_49'
            x1='-24.1063'
            y1='-10.9717'
            x2='82.8426'
            y2='119.304'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint1_linear_16_49'
            x1='-24.1063'
            y1='-10.9717'
            x2='82.8426'
            y2='119.304'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint2_linear_16_49'
            x1='-24.1063'
            y1='-10.9717'
            x2='82.8426'
            y2='119.304'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint3_linear_16_49'
            x1='-24.1063'
            y1='-10.9717'
            x2='82.8426'
            y2='119.304'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint4_linear_16_49'
            x1='-24.1063'
            y1='-10.9717'
            x2='82.8426'
            y2='119.304'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint5_linear_16_49'
            x1='20.7442'
            y1='11.2572'
            x2='79.8409'
            y2='82.3764'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint6_linear_16_49'
            x1='20.7442'
            y1='11.2572'
            x2='79.8409'
            y2='82.3764'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint7_linear_16_49'
            x1='20.7442'
            y1='11.2572'
            x2='79.8409'
            y2='82.3764'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint8_linear_16_49'
            x1='20.7442'
            y1='11.2572'
            x2='79.8409'
            y2='82.3764'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint9_linear_16_49'
            x1='20.7442'
            y1='11.2572'
            x2='79.8409'
            y2='82.3764'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint10_linear_16_49'
            x1='20.7442'
            y1='11.2572'
            x2='79.8409'
            y2='82.3764'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint11_linear_16_49'
            x1='20.7442'
            y1='11.2572'
            x2='79.8409'
            y2='82.3764'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint12_linear_16_49'
            x1='20.7442'
            y1='11.2572'
            x2='79.8409'
            y2='82.3764'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint13_linear_16_49'
            x1='20.7442'
            y1='11.2572'
            x2='79.8409'
            y2='82.3764'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
          <linearGradient
            id='paint14_linear_16_49'
            x1='20.7442'
            y1='11.2572'
            x2='79.8409'
            y2='82.3764'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color3 || colors.delta} stopOpacity='0' />
            <stop offset='1' stopColor={color3 || colors.delta} />
          </linearGradient>
        </defs>
      </svg>
    </SvgContainer>
  )
}

export default SvgGeneralLogo
