
import './App.sass';
import Header from './components/header/header';
import First_page from './components/first_page/first_page'
import Second_page from './components/second_page/second_page'
import Third_page from './components/third_page/third_page'
import Fourth_page from './components/fourth_page/fourth_page';
import Fifth_page from './components/fifth_page/fifth_page'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="app">
  
      <Header />
      <First_page />
      <Second_page />
      <Third_page />
      <Fourth_page />
      <Fifth_page/>
      <Footer/>
      </div>
  );
}

export default App;
