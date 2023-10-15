import { Box } from "../Box"

interface ContainerProps {
	children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
	<Box className="container px-4">{children}</Box>
  )
}
