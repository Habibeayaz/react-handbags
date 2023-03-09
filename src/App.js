import React from 'react';
import './App.css';
import Button from './ components/Button.js';
import Product from './ components/Product.js';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
              <Button isDisabled={false} clickHandler={() => console.log("To the collection")}>
                  to the collection
              </Button>
              <Button isDisabled={false} clickHandler={() => console.log("Shop all bags")}>
                  shop all bags
              </Button>
              <Button isDisabled={true} clickHandler={() => console.log("pre-orders")}>
                  pre-orders
              </Button>
          </nav>
          <main>
              <Product
                  label="Best seller"
                  img={bag_1}
                  title="The handy bag"
                  price={400}
              />
              {/*<article>
                  <span className="label">Best seller</span>
                  <img src="./assets/bag_1.png" alt="Bag 1"/>
                      <p>The handy bag</p>
                      <h4>€400</h4>
              </article>*/}
      <Product
          label="Best seller"
          img={bag_2}
          title="The stylish bag"
          price={250}
      />
              {/*<article>
                  <span className="label">Best seller</span>
                  <img src="./assets/bag_2.png" alt="Bag 2"/>
                      <p>The stylish bag</p>
                      <h4>€250</h4>
              </article>*/}
              <Product
                  label="New collection"
                  img={bag_3}
                  title="The simple bag"
                  price={300}
              />
              {/*<article>
                  <span className="label">New collection</span>
                  <img src="./assets/bag_3.png" alt="Bag 3"/>
                      <p>The simple bag</p>
                      <h4>€300</h4>
              </article>*/}
              <Product
                  label="New collection"
                  img={bag_4}
                  title="The trendy bag"
                  price={150}
              />
              {/*<article>
                  <span className="label">New collection</span>
                  <img src="./assets/bag_4.png" alt="Bag 4"/>
                      <p>The trendy bag</p>
                      <h4>€150</h4>
              </article>*/}
          </main>

      </>
  );
}

export default App;



