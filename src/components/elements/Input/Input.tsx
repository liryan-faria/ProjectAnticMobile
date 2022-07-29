import { Wrapper } from "./style"

interface InputProps {
    value?: 'text'
    type: 'email'
}

export default function Input(props: InputProps) {
    return (
        <Wrapper>
            <input
                type={'email'}
                value={'email@address.com'}
                onChange={e => ('')}
                className="input"

            />
        </Wrapper>
    )
}