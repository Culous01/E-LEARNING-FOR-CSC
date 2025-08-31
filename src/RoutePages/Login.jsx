import { NavBars } from '../ReusableComponent/Navbar';
import { LoginForm } from '../ReusableComponent/LoginForm';

const Login = () => {

    return (
        <>
        <main className='relative min-h-screen overflow-hidden'>
            <div className='absolute block sm:hidden md:block -left-11 -bottom-13 -rotate-6 -z-10'>
                <div className='w-30 h-30 bg-slate-100 rounded-full -mb-1.5'></div>
                <div className='w-36 h-36 bg-slate-100 rounded-full'></div>
            </div>

            <NavBars />
            
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-xl p-5 flex flex-col">
                    <h1 className="mb-15 lg:text-4xl text-3xl text-blue-950 font-bold text-center"> Login your details</h1>

                    <LoginForm />

                    <div className='w-full h-0.5 bg-blue-950 mt-15'></div>

                    <p className="mt-5  text-base text-center font-bold text-blue-950">
                        Don't have an account? <a href="/Signup" className="underline">Sign up</a>
                    </p>
                </div>
            </div>
        </main>
        </>
    )
}

export default Login