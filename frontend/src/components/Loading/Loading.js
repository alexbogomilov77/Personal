import React, { useContext, useState } from 'react'
import ProgressBar from 'react-progress-bar-plus'
import 'react-progress-bar-plus/lib/progress-bar.css'
import { LoadingContext } from '../../contexts/LoadingContext'
//styles
import './Loading.scss'

export default function Sidebar () {
  const { isLoading } = useContext(LoadingContext)

  return isLoading ? (<ProgressBar className="progressBar" spinner="right" percent={100}/>) : (null)
}
