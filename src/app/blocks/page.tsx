import React from "react";
import Blocks from "@/views/Blocks"
import { queryBlock } from "@/api"
import { Block } from "@/types";
export default async function BlocksServer() {

    // if (params.id.startsWith("0x")) {
    //     console.log("字符串以 '0x' 开头");
    //   } else {
    //     console.log("字符串不以 '0x' 开头");
    //   }
    const blocks = await queryBlock()



    return <Blocks blocks={blocks} />
}