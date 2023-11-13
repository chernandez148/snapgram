import { Routes, Route } from 'react-router-dom'
import SignInForm from './_auth/forms/SignInForm'
import SignUpForm from './_auth/forms/SignUpForm'
import Home from './_root/pages/Home'
import './globals.css'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

function App() {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* Public Routes */}
                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SignInForm />} />
                    <Route path='/sign-up' element={<SignUpForm />} />
                </Route>
                {/* Private Routs */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </main>
    )
}

export default App