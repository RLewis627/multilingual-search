import Api from '@/services/Api'

export default {
  queries () {
    return Api().get('queries')
  },
  results (qID) {
    return Api().post('results', qID)
  }
}
