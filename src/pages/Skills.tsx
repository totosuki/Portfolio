import { IoMdStar, IoMdStarOutline } from 'react-icons/io'
import SkillIconItem from '../components/SkillIconItem';
import { SKILLS } from "../constants";

function Skills() {
  return (
    <div className='my-[20px]'>
      <p className='text-3xl md:text-4xl md:m-[30px]'>Skills</p>
      <div className='grid grid-cols-2 gap-[50px] md:m-[30px]'>
        {SKILLS.map((skill) => (
          <div className='flex flex-col border border-white rounded-[25px] p-[30px] gap-[10px]'>
            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-col gap-[10px]'>
                <p className='text-2xl'>{skill.name}</p>
                <div className='flex flex-row gap-[2px] translate-x-[-3px]'>
                  {Array.from({ length: 5 }, (_, i) => {
                    return i < skill.star ? <IoMdStar size={25} /> : <IoMdStarOutline size={25} />
                  })}
                </div>
              </div>
              <div className='flex flex-row gap-[10px]'>
                {skill.icons.map((icon) => <SkillIconItem size={50} icon={icon.icon} label={icon.label} />)}
              </div>
            </div>
            <div>
              {skill.description.map((line) => <p>{line}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
