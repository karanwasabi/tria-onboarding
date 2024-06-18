import clsx from 'clsx';
import { forwardRef } from 'react';

interface IInputText {
  name: string;
  label: string;
  placeholder: string;
  suffix?: string;
  disabled?: boolean;
  hasError?: boolean;
  [key: string]: any;
}

const InputText = forwardRef<HTMLInputElement, IInputText>(
  ({ name, label, placeholder, suffix = '', disabled = false, hasError = false, ...rest }, ref) => {
    const inputProps: any = {};
    if (disabled) {
      inputProps.disabled = true;
    }

    return (
      <>
        <fieldset
          className={clsx(
            `relative flex h-full w-full items-center rounded-xl bg-t-light-8 text-16 focus-within:bg-t-half-purple-border-gradient`,
            hasError && `bg-t-half-red-border-gradient`
          )}
        >
          <div className="absolute inset-px flex items-center justify-end rounded-xl bg-t-dark px-4 py-3">
            <div className="absolute inset-0 flex items-center justify-end rounded-xl bg-t-light-4 px-4 py-3">
              <label className="sr-only" htmlFor={name}>
                {label}
              </label>
              <input
                type="text"
                ref={ref}
                name={name}
                id={name}
                aria-labelledby={`${name}-label`}
                className={clsx(
                  `absolute inset-0 rounded-xl bg-transparent px-4 py-3 text-16 leading-normal text-t-white-80 caret-t-purple`,

                  !!suffix && `rounded-r-none pr-14`,

                  // disabled
                  disabled && `cursor-not-allowed text-t-light-30 placeholder-t-light-8`
                )}
                placeholder={placeholder}
                {...inputProps}
                {...rest}
              />
              {!!suffix && <div className="self-end text-t-light-30">{suffix}</div>}
            </div>
          </div>
        </fieldset>
      </>
    );
  }
);

InputText.displayName = 'InputText';

export default InputText;
