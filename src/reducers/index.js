import { combineReducers } from 'redux'
import todos from './reducer'
import express from './express'
import { button } from './button'

const todoApp = combineReducers({
  todos,
  express,
  button
})

export default todoApp
