import React from 'react'

import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import useSWR from 'swr'


import { CheckNode } from './components'
import { fetcher } from './helpers'
import { FETCH_URL, REFRESH_INTERVAL } from './utils'

function App() {
	const { data, error, isLoading } = useSWR(
		FETCH_URL,
		fetcher,
		{ refreshInterval: REFRESH_INTERVAL }
	)

	const rootChildren = React.useMemo(() => data?.tree?.children, [data?.tree?.children])

	return (
		<div className="App">
			<Stack spacing={3} alignItems="center">
				{!isLoading && !isEmpty(rootChildren) ?
					map(rootChildren, (checkNode, idx) => (
						<Card key={idx} raised sx={{ width: '75%', p: 2 }}>
							<CheckNode {...checkNode} />
						</Card>
					)) : (
						<Typography variant="h4">No Data to Render!</Typography>
					)}
				{!isLoading && error && <Typography variant="h4">Error Fetching Data!</Typography>}
			</Stack>
		</div>
	)
}

export default App
