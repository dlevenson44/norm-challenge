import { Response } from './types'

export const sample: Response = {
	tree: {
		name: 'Root Node',
		type: 'root_node',
		children: [
			{
				name: 'Check 1',
				type: 'check_node',
				status: 'PASS',
				reason: 'Content is compliant',
				children: [
					{
						name: 'Sub-check A of Check 1',
						type: 'sub_check_node',
						status: 'FAIL',
						system_message: 'Searching for more information...',
						reason: 'Content is not compliant',
						children: []
					},
					{
						name: 'Sub-check B of Check 1',
						type: 'sub_check_node',
						status: 'FAIL',
						system_message: 'Checking for sub-compliance...',
						reason: 'Content is not compliant',
						children: []
					}
				]
			},
			{
				name: 'Check 2',
				type: 'check_node',
				status: 'FAIL',
				reason: 'Content is not compliant',
				children: [
					{
						name: 'Sub-check A of Check 2',
						type: 'sub_check_node',
						status: 'FAIL',
						system_message: 'Checking for sub-compliance...',
						reason: 'Content is not compliant',
						children: []
					}
				]
			},
			{
				name: 'Check 3',
				type: 'check_node',
				status: 'FAIL',
				reason: 'Content is not compliant',
				children: []
			},
			{
				name: 'Check 4',
				type: 'check_node',
				status: 'FAIL',
				reason: 'Content is not compliant',
				children: [
					{
						name: 'Sub-check A of Check 4',
						type: 'sub_check_node',
						status: 'FAIL',
						system_message: 'Checking for sub-compliance...',
						reason: 'Content is not compliant',
						children: []
					}
				]
			}
		]
	}
}