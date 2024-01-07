import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import isEmpty from 'lodash/isEmpty'
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
	const [showDetails, setShowDetails] = React.useState(true)
	const isSubCheck = React.useMemo(() => type === 'sub_check_node', [type])

	return (
		<Stack spacing={1}>
			{/* Node Header and Status */}
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
			{/* Node messages */}
			<Stack>
				{system_message && <Typography variant="body2">{system_message}</Typography>}
				<Typography variant="body2">{reason}</Typography>
			</Stack>
			{/* SubNodes */}
			<Stack spacing={2}>
				{showDetails && map(children, (subCheckNode, idx) => <CheckNode key={idx} {...subCheckNode} />)}
			</Stack>
			{/* Show/Hide Details Button */}
			{!isSubCheck && !isEmpty(children) && 
        <Button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </Button>
			}
		</Stack>
	)
}

export default CheckNode
