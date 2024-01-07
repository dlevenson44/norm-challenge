type NodeType = 'check_node' | 'sub_check_node'
type Status = 'PASS' | 'FAIL'

export interface Response {
  tree: RootCheck
}

export interface RootCheck extends Pick<CheckNodeResponse, 'name'> {
  children: CheckNodeResponse[] | []
  type: 'root_node'
}

export interface CheckNodeResponse {
  name: string
  type: NodeType
  status: Status
  reason: string
  children: CheckNodeResponse[] | []
  system_message?: string
}
