import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import map from 'lodash/map'

import type { CheckNodeResponse } from '../types'

const CheckNode: React.FunctionComponent<CheckNodeResponse> = ({
	name,
	type,
	status,
	reason,
	children,
	system_message
}) => {
	const isSubCheck = type === 'sub_check_node'
	return (
		<Stack spacing={1}>
			<Stack>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Typography
						variant={isSubCheck ? 'body2' : 'h6'}
						fontWeight="bolder"
					>
						{name}
					</Typography>
					{status === 'PASS' ?
						<CheckCircleIcon color="success" /> :
						<DoDisturbOnIcon color="error" />
					}
				</Stack>
			</Stack>
			<Stack>
				{system_message && <Typography variant="body2">{system_message}</Typography>}
				<Typography variant="body2">{reason}</Typography>
			</Stack>
			<Stack spacing={2}>
				{map(children, (subCheckNode) => <CheckNode {...subCheckNode} />)}
			</Stack>
		</Stack>
	)
}

export default CheckNode
