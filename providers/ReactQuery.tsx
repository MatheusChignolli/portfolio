import { NextPage } from 'next'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const ReactQuery: NextPage = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQuery
