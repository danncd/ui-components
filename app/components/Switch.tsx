"use client";

import { useState } from "react";

type SwitchProps = {
	id?: string;
	defaultValue?: boolean;
	onChange?: (value: boolean) => void;
	disabledColor?: keyof typeof colors.disabled;
	enabledColor?: keyof typeof colors.enabled;
};

const colors = {
	enabled: {
		Green: "bg-green-500",
		Blue: "bg-blue-500",
		Red: "bg-red-500",
	},
	disabled: {
		Gray: "bg-gray-300",
		Red: "bg-red-300",
		Blue: "bg-blue-300",
	},
};

export default function Switch({
	id,
	defaultValue = false,
	onChange,
	disabledColor,
	enabledColor,
}: SwitchProps) {
	const [enabled, setEnabled] = useState(defaultValue);

	function toggle() {
		const newValue = !enabled;
		setEnabled(newValue);
		onChange?.(newValue);
	}

	return (
		<span className="flex items-center h-full flex-row gap-2">
			<button
				id={id}
				onClick={toggle}
				className={`w-10 h-5 flex items-center rounded-full pl-0.5 pr-0.5 cursor-pointer transition-colors duration-300
                       ${
							enabled
								? colors.enabled[enabledColor || "Green"]
								: colors.disabled[disabledColor || "Gray"]
						}`}
			>
				<div
					className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300
          ${enabled ? "translate-x-5" : "translate-x-0"}`}
				/>
			</button>
		</span>
	);
}
