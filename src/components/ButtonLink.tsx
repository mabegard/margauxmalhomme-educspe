import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "outline";
  /** `compact` = même proportions que le bouton du bandeau */
  size?: "default" | "compact";
};

/** Primaire : léger relief au repos ; au survol comme le bandeau — assombrit, sans halo clair */
const primaryRelief =
  "border border-[#326b58] bg-[var(--sage)] text-white " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_1px_3px_rgba(0,0,0,0.08),0_4px_14px_-6px_rgba(47,107,87,0.2)] " +
  "transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out " +
  "hover:border-[#244e42] hover:bg-[#285a4a] " +
  "hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.2),0_2px_10px_-4px_rgba(0,0,0,0.15),0_4px_16px_-6px_rgba(47,107,87,0.22)] " +
  "active:translate-y-px active:bg-[#244e42] active:shadow-[inset_0_2px_10px_rgba(0,0,0,0.22)]";

/** Secondaire : survol légèrement plus mat (gris chaud), sans flash lumineux */
const secondaryRelief =
  "border border-black/[0.1] bg-white/95 text-[var(--fg)] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.98),0_1px_3px_rgba(31,41,51,0.05)] " +
  "transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out " +
  "hover:border-black/[0.18] hover:bg-zinc-100/95 " +
  "hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_2px_12px_-4px_rgba(31,41,51,0.1)] " +
  "active:translate-y-px active:bg-zinc-200/90 active:shadow-[inset_0_2px_6px_rgba(31,41,51,0.08)]";

/** Contour : au survol, léger voile vert semi-transparent (moins brutal que le plein) */
const outlineRelief =
  "border border-[var(--sage)] bg-transparent text-[var(--sage)] " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out " +
  "hover:border-[#3d7d68] hover:bg-[rgb(47_107_87_/0.22)] hover:text-[#1e4034] " +
  "hover:shadow-[0_4px_18px_-8px_rgba(47,107,87,0.2)] " +
  "active:translate-y-px active:border-[#326b58] active:bg-[rgb(47_107_87_/0.32)] active:text-[#163529]";

export function ButtonLink({
  variant = "primary",
  size = "default",
  className,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full text-sm font-semibold focus-visible:outline-none";

  const sizing = size === "compact" ? "px-4 py-2" : "px-5 py-3";

  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary: primaryRelief,
    secondary: secondaryRelief,
    outline: outlineRelief,
  };

  return (
    <Link
      {...props}
      className={[base, sizing, variants[variant], className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
