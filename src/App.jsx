import { useEffect } from 'react';
import { supabase } from '../lib/initSupabase'
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth`,
      }
    })

    supabase.auth.getSession().then((data) => {
      console.log(data.data?.session?.user?.email)
    });
  }

  useEffect(() => {
    supabase.auth.getSession().then((data) => {
      console.log(data)
    });
  }, [])

  const handleLogout = async () => {
    const data = await supabase.auth.signOut()
    console.log({ data })
  }

  return (
    <Routes>
      <Route path='/' element={
        <>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => handleLogin()}>
              count
            </button>
            <button onClick={() => handleLogout()}>
              Logout
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p></>
      } />
      <Route path="/auth" element={<h1>Auth</h1>} />
    </Routes>

  )
}

export default App
