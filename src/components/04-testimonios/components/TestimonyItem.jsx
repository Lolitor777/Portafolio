

export const TestimonyItem = ({ photo, description, name, job }) => {
    

 


  return (
    <article className="flex justify-center items-center flex-col w-full max-w-[650px] mx-auto">

      <figure className="rounded-full overflow-hidden w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] shadow-sm shadow-gray">
        <img src={ `../../../../assets/${photo}.webp` } alt={ name } className="object-cover object-center" />
      </figure>

      <p className="mt-[1.5em] font-robotoSlab font-normal text-[1.1rem] lg:text-[1.3rem] tracking-normal">{ description }</p>

      <h3 className="font-titillium font-bold text-blue text-[1.2rem] mt-[1.5em]">{ name }</h3>
      <h4 className="font-titillium font-semibold mt-[-4px]">{ job }</h4>

    </article>
  )
}
