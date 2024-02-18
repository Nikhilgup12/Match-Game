import './index.css'

const TabItem = props => {
  const {tabItem, tabItemClick, isActive} = props
  const {displayText, tabId} = tabItem
  const tabClick = () => {
    tabItemClick(tabId)
  }
  const activeTab = isActive ? 'active-btn' : ''
  return (
    <li className="tab-list">
      <button
        className={`tab-btn ${activeTab}`}
        onClick={tabClick}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
