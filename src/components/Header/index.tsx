import { MdEmail } from 'react-icons/md'
import { Box, Button, Container, ExternalLink } from "../common"
import { COLORS } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

const MAIN_MENU = [
  {
    title: 'Главная',
    href: '/'
  },
  {
    title: 'Отзывы',
    href: '/'
  },
  {
    title: 'Контакты',
    href: '/'
  },
  {
    title: 'Онлайн-чат',
    href: '/'
  }
];

const Header = () => {
  return (
	  <Box className="w-full flex-col">
      <Box className={`w-full py-3 ${COLORS.primary.bg[200]}`}>
        <Container>
          <Box className='w-full justify-between'>
            <Box>Мы работаем круглосуточно.</Box>
            <ExternalLink href="mailto:support@exchanger.com" className='flex items-center'>
              <MdEmail className="mr-1" />
              support@exchanger.com
            </ExternalLink>
          </Box>
        </Container>
      </Box>
      <Box className={`w-full py-3 ${COLORS.primary.bg[100]}`}>
        <Container>
          <Box className='w-full justify-between'>
            <Link href="/">
              <Image alt='logo' src="/logo.svg" width={207} height={52} />
            </Link>
            <Box className='items-center mx-2'>
              {
                MAIN_MENU.map(({ title, href }) => {
                  return <Link className={`px-4 py-2 ${COLORS.primary.text.hover[900]}`} href={href} key={title}>{title}</Link>
                })
              }
            </Box>
            <Box className='items-center'>
              <Button className={COLORS.primary.text.hover[900]}>Войти</Button>
              <Button
                className={`
                  rounded-3xl border 
                  ${COLORS.primary.border[950]} 
                  ${COLORS.primary.border.hover[900]}
                  ${COLORS.primary.text.hover[900]}
                `}
              >
                Регистрация
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Header