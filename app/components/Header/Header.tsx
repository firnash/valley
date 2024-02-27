import Image from "next/image";
import logo from '../../../public/logo-new.svg'
import category from '../../../public/icon-category.svg'
import event from '../../../public/home-event.svg'
import seperator from '../../../public/vertical-bar.svg'
import '../../globals.css';
import Input from "../Input/Input";

const Header = () => {
    return (
        <header className="mainWidth flex justify-between sticky top-0 w-100 z-10 items-center">
            <div className="flex gap-4">
                <div className="logo flex items-center">
                    <Image className="w-[128.345px] h-[25.093px]" alt="logo" src={logo} />
                </div>
                <div className="flex items-center gap-2">
                    <Image alt="category" src={category} />
                    <span className="text-[#00d094]">카테고리</span>
                </div>
                <div className="searchWrapper ml-[65px] w-[335px]">
                    <Input />
                </div>
            </div>
            <div className="flex gap-2">
                <button>
                    <Image alt="events" src={event} />
                </button>
                <Image alt="seperator" src={seperator} />
                <button className="text-sm">로그인 / 회원가입</button>
            </div>
        </header>
    )
}

export default Header;