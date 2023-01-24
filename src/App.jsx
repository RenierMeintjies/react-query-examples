import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { Home } from "./pages/Home";
import { RQSuperHeroes } from "./pages/RQSuperHeroes";
import { SuperHeroes } from "./pages/SuperHeroes";
import { OnClickDemo } from "./pages/OnClickDemo";
import { SideEffectDemo } from "./pages/SideEffectDemo";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/on-click-demo">On Click Demo</Link>
              </li>
              <li>
                <Link to="/side-effect-demo">Side Effect Demo</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/side-effect-demo" element={<SideEffectDemo />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
            <Route path="/on-click-demo" element={<OnClickDemo />} />
            <Route path="/super-heroes" element={<SuperHeroes />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
