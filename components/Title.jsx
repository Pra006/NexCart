import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Title = ({ headingStart, headingEnd, subtext, hasAction, linkTo = '' }) => {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <div className='text-center sm:text-left'>
                <h3 className='mb-1'>
                    <span>{headingStart} </span>
                    <span className='text-primary font-thin underline underline-offset-2'>{headingEnd}</span>
                </h3>
                <p>{subtext}</p>
            </div>
            {hasAction && (
                <Link href={linkTo}>
                    <button className='btn btn-ghost btn-sm gap-2 group'>
                        {hasAction}
                        <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' />
                    </button>
                </Link>
            )}
        </div>
    )
}

export default Title