import * as React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export function Logo({ className, ...props }: Props) {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("", className)}
            {...props}
        >
            <g clip-path="url(#clip0_86_58)">
                <path
                    d="M25.5384 1.23071H6.46148C3.56917 1.23071 1.23071 3.56917 1.23071 6.46148V25.4769C1.23071 28.3692 3.56917 30.7076 6.46148 30.7076H25.4769C28.3692 30.7076 30.7076 28.3692 30.7076 25.4769V6.46148C30.7076 3.56917 28.3692 1.23071 25.4769 1.23071H25.5384Z"
                    fill="#FFFF00"
                    stroke="#E8E200"
                    stroke-width="0.615385"
                    stroke-miterlimit="10"
                />
                <path
                    d="M22.5231 24.0616C22.5231 24.5539 22.3385 25.6 21.4154 26.4616C20.3693 27.3847 19.077 27.4462 18.7077 27.4462H13.2923C11.1385 27.4462 9.41542 25.9077 9.41542 24C9.35389 21.4154 10.8308 19.077 13.2923 18.0924C15.9385 16.9847 18.4 17.9693 18.7077 18.0924C21.477 19.2 22.7693 21.9077 22.5847 24L22.5231 24.0616Z"
                    fill="#FFF41F"
                    stroke="#E8E200"
                    stroke-width="0.307692"
                    stroke-miterlimit="10"
                />
                <path
                    d="M13.5384 21.5384C13.5384 21.3538 13.5999 20.8615 13.9692 20.5538C14.3384 20.1846 14.8307 20.123 15.0153 20.123H17.0461C17.8461 20.123 18.4615 20.7384 18.4615 21.5384C18.4615 22.5846 17.9076 23.5692 17.0461 24C16.0615 24.4307 15.1384 24 15.0153 24C13.9692 23.5077 13.4153 22.4 13.5384 21.5384Z"
                    fill="black"
                />
                <path
                    d="M19.2615 22.2153H27.4461"
                    stroke="black"
                    stroke-width="0.123077"
                    stroke-miterlimit="10"
                />
                <path
                    d="M19.2615 21.2923L27.2615 19.5077"
                    stroke="black"
                    stroke-width="0.123077"
                    stroke-miterlimit="10"
                />
                <path
                    d="M19.2615 23.1384L27.2615 24.923"
                    stroke="black"
                    stroke-width="0.123077"
                    stroke-miterlimit="10"
                />
                <path
                    d="M12.7385 22.2153H4.49231"
                    stroke="black"
                    stroke-width="0.123077"
                    stroke-miterlimit="10"
                />
                <path
                    d="M12.7385 21.3538L4.73853 19.5692"
                    stroke="black"
                    stroke-width="0.123077"
                    stroke-miterlimit="10"
                />
                <path
                    d="M12.7385 23.1384L4.73853 24.923"
                    stroke="black"
                    stroke-width="0.123077"
                    stroke-miterlimit="10"
                />
                <path
                    d="M9.41539 17.6615C12.1231 17.6615 14.3385 14.7077 14.3385 11.0769C14.3385 7.44616 12.1231 4.49231 9.41539 4.49231C6.70769 4.49231 4.49231 7.44616 4.49231 11.0769C4.49231 14.7077 6.70769 17.6615 9.41539 17.6615Z"
                    fill="#FFF41F"
                    stroke="#E8E200"
                    stroke-width="0.307692"
                    stroke-miterlimit="10"
                />
                <path
                    d="M9.84614 15.6307C10.8308 15.6307 11.6308 13.5384 11.6308 10.8923C11.6308 8.24612 10.8308 6.15381 9.84614 6.15381C8.86152 6.15381 8.06152 8.24612 8.06152 10.8923C8.06152 13.5384 8.86152 15.6307 9.84614 15.6307Z"
                    fill="white"
                    stroke="black"
                    stroke-width="0.307692"
                    stroke-miterlimit="10"
                />
                <path
                    d="M10.5231 13.6C11.1385 13.6 11.6308 12.4923 11.6308 11.1384C11.6308 9.78457 11.1385 8.67688 10.5231 8.67688C9.90771 8.67688 9.41541 9.78457 9.41541 11.1384C9.41541 12.4923 9.90771 13.6 10.5231 13.6Z"
                    fill="black"
                />
                <path
                    d="M22.5846 17.6615C25.2923 17.6615 27.5077 14.7077 27.5077 11.0769C27.5077 7.44616 25.2923 4.49231 22.5846 4.49231C19.8769 4.49231 17.6615 7.44616 17.6615 11.0769C17.6615 14.7077 19.8769 17.6615 22.5846 17.6615Z"
                    fill="#FFF41F"
                    stroke="#E8E200"
                    stroke-width="0.307692"
                    stroke-miterlimit="10"
                />
                <path
                    d="M16 24.123C16 24.1846 16.1231 24.8615 15.2 25.3538C14.5846 25.6615 13.8461 25.723 13.5385 25.7846"
                    stroke="black"
                    stroke-width="0.123077"
                    stroke-miterlimit="10"
                />
                <path
                    d="M16 24.123C16 24.1846 15.8769 24.8615 16.8 25.3538C17.4153 25.6615 18.1538 25.723 18.4615 25.7846"
                    stroke="black"
                    stroke-width="0.123077"
                    stroke-miterlimit="10"
                />
                <path
                    d="M22.4 15.6307C23.3846 15.6307 24.1846 13.5384 24.1846 10.8923C24.1846 8.24612 23.3846 6.15381 22.4 6.15381C21.4154 6.15381 20.6154 8.24612 20.6154 10.8923C20.6154 13.5384 21.4154 15.6307 22.4 15.6307Z"
                    fill="white"
                    stroke="black"
                    stroke-width="0.307692"
                    stroke-miterlimit="10"
                />
                <path
                    d="M23.1385 13.6C23.7538 13.6 24.2461 12.4923 24.2461 11.1384C24.2461 9.78457 23.7538 8.67688 23.1385 8.67688C22.5231 8.67688 22.0308 9.78457 22.0308 11.1384C22.0308 12.4923 22.5231 13.6 23.1385 13.6Z"
                    fill="black"
                />
            </g>
            <defs>
                <clipPath id="clip0_86_58">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
