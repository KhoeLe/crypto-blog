import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

function Home() {
  const dispatch = useDispatch();

  const coins = useSelector((state: RootState) => state.coins);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(coins)
  return (
    <div className='flex w-ful h-full flex-col first-letter:content-center items-center relative text-white font-nunito' >
        {/* Home */}

      <a className='w-screen h-screen bg-gray-300 fixed -z-10 -mt-4'>
        <Logo />
      </a>
      <Navigation />


      {/* React router dom outlet: */}
      < Outlet />
    </div>
  )
}

export default Home
