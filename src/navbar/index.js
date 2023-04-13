import Logo from "./Logo";
import NavButton from "./NavButton";
import AuthButton from "./AuthButton";
import Router from "./Router";

export default function Navbar() {
    const styles = {
        navbar: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 10,

            background: "#fff",
            boxShadow: "0 8px 23px #0000000d",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
            height: "80px",
            padding: "0 150px"
        }
    }
    return (
        <div style={styles.navbar}>
            <Logo/>
            <Router>
                <NavButton link={"/"}>
                    <p style={{
                        background: "linear-gradient(103.17deg,#44c3f9 -6.17%,#27e4a0 104.04%)",
                        webkitBackgroundClip: "text",
                        webkitTextFillColor: "transparent"
                    }}>
                        Homepage
                    </p>
                </NavButton>
                <NavButton link={process.env.LINK}>Solutions</NavButton>
                <NavButton link={process.env.LINK}>About us</NavButton>
                <NavButton link={process.env.LINK}>Guide</NavButton>
                <NavButton link={process.env.LINK}>Support</NavButton>
            </Router>
            <AuthButton/>
        </div>
    )
}