import { NextComponentType, NextPage } from 'next'

const Card = ({ children }: any) => <div>{children}</div>

const Title: NextPage = ({ children }) => <h2>{children}</h2>

const Content: NextPage = ({ children }) => <div>{children}</div>

const Link: NextPage<{ href: string }> = ({ children, href }) => (
  <a href={href}>{children}</a>
)

Card.Title = Title
Card.Content = Content
Card.Link = Link

export default Card
