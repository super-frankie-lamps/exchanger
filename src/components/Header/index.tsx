import { MdEmail } from 'react-icons/md'
import { Box, Container, ExternalLink } from "../common"
import { getColorClass } from '@/utils'

const Header = () => {
  return (
	  <Box className="w-full flex-col">
      <Box className={`w-full ${getColorClass('bg','primary', '300')} py-3`}>
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
      <Box className={`w-full ${getColorClass('bg','primary', '200')} py-3`}>
        <Container>
          <Box className='w-full justify-between'>
            LOGO
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Header