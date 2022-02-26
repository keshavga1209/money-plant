import React from 'react'

const Hero = () => {
    (function () {
        var d = document; var x = !d.getElementById('razorpay-embed-btn-js')
        if (x) {
            var s = d.createElement('script'); s.defer = !0; s.id = 'razorpay-embed-btn-js';
            s.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js'; d.body.appendChild(s);
        } else {
            var rzp = window['__rzp__'];
            rzp && rzp.init && rzp.init()
        }
    })();
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font font-weight: 700 sm:text-4xl text-3xl mb-4 text-4xl text-green-600">Charity is an Act
                            <br class="hidden lg:inline-block" /> of a Soft Heart.
                        </h1>
                        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div class="flex justify-center">
                            <div className="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_J0efs16fDfNstS/view" data-text="Donate " data-color="#528FF0" data-size="large">
                                <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_J0dEPWTpnVWZ5S" async> </script> </form>
                            </div>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                </div>
            </section>
        </div>
    )
} 

export default Hero;