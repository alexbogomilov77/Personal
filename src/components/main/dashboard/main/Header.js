import React, { useContext, useState } from 'react'
import { ActionsContext } from '../../../../contexts/ActionsContext'
import { PartsContext } from '../../../../contexts/PartsContext'

export default function Service () { 
    const { fetchActions } = useContext(ActionsContext)
    const { fetchParts } = useContext(PartsContext)

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

  const handleClick = id => {
    setActiveLink(id)
    id === "parts" ? fetchParts() : fetchActions(1)
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
      <span className="label">Turbo Charging</span>

      <div className="toggle-action2">
        { displayToggleButtons() }
      </div>

    </div>
  )
}

