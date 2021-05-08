import React, { useContext, useState, useEffect } from 'react'
import { SelectedItemsContext } from '../../../../contexts/SelectedItemsContext'
import { ProblemsDetailsContext } from '../../../../contexts/ProblemsDetailsContext'
//styles
import './Header.scss'

export default function Header () {
  const { selectedProblem, selectedProblemDetail, selectProblemDetail } = useContext(SelectedItemsContext)
  const { fetchDetails } = useContext(ProblemsDetailsContext)

  const [selectedBtn, setSelectedBtn] = useState(null)
  const buttons = [
    {
      id: "actions",
      position: "left"
    },
    {
      id: "parts",
      position: "right"
    }
  ]

  useEffect(() => {
    setSelectedBtn(selectedProblemDetail)
  },[])

  const handleClick = id => {
    setSelectedBtn(id)
    selectProblemDetail(id)
    fetchDetails(id, selectedProblem.id)
  }

  const displayToggleButtons = () => 
    buttons.map(item => {
      return (
        <div
          className={'btnSwitch ' + 'btnSwitch-' + item.position + ' ' + (item.id === selectedBtn ? 'selected' : '')}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          { item.id }
        </div>
      )
  })

  return (
    <div className="header">
      <span className="label">{ selectedProblem ? selectedProblem.name : '' }</span>

      <div className="switchBtns">
        { displayToggleButtons() }
      </div>

    </div>
  )
}

