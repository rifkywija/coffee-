import Bloglist from '@/components/Service'
import Contact from '@/components/Contact'
import Jumbotron from '@/components/Jumbotron'
import Navbar from '@/components/Navbar'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <Bloglist/>
      <Contact/>
    </div>
  )
}

export default page