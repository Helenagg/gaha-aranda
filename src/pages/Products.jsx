import Card from "../components/Card"
import { productsData } from "../data/data"

const Products = () => {
  return (
    <div className='text-secondary mt-6'>
      <div className='text-center'>
        <h1 className='text-3xl uppercase'>Productos</h1>
      </div>
      <div className='md:mt-10 flex items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {productsData.map((product) => (
            <Card
              key={product.title}
              title={product.title}
              content={product.content}
              Icon={product.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products