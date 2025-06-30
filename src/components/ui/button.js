import React from "react";

export function Button({ children, asChild = false, variant = "default", ...props }) {
  const base = "px-4 py-2 rounded font-medium inline-block transition";
  const styles =
    variant === "outline"
      ? "border border-gray-400 text-gray-700 bg-white hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  const className = `${base} ${styles}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className, ...props });
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
