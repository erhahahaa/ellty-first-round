
import { useEffect, useRef } from "react";

type CheckboxProps = {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
};

export const Checkbox = ({
  checked,
  indeterminate = false,
  onChange,
  disabled = false,
  label,
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      className={`flex items-center gap-2 justify-between cursor-pointer select-none
        ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {label && (
        <span className="text-[14px] text-text-primary">{label}</span>
      )}
      <span className="relative flex items-center">
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />

        <span
          className={`
            w-5.75 h-5.75 rounded-md border
            flex items-center justify-center
            transition-colors
            border-border
            peer-checked:border-blue-600
            peer-checked:bg-blue-600
            peer-focus-visible:ring-2
            peer-focus-visible:ring-blue-500
            active:ring-blue-600/10
            active:ring-3
            active:shadow-blue-200
            ${checked ? "" : "hover:border-border-hover"}
          `}
        >
          <svg
            className={`
              w-5 h-5 text-transparent 
              
              ${(checked && !indeterminate) ? "text-white" : "opacity-0 hover:opacity-100 hover:text-border-light"}
            `}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 8.5L6.5 11L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {indeterminate && (
            <span className="w-2.5 h-0.5 bg-white rounded" />
          )}
        </span>
      </span>


    </label>
  );
}
