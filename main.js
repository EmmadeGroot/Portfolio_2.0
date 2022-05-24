gsap.registerPlugin(ScrollTrigger);
gsap.timeline({ 

    scrollTrigger: {
        trigger:"#animatie",
        start:"top bottom 100%",
        end:"bottom top 50%"
    } 
})


    
.to("#Staart",{rotation:-10, transformOrigin:"10% 90%"},"+0.02")
.to("#Staart",{rotation:0})

.to("#voorpoot",{rotation:50 },"-0.02")
.to("#voorpoot",{rotation:0})

.to("#Lichaam",{rotation:-10, transformOrigin: "90% 90%"},"-0.02")
.to("#Lichaam",{rotation:0})





