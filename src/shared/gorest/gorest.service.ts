import axios, { AxiosError, AxiosInstance } from 'axios'

const { GOREST_API_VERSION, GO_REST_TOKEN } = process.env

export default class GoRestApi {
  private api: AxiosInstance
  constructor(forModule: string) {
    this.api = axios.create({
      baseURL: `https://gorest.co.in/public/${GOREST_API_VERSION}/${forModule}`,
      headers: { Authorization: `Bearer ${GO_REST_TOKEN}` },
    })
  }

  async get(id = '') {
    return this.api
      .get(id)
      .then(({ data }) => data)
      .catch(this.jsonErr)
  }

  async post(body: any, suffix = '') {
    return this.api
      .post(suffix, body)
      .then(({ data }) => data)
      .catch(this.jsonErr)
  }

  async update(id: string, body: any) {
    return this.api
      .put(id, body)
      .then(({ data }) => data)
      .catch(this.jsonErr)
  }

  async remove(id: string) {
    return this.api
      .delete(id)
      .then(({ data }) => data)
      .catch(this.jsonErr)
  }

  jsonErr(error: AxiosError) {
    if (error.toJSON)
      throw {
        ...error.toJSON(),
        error: error.response?.data || {},
        config: undefined,
      }
    throw new Error(error.message)
  }
}
