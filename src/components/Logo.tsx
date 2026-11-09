type LogoProps = { size?: number; title?: string };

/** Blueprint-frame mark: thin square with "+" corner marks around a steel-blue V. */
export function LogoMark({ size = 32, title }: LogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect x="8" y="8" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 3.5v9M3.5 8h9M40 3.5v9M35.5 8h9M8 35.5v9M3.5 40h9M40 35.5v9M35.5 40h9"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M16 16l8 16 8-16" stroke="#3d5b7c" strokeWidth="3.5" fill="none" strokeLinejoin="miter" />
    </svg>
  );
}

export function Corners() {
  return (
    <>
      <i className="c tl" aria-hidden="true" />
      <i className="c tr" aria-hidden="true" />
      <i className="c bl" aria-hidden="true" />
      <i className="c br" aria-hidden="true" />
    </>
  );
}
