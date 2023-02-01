import './App.css';
import Content from './components/Content/Content';
import ContentHeader from './components/ContentHeader/ContentHeader';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div>
      <header>
        <Navbar />
        <ContentHeader />
      </header>
      <main>
        <Content />
      </main>
    </div>
  );
}

export default App;
