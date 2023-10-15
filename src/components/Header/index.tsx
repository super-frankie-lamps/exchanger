import { MdEmail } from 'react-icons/md'
import { Box, Container, ExternalLink } from "../common"

const Header = () => {
  return (
	  <Box className="w-full">
      <Box className='w-full bg-violet-300 py-3'>
        <Container>
          <Box className='w-full justify-between'>
            <Box>Мы работаем круглосуточно.</Box>
            <ExternalLink href="mailto:support@exchanger.com" className='flex items-center'>
              <MdEmail />
              support@exchanger.com
            </ExternalLink>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Header