import React from 'react'
import Sidebar from './sidebar/Sidebar'
import DashboardHeader from './header/DashboardHeader'

const Dashboard: React.FC = () => {
  return (
    <div>
        {/* <Sidebar /> */}
        <Sidebar />

        {/* Main Content area */}
        <div>
            {/* Header */}
            <header>
                <DashboardHeader />
            </header>
            
            {/* Main */}
            <main>
                <h1>Dashboard</h1>
            </main>
        </div>
    </div>
  )
}

export default Dashboard