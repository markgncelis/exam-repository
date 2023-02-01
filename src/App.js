import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div>
      <header>
        <Navbar />
          <section>
            <div className='flex relative mx-auto mt-12 w-4/5'>
              <div className=''>
                <h1 className='text-2xl font-bold'>Announcements</h1>
                <h2 className='font-semibold'>View, create, or edit announcements for all employees of your company.</h2>
              </div>
              <button className='absolute bottom-0 right-0 px-2 w-56 h-10 rounded-md bg-green-500 text-gray-200'>
                <FontAwesomeIcon className='mr-2' icon={faPlus} />
                Post an announcement
              </button>
            </div>
          </section>
      </header>
      <main>
        <section>
          <Content />
        </section>
      </main>
    </div>
  );
}

export default App;
