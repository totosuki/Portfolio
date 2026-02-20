import SkillIconItem from "../components/SkillIconItem";
import { PRODUCTS } from "../constants";

function Products() {
  return (
    <div className='my-[20px]'>
      <p className='text-3xl md:text-4xl md:m-[30px]'>Products</p>
      <div className='flex flex-col divide-y divide-white'>
        {PRODUCTS.map((product) => (
          <a href={product.url} target='_blank' rel='noopener noreferrer'>
            <div className='flex flex-col md:flex-row gap-[20px] md:gap-[50px] px-[10px] py-[20px] md:p-[30px] hover:bg-white/5 transition-colors'>
              <div className='flex flex-col justify-between gap-[20px] w-[250px]'>
                <p className='text-2xl'>{product.name}</p>
                <div className='flex flex-row items-center gap-[20px]'>
                  {product.skills.map((skill) => <SkillIconItem size={30} icon={skill.icon} label={skill.label} /> )}
                </div>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  {product.description.map((line) => <p>{line}</p>)}
                </div>
                <p>{product.period}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Products;
