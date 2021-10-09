import "../style.css";
import React, { useState, useEffect } from "react";

const ProducstList = () => {
  const [finalAmount, setFinalAmount] = useState(0);
  const [promo, setPromo] = useState("");
  const [products, setProducts] = useState([
    {
      PRODUCT_ID: "serram16",
      PRODUCT_NAME: "16GB RAM SERVER",
      PRICE: 1025.5,
      QUANTITY: 0,
      TOTAL: 0,
    },
    {
      PRODUCT_ID: "serram32",
      PRODUCT_NAME: "32GB RAM SERVER",
      PRICE: 2549.99,
      QUANTITY: 0,
      TOTAL: 0,
    },
    {
      PRODUCT_ID: "serram8",
      PRODUCT_NAME: "8GB RAM SERVER",
      PRICE: 100,
      QUANTITY: 0,
      TOTAL: 0,
    },
  ]);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  const HandleInput = (id, qty, opt) => {
    let index = products.findIndex((item) => item.PRODUCT_ID === id);
    let currentProduct = products[index];
    if (opt === "plus") {
      currentProduct.QUANTITY += 1;
    } else if (opt === "sub") {
      currentProduct.QUANTITY -= 1;
    } else {
      currentProduct.QUANTITY = qty;
    }
    currentProduct.TOTAL =
      currentProduct.PRICE * parseInt(currentProduct.QUANTITY);
    products[index] = currentProduct;
    setProducts([...products]);
  };

  const handlePromo = (e) => {
    console.log(promo);
    var total = products.reduce((total, thing) => total + thing.TOTAL, 0);
    let amt = 0;
    if (promo === "PLSD123") {
      amt = total - (total * 10) / 100;
    } else if (promo === "PLSD456") {
      amt = total - (total * 15) / 100;
    } else {
      amt = total;
    }
    setFinalAmount(amt);
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>
            <span className="shopper"></span> Shopping Cart
          </h1>
        </div>

        <div className="cart transition is-open">
          <div className="table">
            <div className="layout-inline row th">
              <div className="col col-qty">PRODUCT ID</div>
              <div className="col col-qty">PRODUCT NAME</div>
              <div className="col col-qty align-center">QTY</div>
              <div className="col">PRICE</div>
              <div className="col">Total</div>
            </div>
          </div>

          {products.map((el, id) => {
            return (
              <ul key={el.PRODUCT_ID}>
                <li>
                  <div className="layout-inline row" key={el.PRODUCT_ID}>
                    <div className="col col-qty layout-inline">
                      <p>{el.PRODUCT_ID}</p>;
                    </div>

                    <div className="col col-qty layout-inline">
                      <p>{el.PRODUCT_NAME}</p>
                    </div>

                    <div className="col col-qty layout-inline">
                      <button
                        id={id}
                        onClick={() => HandleInput(el.PRODUCT_ID, null, "sub")}
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "PaleTurquoise",
                        }}
                      >
                        -
                      </button>

                      <input
                        id={id}
                        type="number"
                        value={el.QUANTITY}
                        onChange={(e) =>
                          HandleInput(el.PRODUCT_ID, e.target.value, "no")
                        }
                        style={{ height: "30px" }}
                      />
                      <button
                        id={id}
                        onClick={() => HandleInput(el.PRODUCT_ID, null, "plus")}
                        style={{
                          borderRadius: "15px",
                          backgroundColor: "PaleTurquoise",
                        }}
                      >
                        +
                      </button>
                    </div>

                    <div className="col col-vat col-numeric">
                      <p>${el.PRICE}</p>
                    </div>
                    <div className="col col-total col-numeric">
                      {" "}
                      <p> ${el.TOTAL}</p>
                    </div>
                  </div>
                </li>
              </ul>
            );
          })}

          <div className="tf">
            <strong
              style={{ margin: "10px", paddingTop: "20px", fontSize: "15px" }}
            >
              <label style={{ paddingTop: "100px", fontSize: "15px" }}>
                Products :
              </label>

              {products
                .filter((el) => el.QUANTITY > 0)
                .map((el, id) => {
                  return (
                    <>
                      <div key={id}>
                        <ul key={id} style={{ fontSize: "15px" }}>
                          <li style={{ paddingLeft: "80px" }}>
                            {el.QUANTITY}X{el.PRODUCT_NAME}
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                })}

              <div style={{ margin: "10px" }}>
                <label>Promotion : </label>
                <input
                  type="numeric"
                  style={{ width: "200px", height: "30px" }}
                  onChange={(e) => setPromo(e.target.value)}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      handlePromo(promo);
                    }
                  }}
                />
              </div>
            </strong>
          </div>

          <div className="tf">
            <div className="row layout-inline">
              <div className="col">
                <p>
                  Total:$
                  {finalAmount > 0
                    ? finalAmount
                    : products.reduce((total, thing) => total + thing.TOTAL, 0)}
                </p>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProducstList;
