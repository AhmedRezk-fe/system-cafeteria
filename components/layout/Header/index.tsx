import Input from '@/components/component-helpers/input'
import React from 'react';
import { ChangeEvent } from "react";
import Sidebar from '../Sidebar/index';

// Image
import Avatar from '../image/profile-picture-5.jpg';
import Image from 'next/image';
import { FaAngleDown } from "react-icons/fa6";

const index = () => {

    const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("element clicked", event.target.value);
    };

    return (
        <>
            <div className='flex justify-between py-5 px-6'>
                <form className='w-[350px]'>
                    <Input
                        type="text"
                        eventInput={handleClick}
                        placeholder="search ..."
                        name="n"
                        placeIcon="end"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#7E8DA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 22L20 20" stroke="#7E8DA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </Input>
                </form>

                <div className="flex items-center">
                    <Image src={Avatar} className="w-10 h-10 rounded-full" alt="Rounded avatar" />
                    <p className='mx-2'>Name</p>
                    <span className='cursor-pointer'><FaAngleDown /></span>
                </div>
            </div>
            <Sidebar navBar='navBar' />
        </>
    )
}

export default index