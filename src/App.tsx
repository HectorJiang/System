import * as React from 'react'
import Hello from  './components/Hello'

//           /\
//          /**\
//         /****\   /\
//        /      \ /**\
//       /  /\    /    \        /\    /\      /\
//      /  /  \  /      \      /  \/\/  \    /  \/\                           -------- __@
//     /  /    \/ /\     \    /    \ \   \  /   /  \       LIFE IS SHORT      ----- _`\<,_
//    /  /      \/  \/\   \  /      \     \         \      KEEP FORWARD         ---- (*)/ (*)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class App extends React.Component{
    public render() {
        return(
            <div className="App">
                Hello React Typescript
                <Hello title="标题" age={21}/>
            </div>
        );
    }
}

export default App;