// import { useNavigate, useLocation } from 'react-router-dom'

const queryParams = () => (next) => (action) => {
  if (action.type === 'TOGGLE_FILTER') {
    // const navigate = useNavigate()
    // const { search } = useLocation()
    // const location = useLocation()

    // const location = window.location

    const search = window.location.search

    const filter = action.data
    console.log(filter)

    const params = new URLSearchParams(search)

    let current = params.getAll(filter.name)

    if (filter.checked) current.push(filter.id)
    else {
      current = current[0].split(',')
      current = current.filter((el) => el !== filter.id.toString())
    }

    params.set(filter.name, current.toString())
    // navigate({ pathname: location.pathname, search: params.toString() })

    console.log(filter.name, new URLSearchParams(search).getAll(filter.name))
    // next(action);
  }
  next(action)
}

export default queryParams
