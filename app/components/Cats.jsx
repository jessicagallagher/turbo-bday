'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function DancingCat() {
  const [hiddenDancing, setHiddenDancing] = useState(false);
  const [hiddenThug, setHiddenThug] = useState(true);
  const [hiddenDancingKitten, setHiddenDancingKitten] = useState(true);
  const [hiddenBirthdayMessage, setHiddenBirthdayMessage] = useState(true);
  const [timerThug, setTimerThug] = useState(3)
  
  useEffect(() => {
    const intervalThug = setInterval(() => {
      setTimerThug((timerThug) => timerThug - 1);
    }, 1000);
    return () => {
      clearInterval(intervalThug);
      if (timerThug == 1) {
        setHiddenThug(false);
      }
    };
  }, [timerThug])

  const hideImageDancing = setTimeout(() => {
    setHiddenDancing(true);
  }, 3000);

  const hideImageThug = setTimeout(() => {
    setHiddenThug(true);
    setHiddenDancingKitten(false);
    setHiddenBirthdayMessage(false);
  }, 6200);

  return (
    <>
      <div className={hiddenDancing ? 'hidden' : ''}>
        <Image
          src='/gifs/dancing_cat.gif'
          width={211}
          height={374}
          className='rounded-md'
        />
      </div>
      <div className={hiddenThug ? 'hidden' : ''}>
        <Image
          src='/gifs/thug_cat.gif'
          width={375}
          height={375}
          className='rounded-md animate-spinFast'
        />
      </div>
      <div className={hiddenDancingKitten ? 'hidden' : ''}>
        <Image
          src='/gifs/dancing_kitten.gif'
          width={375}
          height={375}
          className='rounded-md animate-spinFast'
        />
      </div>
      <div className={hiddenBirthdayMessage ? 'hidden' : ''}>
        <h3 className='mt-14 mx-14 text-center'>
          Happy birthday to one of my favorite people! I hope that you have a wonderful day full of Stripey snuggles, cake, and ice cream!
        </h3>
      </div>
    </>
  );
}
