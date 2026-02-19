import { PRODUCTS } from "../constants";

function Products() {
  return (
    <div className='px-[30px] py-[20px]'>
      <div className='flex flex-col divide-y divide-white'>
        {PRODUCTS.map((product) => (
          <div className='flex flex-row gap-[50px] py-[30px]'>
            <div className='flex flex-col justify-between gap-[20px] w-[20%]'>
              <p className='text-2xl'>{product.name}</p>
              <div className='flex flex-row items-center gap-[20px]'>
                {product.skills.map((Icon) => <Icon size={30} />)}
              </div>
            </div>
            <div className='flex flex-col gap-[20px]'>
              <div>
                {product.description.map((line) => <p>{line}</p>)}
              </div>
              <p>{product.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
