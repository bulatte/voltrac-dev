export default function SlideshowArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        fill="#FFF"
        d="M19.686 9.058h-8v2h8zM10.272.16l-9.9 9.899 1.415 1.414 9.9-9.9z"
      />
      <path fill="#FFF" d="M11.686 18.543l-9.9-9.9-1.413 1.414 9.9 9.9z" />
    </svg>
  );
}
