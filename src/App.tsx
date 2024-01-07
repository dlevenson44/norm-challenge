import React from 'react'

import Stack from '@mui/material/Stack'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'

import './App.css'
import { CheckNode } from './components'
import { sample } from './sample'

function App() {
	const rootChildren = sample.tree.children
	return (
		<div className="App">
      Content!
			<Stack spacing={3}>
				{isEmpty(rootChildren) ? (
					<h4>No Data to Render!</h4>
				) : (
					map(rootChildren, ({
						name,
						status,
						reason,
						children
					}) => <CheckNode name={name} status={status} reason={reason}>{children}</CheckNode>)
				)}
			</Stack>
		</div>
	)
}

export default App
