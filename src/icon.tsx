type iconProps = { iconName: string; className: string };

export function Icon({ iconName, className }: iconProps) {
  switch (iconName) {
    case "sql":
      return (
        <svg viewBox="0 -8 72 72" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <g id="Layer_1-2" data-name="Layer 1">
              <path d="M36,4.07c-11.85,0-21.46,3.21-21.46,7.19v5.89c0,4,9.61,7.19,21.46,7.19s21.45-3.21,21.45-7.19V11.26C57.46,7.28,47.85,4.07,36,4.07Z"></path>
              <path d="M36,27.78c-11.32,0-20.64-2.93-21.46-6.66,0,.18,0,9.75,0,9.75,0,4,9.61,7.18,21.46,7.18s21.45-3.21,21.45-7.18c0,0,0-9.57,0-9.75C56.63,24.85,47.32,27.78,36,27.78Z"></path>
              <path d="M57.44,35c-.82,3.72-10.12,6.66-21.43,6.66S15.37,38.72,14.55,35v9.75c0,4,9.61,7.18,21.46,7.18s21.45-3.21,21.45-7.18Z"></path>
            </g>
          </g>
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect height="100%" width="100%" x="10" y="10" />
        </svg>
      );
  }
}
