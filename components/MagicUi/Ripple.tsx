import Ripple from "../ui/ripple";

 

export function RippleStyle({children}:{children:React.ReactNode}) {
  return (
    <div className="relative mt-15 z-10  flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-lg   bg-background md:shadow-xl">
     {children}
      <Ripple />
    </div>
  );
}
