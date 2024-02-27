import Image from "next/image";
import search from '../../../public/search.svg'
import '../../globals.css';

const Input = () => {
    return (
        <div className="flex text-[14px] gap-[10px] relative ml-2 py-[9px] px-[12px] border-gray-200 border-solid border">
            <Image className="w-[20px]" src={search} alt="icon" />
            <input className="text-[#333333] w-full" type="search" placeholder="살까말까 고민된다면 검색해보세요!" value=""></input>
        </div>
    )
}

export default Input;