"use client";

type TabsTriggerProps = {
	value: string;
	children: React.ReactNode;
	activeTab?: string;
	setActiveTab?: (value: string) => void;
};

export default function TabsTrigger({
	value,
	children,
	activeTab,
	setActiveTab,
}: TabsTriggerProps) {
	const isActive = activeTab === value;

	return (
		<button
			onClick={() => setActiveTab?.(value)}
			className={`px-3 py-2 text-sm border-b-2 transition-colors cursor-pointer
            ${
            isActive
                ? "border-[#212121] dark:border-gray-200 text-[#212121] dark:text-white"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
		>
			{children}
		</button>
	);
}