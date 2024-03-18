import Image from "next/image";

export default function Slider() {
    return (
        <div className="w-full h-[500px] relative">
            <Image src="/banner.png" alt="slider" width={1920} height={500} className="absolute inset-0 w-full h-full object-cover" />
        </div>
    )
}