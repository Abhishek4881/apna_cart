import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React,{useState} from 'react'
import Footer from "./components/Footer";


function App() {
  const products = [
    {
      price: 79899,
      name: "IPHONE",
      quantity: 0,
    },
    {
      price: 12999,
      name: "RedMi",
      quantity: 0,
    }
  ]

  let [ productList ,setProductList]=useState(products)
  let [ totalAmount ,settotalAmount]=useState(0)

  const incrementQuantity =(index) =>{
    let newProductList = [...productList]
    let newtotalAmount = totalAmount
    newProductList[index].quantity++
    newtotalAmount+=newProductList[index].price;
    settotalAmount(newtotalAmount)
    setProductList(newProductList);
  };

  // const decrementQuantity =(index) =>{
  //   let newProductList = [...productList]
  //   let newtotalAmount = totalAmount
  //   if(newProductList[index].quantity >0) {
  //     newProductList[index].quantity--;
  //       newtotalAmount-=newtotalAmount[index].price
  //      }
  //   //  newProductList[index].quantity=0
  //   settotalAmount(newtotalAmount)
  //   setProductList(newProductList);
    
  // };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;

    if (newProductList[index] && newProductList[index].quantity > 0) {
        newProductList[index].quantity--;
        if (newProductList[index].price) {
            newtotalAmount -= newProductList[index].price;
        } else {
            console.error("Price property missing at index", index);
        }
    } else {
        console.error("Invalid index or quantity is zero");
    }

    settotalAmount(newtotalAmount);
    setProductList(newProductList);
};

  const resetQuantity=()=>{
    let newProductList = [...productList]
    newProductList.map((products) => {
      products.quantity=0;
    }
  );

  setProductList(newProductList);
  settotalAmount(0);

  }

  const removeItems=(index)=>{

    let newProductList=[...productList]
    let newtotalAmount = totalAmount
    newtotalAmount-=newProductList[index].quantity*newProductList[index].price
    newProductList.splice(index,1)
    setProductList(newProductList)
    settotalAmount(newtotalAmount)

  }

  return (
    <>
      <Navbar></Navbar>
      <main className="container mt-5">
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItems={removeItems}></ProductList>
      </main>

      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}></Footer>
    </>
  );
}

export default App;
