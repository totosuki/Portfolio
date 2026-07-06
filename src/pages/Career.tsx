import { CAREERS } from "../constants";

function Career() {
  return (
    <div className='my-[20px]'>
      <p className='text-3xl md:text-4xl md:m-[30px]'>Career</p>
      <div className='relative mx-[10px] mt-[30px] mb-[50px] md:mx-[30px] md:mt-[40px]'>
        <div className='absolute left-[8px] md:left-1/2 top-[5px] bottom-[5px] w-[2px] bg-white md:-translate-x-1/2' />
        <div className='flex flex-col gap-[40px]'>
          {CAREERS.map((career, i) => (
            <div key={career.period} className='relative md:grid md:grid-cols-2'>
              <span className='absolute left-[9px] md:left-1/2 top-[5px] w-[14px] h-[14px] -translate-x-1/2 rounded-full border-2 border-white bg-black' />
              <div
                className={`flex flex-col gap-[5px] pl-[35px] ${
                  i % 2 === 0
                    ? 'md:col-start-1 md:pl-0 md:pr-[40px] md:text-right md:items-end'
                    : 'md:col-start-2 md:pl-[40px]'
                }`}
              >
                <p className='text-gray-500'>{career.period}</p>
                <div>
                  {career.description.map((description, j) => (
                    <div key={j} className='break-all'>
                      {description.map((segment, k) => (
                        segment.url
                          ? <a
                            key={k}
                            href={segment.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='underline underline-offset-2 hover:bg-white hover:text-black hover:no-underline'
                          >
                            {segment.content}
                          </a>
                          : <span key={k}>{segment.content}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Career;
