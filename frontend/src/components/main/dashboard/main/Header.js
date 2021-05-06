import React, { useContext, useState, useEffect } from 'react'
import { SelectedItemsContext } from '../../../../contexts/SelectedItemsContext'
import { ServicesDetailsContext } from '../../../../contexts/ServicesDetailsContext'

export default function Header () {
  const { selectedService, selectedServiceDetail, selectServiceDetail } = useContext(SelectedItemsContext)
  const { fetchDetails } = useContext(ServicesDetailsContext)

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
    setActiveLink(selectedServiceDetail)
  },[])

  const handleClick = id => {
    setActiveLink(id)
    selectServiceDetail(id)
    fetchDetails(id, selectedService.id)
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
      <span className="label">{ selectedService ? selectedService.name : '' }</span>

      <div className="toggle-action2">
        { displayToggleButtons() }
      </div>

    </div>
  )
}

