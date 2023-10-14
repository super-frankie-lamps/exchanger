interface BoxProps {
	children: React.ReactNode,
	className?: string
}

export const Box = ({ children, className, ...props } : BoxProps) => {
  return (
	<div className={`flex ${className}`} {...props}>{children}</div>
  )
}
