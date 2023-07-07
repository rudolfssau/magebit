import logo from './pictures/Logo.png';
import submit_logo from './pictures/icons/ic_arrow.svg'
import instagram from './pictures/social_icons/ic instagram.svg'
import facebook from './pictures/social_icons/ic_facebook.svg'
import youtube from './pictures/social_icons/ic youtube.svg'
import twitter from './pictures/social_icons/ic_twitter.svg'
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState('');
    const [error0, setError0] = useState(false);
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const handleSubmit=(e)=> {
        if (email.length === 0) {
            setError2(true);
            e.preventDefault();
        } else {
            setError2(false);
            if (!validRegex.test(email)) {
                setError0(true);
                e.preventDefault();
            } else {
                setError0(false);
                if (email.endsWith(".co")) {
                    setError3(true);
                    e.preventDefault();
                } else {
                    setError3(false);
                    if (!checkbox) {
                        setError1(true);
                        e.preventDefault();
                    } else {
                        setError1(false);
                    }
                }
            }
        }
    }
  return (
    <div className="App">
        <section id='main'>
            <nav id='nav-bar'>
                <ul id='nav-bar-items'>
                    <div id='nav-bar-items-left'>
                        <li><img src={logo} alt="#" className='pineappleLogo'/></li>
                        <h1 className='pineappleName'>pineapple.</h1>
                    </div>
                    <div id='nav-bar-items-right'>
                        <li><a href="#" className='navbarFirstItem'>About</a></li>
                        <li><a href="#" className='navbarSecondItem'>How it works</a></li>
                        <li><a href="#" className='navbarLastItem'>Contact</a></li>
                    </div>
                </ul>
            </nav>
            <main id='main-content'>
                <div id='subscribe-box'>
                    <h1 className='subscribe-box-heading'>Subscribe to newsletter</h1>
                    <h2 className='subscribe-box-subheading'>Subscribe to our newsletter and get 10% discount on pineapple glasses.</h2>
                    <div id='subscribe-box-email-container' className={error2 || error3 || error0 ? 'errorInput' : 'okInput'}>
                        <form id="subscribe-box-form" action="#" onSubmit={handleSubmit}>
                            <input onChange={e=>setEmail(e.target.value)} name="email" type="text" id='subscribe-box-email' placeholder="Type your email address here..."/>
                            <button type='submit'><img src={submit_logo} alt="#"/></button>
                        </form>
                    </div>
                    <section id='subscribe-box-email-error'>
                        {error0? <h3 className='errorMsg0'>Please provide a valid e-mail address</h3>:""}
                        {error1? <h3 className='errorMsg1'>You must accept terms and conditions</h3>:""}
                        {error2? <h3 className='errorMsg2'>Email address is required</h3>:""}
                        {error3? <h3 className='errorMsg3'>We are not accepting subscriptions from Colombian emails</h3>:""}
                    </section>
                    <div id='subscribe-box-termsandconditions'>
                        <input checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)} type="checkbox" name="subscribe-box-accept" className='subscribe-box-termsandconditions-checkbox'/>
                        <label htmlFor="subscribe-box-accept" className='subscribe-box-checkbox-termsandconditions-text'>I agree to <a href="">terms of services</a></label>
                    </div>
                    <div id='subscribe-box-credentials-container'>
                        <ul id='subscribe-box-credentials-list'>
                            <li><a href="#"><img src={facebook} alt="#" className='facebook'/></a></li>
                            <li><a href="#"><img src={instagram} alt="#" className='instagram'/></a></li>
                            <li><a href="#"><img src={twitter} alt="#" className='twitter'/></a></li>
                            <li><a href="#"><img src={youtube} alt="#" className='youtube'/></a></li>
                        </ul>
                    </div>
                </div>
            </main>
        </section>
        <section id='background'>
        </section>
    </div>
  );
}


export default App;
