interface ButtonProps {
	children: React.ReactNode,
	className?: string
}

export const Button = ({className, children, ...props}: ButtonProps) => {
  return (
	<button className={`px-4 py-2 ${className}`} {...props}>{children}</button>
  )
}