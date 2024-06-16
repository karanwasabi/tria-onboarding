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
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ children, onClick, isSubmit = false, disabled = false, variant, icon = 'none', size = 'full' }, ref) => {
    const inputProps: any = {};
    if (disabled) {
      inputProps.disabled = true;
    } else if (onClick) {
      inputProps.onClick = onClick;
    }

    return (
      <>
        <button
          ref={ref}
          type={isSubmit ? 'submit' : 'button'}
          className={clsx(
            // base styles
            `group/button text-16 flex items-center justify-start gap-3 rounded-2xl px-3 py-1.5 font-semibold text-t-light`,

            // disabled
            disabled && `cursor-not-allowed`,

            // not disabled
            !disabled && `cursor-pointer`,

            // variant - purple
            !disabled && variant === 'purple' && `bg-t-purple-gradient`,

            // variant - purple:hover
            !disabled && variant === 'purple' && ``,

            // variant - plain
            !disabled && variant === 'plain' && `bg-t-light-8`,

            // variant - plain:hover
            !disabled && variant === 'plain' && ``,

            // variant - outline
            !disabled && variant === 'outline' && `border border-t-light-8 bg-transparent`,

            // variant - outline:hover
            !disabled && variant === 'outline' && ``,

            // size
            size === 'auto' ? 'w-max' : 'w-full'
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
      </>
    );
  }
);

Button.displayName = 'Button';

export default Button;
