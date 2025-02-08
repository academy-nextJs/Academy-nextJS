import { TIcons } from "../constants/Footer/type";

export function TitleIcon( props : TIcons ) {
    const { width = "48", height = "17", viewBox="0 0 48 17" ,fill = "#363636" , ...restProps } = props;  
    return(
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg" {...restProps}>
            <path d="M45 10.1598C46.3333 9.38998 46.3333 7.46548 45 6.69568L39 3.23158C37.6667 2.46178 36 3.42403 36 4.96363L36 11.8918C36 13.4314 37.6667 14.3937 39 13.6239L45 10.1598Z" fill={fill} {...restProps}/>
            <path d="M23.75 9.72677C24.75 9.14942 24.75 7.70605 23.75 7.1287L19.25 4.53062C18.25 3.95327 17 4.67496 17 5.82966L17 11.0258C17 12.1805 18.25 12.9022 19.25 12.3248L23.75 9.72677Z" fill={fill} fill-opacity="0.5" {...restProps}/>
            <path d="M6.5 9.29376C7.16667 8.90886 7.16667 7.94661 6.5 7.56171L3.5 5.82966C2.83333 5.44476 2 5.92588 2 6.69568L2 10.1598C2 10.9296 2.83333 11.4107 3.5 11.0258L6.5 9.29376Z" fill={fill} fill-opacity="0.25" {...restProps}/>
        </svg>

    )
    
}