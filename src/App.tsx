import React from 'react'

import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'

import { CheckNode } from './components'
import { sample } from './sample'

function App() {
	const rootChildren = sample.tree.children
	return (
		<div className="App">
			<Stack spacing={3} alignItems="center">
				{isEmpty(rootChildren) ? (
					<h4>No Data to Render!</h4>
				) : (
					map(rootChildren, (checkNode) => (
						<Card raised sx={{ width: '75%', p: 2 }}>
							<CheckNode {...checkNode} />
						</Card>
					))
				)}
			</Stack>
		</div>
	)
}

export default App
