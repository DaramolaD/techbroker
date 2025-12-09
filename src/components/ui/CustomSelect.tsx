import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string; // Allow external styling overrides
    id?: string; // For accessibility
}

export function CustomSelect({ options, value, onChange, placeholder = "Select an option", className, id }: CustomSelectProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Handle click outside to close
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const selectedOption = options.find((opt) => opt.value === value);

    return (
        <div className={cn("relative w-full", className)} ref={containerRef}>
            {/* Trigger Button */}
            <button
                type="button"
                id={id}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm ring-offset-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                    isOpen && "ring-2 ring-primary/20 border-primary",
                    !selectedOption && "text-gray-400",
                    selectedOption && "text-gray-900"
                )}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className="truncate">
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform duration-200", isOpen && "rotate-180")} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 bg-white shadow-lg shadow-black/5 ring-1 ring-black/5 focus:outline-none animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 slide-in-from-top-2">
                    <ul role="listbox" className="p-1">
                        {options.map((option) => (
                            <li
                                key={option.value}
                                role="option"
                                aria-selected={value === option.value}
                                onClick={() => handleSelect(option.value)}
                                className={cn(
                                    "relative flex w-full cursor-default select-none items-center rounded-lg py-2.5 pl-3 pr-9 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer",
                                    value === option.value && "bg-gray-50 text-gray-900 font-medium"
                                )}
                            >
                                <span className={cn("block truncate", value === option.value ? "font-medium" : "font-normal")}>
                                    {option.label}
                                </span>
                                {value === option.value && (
                                    <span className="absolute right-3 flex h-3.5 w-3.5 items-center justify-center text-primary">
                                        <Check className="h-4 w-4" />
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
