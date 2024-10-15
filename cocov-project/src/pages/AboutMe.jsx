

function AboutMe() {
  return (
    <div className='w-screen grid grid-cols-1 h-full justify-start items-center px-5 mb-7 mt-[100px] gap-3'>
      <div className='h-a  border border-green-800'>
        <img className='h-auto min-w-[120px]' alt="about-image" />
      </div>
      <div className='flex flex-col border border-red-800 justify-start gap-3 items-center w'>
        <h1 className='text-lg font-semibold'>Godfred Essien</h1>
        <p className='text-sm'>
          Front-end developer focused on creating intuitive and visually appealing user interfaces. <br />
          <span className='bullet'>
            - Skilled in HTML, CSS, JavaScript, and React for building dynamic and responsive web applications. <br />
            - Specializes in optimizing user experiences across desktop, tablet, and mobile devices. <br />
            - Completed the ALX Foundations program in Front-End Development. <br />
            - Continuously improving through hands-on projects and staying updated with the latest technologies.
          </span>
        </p>
      </div>
    </div>
  )
}

export default AboutMe
