import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import MyWork from './pages/MyWork';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/My-Portfolio" component={Home} />
        <Route exact path="/eso" component={MyWork}/>
      </div>
    </Router>
  );
}

export default App;


// {// Reference: http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/

// $ git add .
// $ git status // to see what changes are going to be commited
// $ git commit -m 'Some descriptive commit message'
// $ git push origin master

// $ git checkout gh-pages // go to the gh-pages branch
// $ git rebase master // bring gh-pages up to date with master
// $ git push origin gh-pages // commit the changes
// $ git checkout master // return to the master branch}