// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Children } from "react";
import "./style.css";
import {
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    Children: [
      {
        path: "Acceuil",
        element: <div>Acceuil</div>,
      },
      {
        path: "Propos",
        element: <div>A propos</div>,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <header>
        Kasa
        <nav>
          <NavLink to="/Acceuil">Accueil</NavLink>
          <NavLink to="/Propos">A propos</NavLink>
        </nav>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

function PageError() {
  return (
    <>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas</h2>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App;
