import type { Icon } from "../types";

function SkillIconItem({ size, icon: Icon, label }: {size: number} & Icon) {
  return (
    <div className='relative group'>
      {typeof Icon === 'string'
        ? <img src={Icon} alt={label} style={{ width: size, height: size }} />
        : <Icon size={size} />
      }
      <span
        className='
          absolute -top-7 left-1/2 -translate-x-1/2
          px-[6px] py-[2px] rounded text-xs whitespace-nowrap
          bg-white/20 backdrop-blur-sm
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
          pointer-events-none
        '
      >
        {label}
      </span>
    </div>
  );
}

export default SkillIconItem;
