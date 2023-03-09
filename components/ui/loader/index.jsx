
export const Loader = ({ className }) => (
  <span className={`animate-spin inline-block w-[15px] h-[15px] border-[2px] rounded-[50%] ${className ? className : 'border-border-secondary'} border-r-[transparent]`} />
)
