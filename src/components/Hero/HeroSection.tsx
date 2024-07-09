import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
            <div className='p-4 relative z-10 w-full text-center'>
                <h1>
                    Master the art of Music with Lyric Lounge
                </h1>
                <p>
                    Drive into the world of music with our vast collection of lyrics and music videos and transform
                    yourself into a music maestro.Whether you are a beginner or a pro, we have something for everyone.

                </p>
                <div className="mt-4">
                    <Link href={'/courses'}>
                        Explore Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;