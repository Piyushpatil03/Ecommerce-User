import Featured from "../components/Featured";
import Header from "../components/Header";
import NewProducts from "../components/NewProducts";
import { mongooseConnect } from "../lib/mongoose";
import { Product } from "../models/Product";

export default function Home({featuredProduct, newProduct}) {
  return (
    <div>
    <Header/>
    <Featured product={featuredProduct}/>
    <NewProducts products={newProduct}/>
    </div>
  )
}

export async function getServerSideProps(){
  const featuredProductID = '6535ec99ba603de1947f15a5';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductID);
  const newProduct = await Product.find({});
  return {
    props: {featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProduct: JSON.parse(JSON.stringify(newProduct))}
  }

}
