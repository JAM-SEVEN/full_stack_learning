/*
 * @Author: JAM-SEVEN
 * @Date: 2021-06-15 16:07:33
 * @LastEditTime: 2021-07-06 09:30:56
 * @Description: TO DO
 */

import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response=>response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response=>response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${ baseUrl }/:${ id }`, newObject)
  return request.then(response=>response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
  getAll, 
  create, 
  update 
}