
import './HomePage.scss'; 
import ChatBot from '../../components/ChatBot/ChatBot';
import Faq from '../../components/FAQ/FAQ';
import Tracking from '../../components/Tracking/Tracking';

const HomePage = () => {

    return (
        <main className='home'>
            <Faq />
            <section className='bottom'>
                <ChatBot />
                <Tracking />
            </section>
        </main>
  );
};

export default HomePage;