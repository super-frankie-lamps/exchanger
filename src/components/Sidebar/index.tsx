import AuthForm from "../AuthForm"
import Reviews from "../Reviews"
import { Box } from "../common"

const Sidebar = () => {
  return (
	  <Box className="flex-col w-1/3">
      <AuthForm />
      <Reviews />
    </Box>
  )
}

export default Sidebar