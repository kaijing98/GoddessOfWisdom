import Axios from 'axios'
const userToken =
  'v^1.1#i^1#I^3#r^0#p^1#f^0#t^H4sIAAAAAAAAAOVXa2wUVRTutttaUgqKqDwMWac2EnVm7+zs7GNsNy4tDRuBrt2CWjRlduZOd+jszDr3Lu0GlboxhdjwCCSKf8xitAYKGIz4w9cfY4hKlBgURRNjRKU+EBQFDah3ZpeyrQQoLELi/pmdc88993zf+c69c0Ff1YTb++f1H691XFOe6wN95Q4HWwMmVFXeMamifEZlGShycOT6bu1zZisONSAxqaWENohSho6gqzep6UiwjY1U2tQFQ0QqEnQxCZGAJSEWXjBf8DBASJkGNiRDo1yR5kaKhyz0+gNKkJNlvxz3Eqt+Oma70Uh5JD/nA6LX7wuyol/ykHGE0jCiIyzqmIwDNkgDLw387SwrsEDw8AznD3RQrsXQRKqhExcGUCE7XcGeaxbleu5URYSgiUkQKhQJt8Raw5HmuQvbG9xFsUIFHmJYxGk0+q3JkKFrsail4bmXQba3EEtLEkSIcofyK4wOKoRPJ3MR6dtUS94AL7Gy3x9XuCAMiCWhssUwkyI+dx6WRZVpxXYVoI5VnDkfo4SN+DIo4cLbQhIi0uyyHvemRU1VVGg2UnPnhB8IR6NUKCFK3RhKCXrkT7StmVZYnwx5X9xHB3hR5IKSUlgoH61A85iVmgxdVi3SkGuhgedAkjUcyw0o4oY4teqtZljBVkbFftwIh3yHVdR8FdM4oVt1hUlChMt+PX8FRmZjbKrxNIYjEcYO2BQ1UmIqpcrU2EFbiwX59KJGKoFxSnC7e3p6mB6OMcwutwcA1n3/gvkxKQGTRCG9SavX8/7q+SfQqg1FgmQmUgWcSZFceolWSQJ6FxXiAjwb9BR4H51WaKz1X4YizO7RHVGqDvFyPAxwHqKaIBsA3pJ0SKggUreVB4yLGTopmt0QpzRRgrREdJZOQlOVBY5XPFxAgbTsCyq0N6godJyXfTSrQAggjMelYOD/1CgXKvWYZKRg1NBUKVMSwZdO7KYcFU2ciUFNI4YLVf1ZQSIL5GWHZ/X6uCBaMRAJIqZUxtI2IxlJtyGSTc0yddpZXxLucCoVSSbTWIxrMFKaDe0KbWZnhaeS4/6qwkTqly+kKufPacauJoOWS4wJkZE2yScK02odW+1GN9TJJoBNQ9OguZi95EJfZfUd5155cbhLd1CPEzfpdc9l1bakqURCnVcG3RWuqiriqws1y/NeH8d7Pfwl4Wqya9qe+Q/OonHBm2cgDOXL8F3pHn3LDZXZPzbr2AWyjp3kogzcoJ6tA7dUVSxyVkycgVQMGVVUGKR26eTyZkKmG2ZSomqWVznUDR+t+rjoXp17CEwbuVlPqGBriq7Z4OYzI5Xs5Jtq2SDwAj/LssDDd4C6M6NO9kbn1F8Ofzk889mBY1uuW94PV/d/njvQdATUjjg5HJVlzqyjrG1Yvr6zt7uzfpvzae3R5lxur+/Qc0MPvzP9hSVvb7yv2l1zw44TD6qh4xy9qWVt7f7fP5k2+Pfs7cGnvnm/5ujJwwNggH9id8cfu35zLvp2s3SyftOmZ6K7Xl+xf8rAzuyd0754reX5U3u1H/c4p695peXPqVWuSEP7X0zb3Upic/XSDzd0/XCqI0EdfGPF2pdWPbJmcPubG+ur3xracnTw3Xkf7P45lKv6LOqvL3/8rj17u44sG9aDX326ftvLM6dM3Lk1FjhWN5htfbF+8sEDW7+etLES3PPqkh3X6k3rVi86DpfuW9swa0vdyuX7fprc8v1mfaj619uyK4fWDc+cPesx5GrOvNekfvek50RfV3e+fP8AfHz43vEQAAA='

// This obtains the user consent

export const axiosConfig = () => {
  return Axios.create({
    baseURL: 'https://api.ebay.com/buy/browse/v1',
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Access-Control-Allow-Origin': '*'
    }
  })
}

export const getItems = async query => {
  const api = await axiosConfig()

  const splitQuery = query.split(' ')
  let joinedQuery = splitQuery.slice(0, 5).join(' ')
  console.log(query)
  return api
    .get('item_summary/search', {
      params: {
        q: `Sustainable ${query}`
      }
    })
    .then(r => r.data)
}
