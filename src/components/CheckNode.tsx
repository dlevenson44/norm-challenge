import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import map from 'lodash/map'

import type { CheckNodeResponse } from '../types'

type CheckNodeProps = Omit<CheckNodeResponse, 'type'>

const CheckNode: React.FunctionComponent<CheckNodeProps> = ({
	name,
	status,
	reason,
	children,
}) => {
	return (
		<Card raised>
			<Stack>
				<Stack direction="row">
					<Typography>{name}</Typography>
					{status === 'PASS' ? <CheckCircleIcon color="success" /> : <DoDisturbOnIcon color="error" />}
				</Stack>
				<Typography>{reason}</Typography>
			</Stack>
			<Stack spacing={2}>
				{map(children, (subtask) => <h3>subtask!</h3>)}
			</Stack>
		</Card>
	)
}

export default CheckNode
