import ExchangeNotes from "../ExchangeNotes"
import ExchangeWidget from "../ExchangeWidget"
import Info from "../Info"
import Sidebar from "../Sidebar"
import { Box, Container } from "../common"

const Main = () => {
  return (
	<Box className="w-full">
		<Container>
			<Box className="flex-col w-2/3">
				<Info />
				<ExchangeWidget />
				<ExchangeNotes />
			</Box>
			<Sidebar />
		</Container>
	</Box>
  )
}

export default Main