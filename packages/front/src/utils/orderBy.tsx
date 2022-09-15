import { SorterResult } from 'antd/lib/table/interface'

export const getOrderby = (sorter: SorterResult<object>) => {
  let order,
    field = sorter?.field
  switch (sorter?.order) {
    case 'ascend':
      order = 'asc'
      break
    case 'descend':
      order = 'desc'
      break
    default:
      order = 'desc'
      field = 'id'
      break
  }
  return { field: `${field}`, sort: order }
}
