import React, { ReactElement, ReactNode } from 'react'
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode
}

export default function Portal({ children }: Props): ReactElement {
    const mount = document.getElementById("modal-root");
    const el = document.createElement('div');
    el.setAttribute('id', 'modal-root');

    return createPortal(children, mount || el);
}
