import React from "react";
import Image from "next/image";
import { Shortcut } from "@/app/model/Shortcuts";

interface Props {
  data: Shortcut[];
}

const ShortcutComponent: React.FC<Props> = ({ data }) => {
  return (
    <section className="mainWidth customMargin flex justify-between py-[12px] text-center">
      { data && data.length && data.map((item: Shortcut) => (
        <div key={item.createdAt} className="shortcutContainer">
            <Image width="62" height="62" src={item.imageUrl} alt={item.title} />
            <span className="text-[13px]">{item.title}</span>
        </div>
      ))}
    </section>
  );
};

export default ShortcutComponent;