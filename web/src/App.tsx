import * as React from 'react'
import Hello from  './components/Hello'
import PositionedMenu from './components/Header'
import OutlinedCard from './components/Content'

class App extends React.Component{
    public render() {
        return(
            <div className="App">
                <PositionedMenu />
                <OutlinedCard />
                Hello React Typescript
                <Hello title="标题" age={21}/>
            </div>
        );
    }
}

export default App;