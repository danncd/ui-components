"use client";

import { ElementType } from "react";

type IconProps = {
	icon: ElementType;
	size?: number | string;
	color?: string;
	className?: string;
};

export default function Icon({
	icon: IconComponent,
	size = 24,
	color = "currentColor",
	className,
}: IconProps) {
	return <IconComponent size={size} color={color} className={className} />;
}
