import React from 'react'

import Card from '@mui/material/Card'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import useSWR from 'swr'


import { CheckNode } from './components'
import { fetcher } from './helpers'
import { FETCH_URL, REFRESH_INTERVAL } from './utils'

function App() {
 // NOTE:  while re-reviewing the code, I realized this could've been refactored into a custom hook
 // Custom hook would allow us to make network requests without having to re-import `fetcher` helper everywhere
 const { data, error } = useSWR(
  FETCH_URL,
  fetcher,
  { refreshInterval: REFRESH_INTERVAL }
 )

 const rootChildren = React.useMemo(() => data?.tree?.children, [data?.tree?.children])

 return (
  <Stack height="100vh" spacing={3} alignItems="center" justifyContent="center">
   {isLoading && (
    <Stack alignItems="center">
     <CircularProgress />
    </Stack>
   )}
   {!isLoading && !isEmpty(rootChildren) &&
    map(rootChildren, (checkNode, idx) => (
     <Card key={idx} raised sx={{ width: '75%', p: 2 }}>
      <CheckNode {...checkNode} />
     </Card>
    ))}
   {!isLoading && isEmpty(rootChildren) &&
			<Typography variant="h4">No Data to Render!</Typography>
   }
   {!isLoading && error && <Typography variant="h4">Error Fetching Data!</Typography>}
  </Stack>
 )
}

export default App
