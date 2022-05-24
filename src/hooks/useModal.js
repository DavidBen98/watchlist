import { useState } from 'react';
const initialValue = false;
export const useModal = () => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = () => {setIsOpen(true)};

    const closeModal = () => setIsOpen(false);

    return [isOpen, openModal, closeModal];
}

 