import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const CTAsection = () => {
  return (
    <section className='py-16 bg-primary text-primary-foreground'>
         <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to experience our foods</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
                Book your table now or order online
            </p>
            <div className="flex gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                      <Link href="/reservation">
                          Book a Table
                      </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                      <Link href="/order">
                          Order Online
                      </Link>
                </Button>
            </div>
         </div>
    </section>
  )
}

export default CTAsection