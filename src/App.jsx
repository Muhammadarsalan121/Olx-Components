import React from 'react'
import Card from './components/Card'

function App() {
  return (
   <>


   <h1 className='text-3xl text-center font-bold mt-3'>OLX Card Clone By React</h1>


   <div className='flex justify-center flex-wrap gap-2'>

    <Card price={'21,500'} description={'oppo a57 8gb256gb 5000mah battery 03214937603'} url={'https://images.olx.com.pk/thumbnails/482576291-800x600.webp'} address={'Walton Road, Lahore'} time={'1 day ago'} />

   <Card price={'29,500'} description={"Reno 2F 256 gb 8 gb Brand new PTA Approved 10/10 Pop Up Camera"} url={'https://images.olx.com.pk/thumbnails/479714138-800x600.webp'} address={'Allama Iqbal Road, Sialkot'} time={'2 weeks ago'} />

   <Card price={'270,000'} description={'iphone 14 max pro 512 GB'} url={'https://images.olx.com.pk/thumbnails/480836588-800x600.webp'} address={'Township - Sector A2, Lahore'} time={'1 week ago'}/>

   <Card price={'66,000'} description={'Oneplus 8t 12/256 dual sim'} url={'https://images.olx.com.pk/thumbnails/459983024-800x600.webp'} address={'Commercial Market, Rawalpindi'} time={'4 days ago'}/>

    <Card price={'79,000'} description={'iPhone X 256 GB PTA approved'} url={'https://images.olx.com.pk/thumbnails/483071130-800x600.webp'} address={'Liaquat Bagh, Rawalpindi'} time={'23 minutes ago'}/>


 <Card price={'60,000'} description={'Samsung S21 ultra,S21,S22,S23,Zflip4'} url={'https://images.olx.com.pk/thumbnails/471830752-800x600.webp'} address={'Hall Road, Lahore'} time={'1 week ago'}/>
  
   </div>

   </>

   
  )
}

export default App