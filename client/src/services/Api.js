import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://hapiiserver-env.eba-tmz6nn3s.us-east-2.elasticbeanstalk.com/`
    // baseURL: `http://54.193.20.125:8081/`
  })
}
