import { ReactNode, forwardRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

interface IButton {
  onClick?: () => void;
  isSubmit?: boolean;
  disabled?: boolean;
  variant: 'purple' | 'plain' | 'outline';
  icon?: 'none' | 'google' | 'x' | 'phonemail' | 'metamask' | 'walletconnect';
  size?: 'auto' | 'full';
  centered?: boolean;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    { children, onClick, isSubmit = false, disabled = false, variant, icon = 'none', centered = false, size = 'full' },
    ref
  ) => {
    const inputProps: any = {};
    if (disabled) {
      inputProps.disabled = true;
    } else if (onClick) {
      inputProps.onClick = onClick;
    }

    return (
      <>
        <div
          className={clsx(
            `group relative rounded-2xl transition active:scale-99`,
            // size
            size === 'auto' ? 'w-max' : 'w-full'
          )}
        >
          <div
            className={clsx(
              // base styles
              `absolute inset-0 z-10 rounded-2xl transition-without-border`,

              // disabled
              disabled && `cursor-not-allowed`,

              // not disabled
              !disabled && `cursor-pointer`,

              // variant - purple
              !disabled && variant === 'purple' && `bg-t-purple-gradient`,

              // variant - plain
              !disabled && variant === 'plain' && `bg-t-light-8`,

              // variant - plain:hover
              !disabled && variant === 'plain' && `group-hover:shadow-t-button-glow`,

              // variant - outline
              !disabled && variant === 'outline' && `border border-t-light-8 bg-transparent`,

              // variant - outline:hover
              !disabled && variant === 'outline' && `group-hover:shadow-t-button-glow`,

              // size
              size === 'auto' ? 'w-max' : 'w-full'
            )}
          ></div>
          {variant === 'purple' && (
            <div className="absolute inset-0.5 z-30 rounded-2xl bg-black opacity-0 transition duration-300 group-hover:opacity-40"></div>
          )}

          <button
            ref={ref}
            type={isSubmit ? 'submit' : 'button'}
            className={clsx(
              `relative z-40 flex w-full items-center gap-3 rounded-2xl px-3 py-1.5 text-16 font-semibold text-t-light`,

              // variant - outline
              variant === 'outline' && `py-3 text-t-white-80`,

              // centered - true or false
              centered ? `justify-center` : `justify-start`,

              // no icon padding
              icon === 'none' && `py-3`
            )}
            {...inputProps}
          >
            {icon !== 'none' && (
              <Image
                className={clsx((icon === 'metamask' || icon === 'walletconnect') && `shadow-t-wallet-icon`)}
                src={`/svgs/icons/icon-${icon}.svg`}
                alt={icon}
                width={icon === 'phonemail' ? 60 : icon === 'metamask' || icon === 'walletconnect' ? 28 : 32}
                height={icon === 'metamask' || icon === 'walletconnect' ? 28 : 32}
              />
            )}
            {children}
          </button>
        </div>
      </>
    );
  }
);

Button.displayName = 'Button';

export default Button;
