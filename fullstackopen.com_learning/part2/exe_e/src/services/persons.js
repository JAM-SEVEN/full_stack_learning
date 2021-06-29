/*
 * @Author: JAM-SEVEN
 * @Date: 2021-06-15 16:07:33
 * @LastEditTime: 2021-06-18 08:57:16
 * @Description: TO DO
 */

import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const create = async newObject => {
  const request = axios.post(baseUrl, newObject)
  const response = await request
  return response.data
}

const update = async (id, newObject) => {
  const request = axios.put(`${ baseUrl }/${ id }`, newObject)
  const response = await request
  return response.data
}

const deleted = async id => {
  const request = axios.delete(`${ baseUrl }/${ id}`)
  const response = await request
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
  getAll, 
  create, 
  update,
  deleted
}