import { HTMLProps } from "react"
import style from './index.module.css'

interface ExternallinkProps extends HTMLProps<HTMLAnchorElement> {
	children: React.ReactNode
}
export const ExternalLink = ({ children, className, ...props }: ExternallinkProps) => {
  return (
	<a target="_blank" className={`${style.link} ${className}`} {...props}>{children}</a>
  )
}
