const Hero = () => {

    const source = 'https://firebasestorage.googleapis.com/v0/b/coder-tienda-react.appspot.com/o/header%2FbannerHeader.png?alt=media&token=75fb6890-b96c-4c99-b885-2535594bb90c'
  
    return (
        <>
            <img className="sm:object-contain sm:w-screen mb-4 md:mb-14" src={source} alt='banner'/>
        </>
      )
}
export default Hero