

function LoginTemplate() {
    
    return (
        <div>
            <form className="">

                <input name="EMAIL" type="email" required
                    className=""
                />

                <input name="PASSKEY" type="password" required
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginTemplate;