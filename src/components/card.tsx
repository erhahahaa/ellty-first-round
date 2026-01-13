import type React from "react"

interface CardItemProps {
  children: React.ReactNode
}
export const CardItem = ({ children }: CardItemProps) => {
  return (
    <div className="py-2 pl-5.5 pr-3.75">
      {children}
    </div>
  )
}


interface CardProps {
  children: React.ReactNode
  className?: string
}
export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`rounded-md drop-shadow-sm py-2.5 shadow-card ${className}`}>
      {children}
    </div>
  )
}

