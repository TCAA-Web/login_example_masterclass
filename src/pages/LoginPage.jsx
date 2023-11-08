import { InputField } from "../components/InputField"

export const LoginPage = () => {

    return (
        <>
            <h1>LoginPage</h1>
            <div>
                <InputField
                    name="Username"
                    placeholder='Please enter your username'
                    type="text"
                />
                <InputField
                    name="Password"
                    placeholder='Please enter your password'
                    type="password"
                />
            </div>
        </>
    )
}