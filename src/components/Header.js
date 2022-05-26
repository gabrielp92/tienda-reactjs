const Header = () => {

    const source = 'https://firebasestorage.googleapis.com/v0/b/coder-tienda-react.appspot.com/o/header%2FbannerHeader.png?alt=media&token=75fb6890-b96c-4c99-b885-2535594bb90c'
  
    return (
        <>
            <img className="sm:object-contain sm:h-screen mt-[4rem] mb-[2rem] sm:mt-[-6.2rem] sm:mb-[-7rem] md:mt-[-4.8rem] md:mb-[-5.25rem] lg:mt-[-2.5rem] lg:mb-[-2.5rem] xl:mt-[-2rem] xl:mb-[-2rem] 2xl:mt-[-4.5rem] 2xl:mb-[-2rem]" src={source} alt='banner'/>
        </>
      )
}
export default Header