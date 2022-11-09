import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import "../setPublic/css/init.css"
// import Title from "./components/title"
// import Problems from "./components/problems"
// import ElonMusk from "./components/ElonMusk"
// import Avantaje from "./components/avantaje"
// import ProblemSolve1 from "./components/problemsSove/problem1"
// import ProblemSolve2 from "./components/problemsSove/problem2"
// import ProblemSolve3 from "./components/problemsSove/problem3"
// import ProblemSolve4 from "./components/problemsSove/problem4"
// import ProblemSolve5 from "./components/problemsSove/problem5"
// import Sfarsit from "./components/sfarsit"

const Title = lazy(() => import("./components/title"))
const Problems = lazy(() => import("./components/problems"))
const ElonMusk = lazy(() => import("./components/ElonMusk"))
const Avantaje = lazy(() => import("./components/avantaje"))
const ProblemSolve1 = lazy(() => import("./components/problemsSove/problem1"))
const ProblemSolve2 = lazy(() => import("./components/problemsSove/problem2"))
const ProblemSolve3 = lazy(() => import("./components/problemsSove/problem3"))
const ProblemSolve4 = lazy(() => import("./components/problemsSove/problem4"))
const ProblemSolve5 = lazy(() => import("./components/problemsSove/problem5"))
const Sfarsit = lazy(() => import("./components/sfarsit"))
const Loading = lazy(() => import("./components/loading"))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/0/:id' element={<Title />}></Route>
          <Route path='/1/:id' element={<Avantaje />}></Route>
          <Route path='/2/:id' element={<Problems />}></Route>
          <Route path='/3/:id' element={<ProblemSolve1 />}></Route>
          <Route path='/4/:id' element={<ProblemSolve2 />}></Route>
          <Route path='/5/:id' element={<ProblemSolve3 />}></Route>
          <Route path='/6/:id' element={<ProblemSolve4 />}></Route>
          <Route path='/7/:id' element={<ProblemSolve5 />}></Route>
          <Route path='/8/:id' element={<ElonMusk />}></Route>
          <Route path='/9/:id' element={<Sfarsit />}></Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App