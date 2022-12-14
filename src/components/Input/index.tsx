import { forwardRef, InputHTMLAttributes, memo } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    Locals?: "Edit_profile" | "Dashboard";
}

import * as S from "./styles";

export const Input = memo(
    forwardRef<HTMLInputElement, InputProps>((props, ref) => {
        const { type, id, label, Locals, ...rest } = props;
        return (
            <S.ContainerLogin>
                <S.Label Locals={Locals} htmlFor={id}>
                    {label}
                </S.Label>
                <S.Input type={type} id={id} {...rest} ref={ref} />
            </S.ContainerLogin>
        );
    })
);
