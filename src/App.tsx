import * as React from 'react'
const logo = require('./logo.svg')
import './App.css'

import { lazyInject } from './inversify.config'
import { Actions } from './actions'


const componentState = {
  janken: ''
}


export class App extends React.Component<{}, typeof componentState> {
  @lazyInject(Actions) actions: Actions


  constructor(props) {
    super(props)
    this.state = { ...componentState }
  }


  goo(event): void {
    this.setState({ janken: this.actions.goo() })
  }


  choki(event): void {
    this.setState({ janken: this.actions.choki() })
  }


  paa(event): void {
    this.setState({ janken: this.actions.paa() })
  }


  random(event): void {
    const random = Math.random()
    if (random > 0.66) {
      this.goo(event)
    } else if (random > 0.33) {
      this.choki(event)
    } else {
      this.paa(event)
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <button onClick={(e) => this.goo(e)}>グー</button>
          <button onClick={(e) => this.choki(e)}>チョキ</button>
          <button onClick={(e) => this.paa(e)}>パー</button>
          <button onClick={(e) => this.random(e)}>ランダム</button>
          <h1>{this.state.janken}</h1>
        </div>
        <a href="https://github.com/ovrmrw/meguroes-react-inversify-typescript">GitHub</a>
      </div>
    )
  }

}
