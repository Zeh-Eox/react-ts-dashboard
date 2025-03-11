import React, { ReactNode } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TitleUpdater from './functions/TitleUpdater'
import routes from './routers/router'
import Layout from './components/Layout'

interface RouteType {
  path: string,
  component: ReactNode,
  noLayout?: boolean
}

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route: RouteType) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.noLayout ? (
                  <>
                    <TitleUpdater />
                    {route.component}
                  </>
                ) : (
                  <Layout>
                    <TitleUpdater />
                    {route.component}
                  </Layout>
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  )
}

export default App