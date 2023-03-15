import clsx from 'clsx';
import { useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  value: string;
  icon?: React.ReactNode;
}

export function Input({ label, id, value, icon, ...rest }: Props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col relative w-full">
      {icon ? (
        <div className="absolute top-[12px] left-[14px]">{icon}</div>
      ) : null}
      <label
        className={clsx(
          'z-30 px-1 bg-white text-base font-medium pointer-events-none absolute top-[12px] left-12 transition-all duration-300 transform',
          {
            'translate-y-[-24px] translate-x-[-10px] scale-90 Active text-gray-600':
              isActive || value.length,
            'text-gray-400': !isActive && !value.length,
          },
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="relative w-full z-20 text-grayTertiary appearance-none bg-transparent h-12 px-10 py-4 rounded-lg border border-grayTertiary focus:outline-none focus:ring-2 focus:ring-focus focus:border-transparent transition-all duration-200"
        id={id}
        value={value}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        autoFocus
        {...rest}
      />
    </div>
  );
}
