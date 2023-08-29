import products from "../../db/db"

const HomeProducts = () => {
  return (
    <div>
      <div className="flex gap-8 flex-row justify-center max flex-wrap my-10">
        {products.slice(0,15).map((product) => (
          <div key={product.id}className="w-56 text-center hover:shadow-xl hover:scale-110 duration-[0.5s]">
          <img src={product.image} className="bg-slate-600 w-10/12 mx-auto" />
          <h1>{product.name}</h1>
          <p>₱ {product.price}</p>
        </div>
        ))}
      </div>      
    </div>
  )
}

export default HomeProducts