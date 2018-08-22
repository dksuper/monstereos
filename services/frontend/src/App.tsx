import * as React from "react"
import { Switch, Route } from "react-router-dom"

import TopMenu from "./modules/shared/TopMenu"
import HomeScreen from "./modules/pages/HomeScreen"
import RankScreen from "./modules/pages/RankScreen"
import AboutScreen from "./modules/pages/AboutScreen"
import FaqScreen from "./modules/pages/FaqScreen"

// import "bulma"
import "bulma/css/bulma.css"
import "./styles/index.css"
import Footer from "./modules/shared/Footer"
class App extends React.Component<{}, {}> {

  public render() {
    return (
      <Switch >
        <React.Fragment>
          <TopMenu />
          <Route path="/" exact component={HomeScreen} />
          <Route path="/rank" exact component={RankScreen} />
          <Route path="/about" exact component={AboutScreen} />
          <Route path="/faq" exact component={FaqScreen} />
          <Footer />
        </React.Fragment>
      </Switch>
    )
  }
}

export default App