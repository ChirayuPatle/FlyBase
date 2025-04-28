import { Link } from "react-router-dom"


function LandingPage() {
  return (
    <div>
      <Link to='/login'>
        <button>login</button>
      </Link>
    </div>
  )
}

export default LandingPage
