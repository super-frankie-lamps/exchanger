import { COLORS } from "@/constants"
import { Box } from "../Box"

interface WidgetProps {
	children: React.ReactNode
}

export const Widget = ({ children, ...props }: WidgetProps) => {
  return (
	<Box className={
		`w-full p-7 mb-3.5 border rounded-3xl
		 ${COLORS.primary.border[200]}
		 ${COLORS.primary.bg.gradient}
	`} {...props}>
		{children}
	</Box>
  )
}