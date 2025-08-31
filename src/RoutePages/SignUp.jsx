import { NavBars } from '../ReusableComponent/Navbar';
import SignUpForm from '../ReusableComponent/SignUpForm';

const SignUp = () => {

    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Background decoration */}
            <div className="absolute block sm:hidden md:block -right-14 -bottom-13 rotate-12 -z-10">
                <div className="w-30 h-30 bg-slate-100 rounded-full -mb-1.5"></div>
                <div className="w-36 h-36 bg-slate-100 rounded-full"></div>
            </div>

            {/* Navbar */}
            <NavBars />

            {/* Main Sign Up Form */}
            <div className="flex justify-center lg:mt-5">
                <div className="w-full max-w-xl p-5 flex flex-col">
                    <div className='relative'>
                        <h1 className="mb-13 text-blue-950 lg:text-4xl text-3xl font-bold text-center">
                            Sign Up
                        </h1>
                    </div>

                    {/* ✅ Form component */}
                    <SignUpForm />

                    {/* Divider */}
                    <div className="w-full h-0.5 bg-blue-950 mt-8"></div>

                    {/* Redirect to login */}
                    <p className="mt-8 text-base text-center font-bold text-blue-950">
                        Already have an account?{' '}
                        <a href="/Login" className="underline">
                        Log In
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default SignUp;
