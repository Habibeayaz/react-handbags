import React from 'react';
import './App.css';
import Button from './ components/Button.js';
import Product from './ components/Product.js';
import Tile from './ components/Tile.js';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

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
            <footer>
                <Tile title="The Brand">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and scrambled it to make a type specimen book.</p>
                </Tile>
                <Tile img={brand} imgTitle="Brand"/>
                <Tile img={our_story} imgTitle="Our Story"/>
                <Tile title="Our story">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Tile>
            </footer>
            {/*<footer>
            <section>
              <h2>The Brand</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</p>
                    </section>
                    <section>
                    <img src="./assets/brand.png" alt="Brand"/>
                    </section>
                    <section>
                <img src="./assets/our_story.png" alt="Our story"/>
                </section>
                <section>
                <h2>Our story</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout.</p>
                    </section>
            </footer>*/}
        </>
    );
}

export default App;



