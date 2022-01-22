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
              <Produtos img="https://i.promobit.com.br/180/157788142616427027035574029421.jpg" preco="134,10" precoOriginal={null} descricao='Copo Térmico Stanley Sem Tampa Aço Inox 473ml' loja='KaBuM!' dias='2 d' curtidas='190' comentarios='29'/>
              <Produtos img='https://i.promobit.com.br/180/446411543016426026168637511763.png' preco="639,99" precoOriginal="999,99" descricao='Tênis Asics Gel Nimbus 23 - Masculino' loja='asics.com.br' dias='1 d' curtidas='142' comentarios='38'/>
              <Produtos img='https://i.promobit.com.br/268/475826427716427905926332920350.jpg' preco="1079,99" precoOriginal={null} descricao='Máquina De Lavar E Curar Creality Uw-01' loja='shoptime.com.br' dias='1 d' curtidas='39' comentarios='12'/>
            </div>
            <div className='titulo'>
                <h1>Últimas ofertas</h1>
              </div>
            <div className='cards'>
              <Produtos descricao='Lavadora de Roupas Midea Storm Wash Inverter 11kg Cesto Inox 16 Programas de Lavagem - LFA11X1'/>
              <Produtos />
              <Produtos />
              <Produtos />
              <Produtos />
              <Produtos />
              <Produtos />
              <Produtos />
              <Produtos />
              <Produtos />
              <Produtos />
              <Produtos />
              <Produtos />
              <Produtos />
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
