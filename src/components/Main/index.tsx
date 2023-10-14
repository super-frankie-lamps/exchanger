import ExchangeNotes from "../ExchangeNotes"
import ExchangeWidget from "../ExchangeWidget"
import Info from "../Info"
import Sidebar from "../Sidebar"
import { Box } from "../common"

const Main = () => {
  return (
	<Box className="w-full">
		<Box className="flex-col w-2/3">
			<Info />
			<ExchangeWidget />
			<ExchangeNotes />
		</Box>
		<Sidebar />
	</Box>
  )
}

export default Main