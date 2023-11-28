import fetch from './handler'

export const getStatistics = () => {
  // console.log(params)
  return fetch({
    method: 'GET',
    url: '/statistics',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}
