import axios, { AxiosError } from 'axios'

const { GOREST_API_VERSION, GO_REST_TOKEN } = process.env

export default class GoRestApi {
  static api = axios.create({
    baseURL: `https://gorest.co.in/public/${GOREST_API_VERSION}/`,
    headers: { Authorization: `Bearer ${GO_REST_TOKEN}` },
  })

  static async get(suffix: string) {
    return this.api
      .get(suffix)
      .then(({ data }) => data)
      .catch(this.jsonErr)
  }

  static async post(suffix: string, body: any) {
    return this.api
      .post(suffix, body)
      .then(({ data }) => data)
      .catch(this.jsonErr)
  }

  static async update(suffix: string, body: any) {
    return this.api
      .put(suffix, body)
      .then(({ data }) => data)
      .catch(this.jsonErr)
  }

  static async remove(suffix: string) {
    return this.api
      .delete(suffix)
      .then(({ data }) => data)
      .catch(this.jsonErr)
  }

  static jsonErr(error: AxiosError) {
    throw { ...error.toJSON(), config: undefined }
  }
}
