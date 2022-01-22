import logo from './logo.svg';
import './App.css';
import Menu from'./componentes/menu'
import Produtos from './componentes/cardProdutos'

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <div className='conteudo'>
          <section className='cards-produtos'>
              <div className='titulo'>
                <h1>Ofertas em destaque</h1>
              </div>
            <div className='cards'>
              <Produtos descricao='Lavadora de Roupas Midea Storm Wash Inverter 11kg Cesto Inox 16 Programas de Lavagem - LFA11X1'/>
              <Produtos />
              <Produtos />
              <Produtos />
            </div>
          </section>
          <aside>

          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
