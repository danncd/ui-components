import { ReactNode } from "react";

type LabelProps = {
	children: ReactNode;
	htmlFor?: string;
	className?: string;
};

export default function Label({ children, htmlFor, className }: LabelProps) {
	return (
		<label
			htmlFor={htmlFor}
			className={`text-gray-700 dark:text-gray-300 font-medium ${className}`}
		>
			{children}
		</label>
	);
}
