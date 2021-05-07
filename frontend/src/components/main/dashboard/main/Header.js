import React, { useContext, useState, useEffect } from 'react'
import { SelectedItemsContext } from '../../../../contexts/SelectedItemsContext'
import { ProblemsDetailsContext } from '../../../../contexts/ProblemsDetailsContext'

export default function Header () {
  const { selectedProblem, selectedProblemDetail, selectProblemDetail } = useContext(SelectedItemsContext)
  const { fetchDetails } = useContext(ProblemsDetailsContext)

  const [activeLink, setActiveLink] = useState(null)
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
    setActiveLink(selectedProblemDetail)
  },[])

  const handleClick = id => {
    setActiveLink(id)
    selectProblemDetail(id)
    fetchDetails(id, selectedProblem.id)
  }

  const displayToggleButtons = () => 
    buttons.map(item => {
      return (
        <div
          className={'btn-switch ' + 'btn-switch-' + item.position + (item.id === activeLink ? 'btn-item' : '')}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          { item.id }
        </div>
      )
  })

  return (
    <div className="dashboard-main-header">
      <span className="label">{ selectedProblem ? selectedProblem.name : '' }</span>

      <div className="toggle-action2">
        { displayToggleButtons() }
      </div>

    </div>
  )
}

