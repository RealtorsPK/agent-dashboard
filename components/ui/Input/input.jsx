import PropTypes from 'prop-types';
import tw from "tailwind-styled-components"

const Container = tw.div`
  flex flex-col
`

const InputContainer = tw.input`
  w-full
  px-4 py-[9px]

  border border-border-primary

  disabled:bg-zinc-50

  focus:border-[#732DD970] focus:outline focus:outline-offset-0 focus:outline-4 focus:outline-[#d6bbfb50]

  text-[16px] text-text-primary placeholder:text-text-secondary font-normal
  rounded-[5px]
  peer
`

const Input = (props) => {
  const { onChange, placeholder, type, value } = props;

  return (
    <Container>
      <InputContainer onChange={onChange} placeholder={placeholder} type={type} value={value} />
    </Container>
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}

export default Input;