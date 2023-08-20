import dayjs from "dayjs";
import { message } from "antd"
import { Address } from "@/types";
export const timeDifference = (knownTime: number) => {

    const currentTime = new Date().getTime();

    // 计算已知时间与当前时间的时间差（单位：毫秒）
    const timeDifference = currentTime - (knownTime * 1000);

    // 将时间差转换为分钟数
    const secondsDifference = Math.floor(timeDifference / (1000 * 60));

    return secondsDifference + "secs go"
}

export const timeFormat = (time: number) => {
    return dayjs(time * 1000).format("YYYY-MM-DD HH:mm:ss")
}

export function copyToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    message.success("copied!")
}

// format address to 0x123...ab32d, but address length need === 42.
export const formatAddress = (address: Address) => {
    const prefix = address.slice(0, 9);
    const suffix = address.slice(-4);
    const result = prefix + "..." + suffix;
    return result;
}
